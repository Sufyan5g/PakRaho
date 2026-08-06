const CACHE_NAME = 'pak-raho-v7';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './firebase-app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Files that change often — always try the network first so users get the
// latest version immediately; only fall back to cache when offline.
const NETWORK_FIRST_FILES = ['/', '/index.html', '/style.css', '/app.js', '/firebase-app.js'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isOwnAsset = url.origin === self.location.origin;
  const path = url.pathname.endsWith('/') ? '/' : url.pathname;
  const isCoreAppFile = isOwnAsset && (NETWORK_FIRST_FILES.includes(path) || path === '');

  if (isCoreAppFile) {
    // Network-first: always fetch the latest app code when online.
    event.respondWith(
      fetch(req, { cache: 'no-store' }).then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
        return res;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
  } else if (isOwnAsset) {
    // Cache-first for rarely-changing static assets (icons, manifest).
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          return res;
        }).catch(() => caches.match('./index.html'));
      })
    );
  } else {
    // Third-party (Firebase SDKs, fonts, prayer-time API) — network first, cache fallback.
    event.respondWith(
      fetch(req).then((res) => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
        return res;
      }).catch(() => caches.match(req))
    );
  }
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-192.png',
      tag: event.data.tag || 'namaz-alert',
      vibrate: [200, 100, 200],
      requireInteraction: false,
    });
  }
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      for (const c of clients) { if ('focus' in c) return c.focus(); }
      if (self.clients.openWindow) return self.clients.openWindow('./');
    })
  );
});

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'namaz-check') event.waitUntil(checkAndNotify());
});
self.addEventListener('sync', (event) => {
  if (event.tag === 'namaz-check') event.waitUntil(checkAndNotify());
});

async function checkAndNotify() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const res = await cache.match('namaz-timings-data');
    if (!res) return;
    const data = await res.json();
    if (!data || !data.timings) return;
    const now = new Date();
    const nowMins = now.getHours() * 60 + now.getMinutes();
    for (const key of Object.keys(data.timings)) {
      const [h, m] = data.timings[key].split(':').map(Number);
      const mins = h * 60 + m;
      if (Math.abs(mins - nowMins) <= 1 && data.notifyOn && data.notifyOn[key]) {
        self.registration.showNotification(`${key} ka waqt ho gaya`, {
          body: 'Namaz ada karne ka waqt aa gaya hai.',
          icon: 'icons/icon-192.png',
          tag: 'namaz-alert-' + key,
        });
      }
    }
  } catch (e) { /* ignore */ }
}
