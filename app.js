/* ---------------- Data: Prayer meta, Faida, Duas, Jummah ---------------- */

const PRAYERS = [
  { key:'Fajr',    ar:'فجر',   rn:'Fajr',   icon:'🌅' },
  { key:'Dhuhr',   ar:'ظہر',   rn:'Zuhr',   icon:'☀️' },
  { key:'Asr',     ar:'عصر',   rn:'Asr',    icon:'🌤️' },
  { key:'Maghrib', ar:'مغرب',  rn:'Maghrib',icon:'🌇' },
  { key:'Isha',    ar:'عشاء',  rn:'Isha',   icon:'🌙' },
];

const FAIDA = [
  { key:'Fajr', icon:'🌅', ar:'صلاة الفجر',
    body:`<p>Fajr din ki pehli namaz hai, subah sadiq se sunrise tak ka waqt. Is namaz ko andhere mein ada karna barkat wala amal samjha jata hai aur ye din ki shuruaat ko sukoon aur nizam deta hai.</p>
    <p>Jo shakhs Fajr ba-jamat parhta hai, uska pura din Allah ki hifazat mein guzarne ki nishani mana jata hai.</p>` },
  { key:'Dhuhr', icon:'☀️', ar:'صلاة الظهر',
    body:`<p>Zuhr din ke beech mein, jab kaam-kaj ke masroof lamhon mein Allah ko yaad karne ka waqt aata hai.</p>
    <p>Jummah ke din Zuhr ki jagah Jummah ki namaz farz hoti hai, jo hafte ki sab se ba-fazilat namaz mani jati hai.</p>` },
  { key:'Asr', icon:'🌤️', ar:'صلاة العصر',
    body:`<p>Asr ki namaz ki bohot ahmiyat bayan ki gayi hai - ise "beech wali namaz" bhi kaha gaya hai jiski hifazat ka khaas hukum diya gaya hai.</p>
    <p>Asr ke waqt ko na chhorna, mashghuliyat ke bawajood Allah ko yaad rakhne ki mazboot alamat samjha jata hai.</p>` },
  { key:'Maghrib', icon:'🌇', ar:'صلاة المغرب',
    body:`<p>Maghrib sooraj dhalte hi ada ki jati hai. Iska waqt thora sa hota hai is liye jaldi ada karna behtar mana gaya hai.</p>
    <p>Ye namaz shukar ada karne ka bhi waqt hai.</p>` },
  { key:'Isha', icon:'🌙', ar:'صلاة العشاء',
    body:`<p>Isha raat ki namaz hai jo so'ne se pehle ada ki jati hai. Ye din ka aakhri amal Allah ki yaad ke sath khatam karne ka zariya hai.</p>
    <p>Isha ba-jamat parhne ki bohot fazilat bayan ki gayi hai.</p>` },
];

const JUMMAH_DATA = {
  items: [
    { h: 'Ghusl aur Sunnat Kapre', body: 'Jummah ke din ghusl karna, saaf sutre aur behtareen kapre pehenna aur khushbu lagana mustahab amal hai.' },
    { h: 'Surah Al-Kahf', body: 'Jummah ke din Surah Al-Kahf ki tilawat karna ek mash-hoor aur bohot ba-fazilat amal hai.' },
    { h: 'Asr ke baad — Durood Sharif', body: 'Asr ki namaz ke baad se Maghrib tak ka waqt Jummah ka ek khaas mubarak lamha mana jata hai.' },
    { h: 'Qubooliyat ki Ghari', body: 'Jummah ke din ek aisi khaas ghari aati hai jis mein ki gayi dua qubool hone ki umeed rakhi jati hai.' },
  ]
};

const DUAS = [
  { tag:'Ghar se Nikalte waqt', ar:'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ', tr:'Bismillahi tawakkaltu \'alallah', mn:'Allah ke naam se, maine Allah par bharosa kiya.' },
  { tag:'Khana Shuru Karte Waqt', ar:'بِسْمِ اللَّهِ', tr:'Bismillah', mn:'Allah ke naam se (shuru karta hoon).' },
  { tag:'Khana Khane ke Baad', ar:'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا', tr:'Alhamdulillahil-lazi at\'amana wa saqana', mn:'Sab tareef Allah ke liye jisne humein khilaya aur pilaya.' },
  { tag:'Masjid mein Dakhil hote waqt', ar:'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ', tr:'Allahumma-ftah li abwaba rahmatik', mn:'Ya Allah, mere liye apni rehmat ke darwaze khol de.' },
  { tag:'Wudu ke Baad', ar:'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', tr:'Ash-hadu alla ilaha illallahu wahdahu la sharika lah', mn:'Main gawahi deta hoon ke Allah ke siwa koi mabood nahi.' },
  { tag:'Safar par Nikalte Waqt', ar:'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا', tr:'Subhanal-lazi sakhkhara lana haza', mn:'Pak hai wo Zaat jisne is (sawari) ko humare kaboo mein diya.' },
  { tag:'Neend se pehle', ar:'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا', tr:'Bismika Allahumma amutu wa ahya', mn:'Ya Allah, tere hi naam se marta aur jeeta hoon.' },
  { tag:'Pareshani ke Waqt', ar:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', tr:'Hasbunallahu wa ni\'mal wakeel', mn:'Humare liye Allah kaafi hai aur wo behtareen kaargzar hai.' },
];

const DAILY_AMAL = [
  { day:'Itwar', ar:'يس', title:'Surah Yaseen', body:'Itwar ke din Surah Yaseen ki tilawat rozi mein barkat aur dil ke sukoon ka zariya samjhi jati hai.' },
  { day:'Peer', ar:'الصَّوْم', title:'Nafl Roza', body:'Peer ke din nafl roza rakhna aam tor par bohot pasandeeda amal mana jata hai.' },
  { day:'Mangal', ar:'الِاسْتِغْفَار', title:'Kasrat se Istighfar', body:'Mangal ke din zyada se zyada Astaghfirullah parhna gunahon ki maafi ka zariya hai.' },
  { day:'Budh', ar:'الصَّدَقَة', title:'Sadqa', body:'Budh ke din thoda sa bhi sadqa dena — musibaton se hifazat ka sabab mana jata hai.' },
  { day:'Jumeraat', ar:'الصَّوْم', title:'Nafl Roza', body:'Jumeraat ka din bhi nafl roze ke liye khaas mana gaya hai.' },
  { day:'Jummah', ar:'الْكَهْف', title:'Surah Al-Kahf + Durood', body:'Jummah — hafte ka sab se afzal din.' },
  { day:'Haftah', ar:'صِلَةُ الرَّحِم', title:'Sila Rehmi', body:'Haftah ke din rishtedaron se rabta rakhna — sila-e-rehmi ka amal is din khaas mana jata hai.' },
];

const TASBEEH_AFTER_NAMAZ = {
  title:'Har Farz Namaz ke Baad ki Tasbeeh',
  items:[ { ar:'سُبْحَانَ اللَّهِ', n:'33 martaba' }, { ar:'الْحَمْدُ لِلَّهِ', n:'33 martaba' }, { ar:'اللَّهُ أَكْبَرُ', n:'34 martaba' } ],
  note:'Ye tasbeeh mustaqil taur par har namaz ke baad parhna ek bohot pasandeeda aur mash-hoor sunnat amal hai.'
};

const HADITH_SAWAB = {
  ar: 'مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ',
  translit: 'Jo shakhs din mein sau martaba "SubhanAllahi wa bihamdihi" kahe, uske gunah maaf kar diye jate hain, chahe wo samandar ke jhaag jitne kyun na hon.',
  ref: '(Sahih Bukhari — mafhoom)'
};

const HONESTY_NOTE = {
  title:'Jhoot Bolna Gunnah Hai',
  body:`Ye streak sirf apne aap ko yaad dilane ke liye hai — kisi ko dikhane ke liye nahi. Agar namaz na parhi ho to use "present" mat karein.`,
  hadith:`Ek mash-hoor Hadith (Sahih Muslim) ka mafhoom ye hai: sacchai neki ki taraf le jati hai aur neki Jannat ki taraf; jabke jhoot gunnah ki taraf le jata hai.`
};

const MILESTONES = [
  { days:3,icon:'🌱',name:'Shuruaat' },{ days:7,icon:'🔥',name:'1 Hafta' },{ days:15,icon:'⚡',name:'15 Din' },
  { days:30,icon:'🌟',name:'1 Mahina' },{ days:60,icon:'💎',name:'60 Din' },{ days:100,icon:'🏆',name:'100 Din' },{ days:365,icon:'👑',name:'1 Saal' },
];

const WEEKDAY_ROMAN = ['Itwar','Peer','Mangal','Budh','Jumeraat','Jummah','Haftah'];

const RIYA_NOTE_TEXT = 'Yaad rahe: Namaz ki asal qadar Allah ke haan hai — dikhawe (riya) ke liye ki gayi ibadat ka sawab zaya ho jata hai. Ye share sirf khud ko motivate karne aur doosron ko neki ki taraf mائل karne ke liye hai.';

/* ---------------- Content moderation ---------------- */

const BAD_WORDS = [
  'fuck','fucking','fucker','shit','bitch','asshole','bastard','slut','whore','dick','pussy','cunt','faggot','nigger',
  'chutiya','chutiye','madarchod','behenchod','bhenchod','bhosdike','harami','haramzada','kutta','kutte','kamina','kamine',
  'randi','randy','gandu','gaandu','lund','lauda','chodu','kanjar','kanjari','tatti'
];
function containsBadWords(text){
  if(!text) return false;
  const lower = text.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF\s]/gi, ' ');
  return BAD_WORDS.some(w => {
    const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|\\s)${esc}(\\s|$)`, 'i').test(lower);
  });
}
async function applyWarning(){
  if(!state.currentUser) return;
  const uid = state.currentUser.uid;
  const newWarnings = (state.profile?.warnings || 0) + 1;
  const banned = newWarnings >= 3;
  try{ await db.collection('users').doc(uid).set({ warnings:newWarnings, banned }, { merge:true }); }catch(e){}
  state.profile = { ...(state.profile||{}), warnings:newWarnings, banned };
  if(banned) checkBanned();
  else showToast(`⚠️ Warning ${newWarnings}/3 — nazeba zaban istemal na karein, warna account ban ho jayega.`);
}
function checkBanned(){
  const overlay = document.getElementById('bannedOverlay');
  if(state.profile && state.profile.banned) overlay.classList.remove('hidden');
  else overlay.classList.add('hidden');
}

function extractHashtags(text){
  if(!text) return [];
  const matches = text.match(/#([a-zA-Z0-9_]+)/g) || [];
  return [...new Set(matches.map(m => m.slice(1).toLowerCase()))].slice(0, 10);
}
function safeDisplayName(name){
  if(!name || typeof name !== 'string' || name.includes('@')) return 'User';
  return name;
}
// The official app account: whoever currently holds the username "pakraho"
// automatically gets the top verified tier next to their name everywhere — no
// admin action needed, it's purely a live username match.
function isOfficialAccount(username){
  return typeof username === 'string' && username.toLowerCase() === 'pakraho';
}
// tier: 0 = none, 1 = Normal, 2 = Special, 3 = Full Special (also auto-applied
// to the official "pakraho" account). Posts/comments still carry a frozen
// "authorTier" as a fallback (same denormalization pattern as
// username/photoURL), but the feed overrides it with a live-refreshed
// per-uid cache (see refreshTierCacheForPosts) so an older post picks up a
// tier change made after it was posted, instead of staying stuck at
// whatever tier its author had at posting time.
function verifiedBadgeHtml(username, tier){
  const effectiveTier = isOfficialAccount(username) ? 3 : (tier || 0);
  if(effectiveTier === 0) return '';
  return `<svg class="verified-tick tier-${effectiveTier}" data-tier="${effectiveTier}" viewBox="0 0 22 22" width="15" height="15" aria-label="Verified"><path fill="currentColor" d="M11 0l2.39 1.7 2.87-.5 1.19 2.64 2.64 1.19-.5 2.87L21.29 10l-1.7 2.39.5 2.87-2.64 1.19-1.19 2.64-2.87-.5L11 20l-2.39-1.7-2.87.5-1.19-2.64-2.64-1.19.5-2.87L.71 10l1.7-2.39-.5-2.87 2.64-1.19L5.74 1.2l2.87.5L11 0z"/><path fill="var(--bg)" d="M9.3 14.2L5.6 10.5l1.4-1.4 2.3 2.3 5-5 1.4 1.4z"/></svg>`;
}
const VERIFIED_TIER_INFO = {
  1: { name:'Normal Verified', desc:'Ye account Pak Raho team ne verify kiya hai.' },
  2: { name:'Special Verified', desc:'Ye account community mein active/trusted contributor hai — Pak Raho team ne verify kiya hai.' },
  3: { name:'Full Special Verified', desc:'Ye Pak Raho ka official account hai, ya ek highly trusted verified member hai.' },
};
function bindVerifiedTickClicks(){
  document.addEventListener('click', (e) => {
    const tick = e.target.closest('.verified-tick');
    if(!tick) return;
    e.stopPropagation();
    const info = VERIFIED_TIER_INFO[tick.dataset.tier];
    if(!info) return;
    document.getElementById('verifiedInfoIcon').innerHTML = tick.outerHTML;
    document.getElementById('verifiedInfoTitle').textContent = info.name;
    document.getElementById('verifiedInfoDesc').textContent = info.desc;
    document.getElementById('verifiedInfoOverlay').classList.remove('hidden');
  });
  document.getElementById('btnCloseVerifiedInfo').addEventListener('click', () => {
    document.getElementById('verifiedInfoOverlay').classList.add('hidden');
  });
}

/* ---------------- Toast ---------------- */

let toastTimer = null;
function haptic(ms){
  try{ if(navigator.vibrate) navigator.vibrate(ms || 12); } catch(e){}
}

// Lightweight self-hosted error logging (Crashlytics substitute for the web):
// writes real runtime errors to Firestore so they're visible from the admin
// panel instead of only in a phone's console, which nobody checks. Kept
// simple and rate-limited so a repeating error doesn't spam the collection.
const loggedErrorKeys = new Set();
function logErrorToFirestore(message, stack, source){
  try{
    const key = (message||'') + '|' + source;
    if(loggedErrorKeys.has(key)) return; // same error already logged this session
    loggedErrorKeys.add(key);
    if(typeof db === 'undefined') return;
    db.collection('errorLogs').add({
      message: String(message||'').slice(0,500),
      stack: String(stack||'').slice(0,1500),
      source: source || 'unknown',
      uid: (state.currentUser && state.currentUser.uid) || null,
      userAgent: navigator.userAgent,
      url: location.href,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(() => {}); // never let logging itself throw
  } catch(e){ /* logging must never break the app */ }
}
function bindErrorLogging(){
  window.addEventListener('error', (e) => logErrorToFirestore(e.message, e.error && e.error.stack, 'window.onerror'));
  window.addEventListener('unhandledrejection', (e) => logErrorToFirestore(e.reason && e.reason.message || String(e.reason), e.reason && e.reason.stack, 'unhandledrejection'));
}

// Lightweight self-hosted "active users" tracking (Analytics substitute):
// one small doc per user per day — cheap, and gives the admin panel real
// "how many people used the app today/this week" numbers without needing a
// separate Google Analytics measurementId to be configured first.
function pingDailyActive(){
  if(!state.currentUser) return;
  const today = dateKey(new Date());
  db.collection('dailyActiveUsers').doc(`${state.currentUser.uid}_${today}`)
    .set({ uid: state.currentUser.uid, date: today, lastSeen: firebase.firestore.FieldValue.serverTimestamp() }, { merge:true })
    .catch(() => {});
}

function showToast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3400);
}
function setBtnLoading(btn, loading){
  btn.classList.toggle('loading', loading);
  btn.disabled = loading;
}

/* ---------------- State ---------------- */

let state = {
  coords: null, timings: null, city: null,
  notifyOn: JSON.parse(localStorage.getItem('notifyPrefs') || '{"Fajr":true,"Dhuhr":true,"Asr":true,"Maghrib":true,"Isha":true}'),
  notifyOffset: JSON.parse(localStorage.getItem('notifyOffsets') || '{"Fajr":0,"Dhuhr":0,"Asr":0,"Maghrib":0,"Isha":0}'),
  scheduledTimeouts: [],
  currentUser: null, profile: null,
  remoteNamazLog: null,   // { log:{date:{prayers}} }
  remoteDailyLog: null,   // { daily:{date:true} }
  followingSet: new Set(),
  blockedSet: new Set(),
  posts: [],
  feedMode: 'all',
  viewingUid: null,
  myLikedPostIds: new Set(),
  userTierCache: new Map(), // uid -> verifiedTier, refreshed live (see refreshTierCacheForPosts)
  myLikedCommentIds: new Set(),
  currentComments: null,
  openPostId: null,
  profilePosts: [],
  profilePostsOwn: false,
  replyingTo: null,
  postMenuTarget: null,
  leaderboardMode: 'namaz',
  shareType: null,
  cropCallback: null,
  lightboxPostId: null,
};

let unsubPrayerLog = null, unsubDailyLog = null, unsubFollows = null, unsubLikes = null, unsubComments = null, unsubCommentLikes = null, unsubProfile = null;

/* ---------------- Streak / Present tracking ---------------- */

function pad(n){ return String(n).padStart(2,'0'); }
function dateKey(d){ return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }

function loadNamazLog(){
  if(state.currentUser) return (state.remoteNamazLog && state.remoteNamazLog.log) || {};
  return JSON.parse(localStorage.getItem('namazLog') || '{}');
}
function loadDailyLog(){
  if(state.currentUser) return (state.remoteDailyLog && state.remoteDailyLog.daily) || {};
  return JSON.parse(localStorage.getItem('dailyLog') || '{}');
}

function toggleLogEntry(key, prayerKey){
  haptic();
  if(state.currentUser){
    const current = (state.remoteNamazLog && state.remoteNamazLog.log) || {};
    const dayObj = { ...(current[key] || {}) };
    dayObj[prayerKey] = !dayObj[prayerKey];
    db.collection('prayerLogs').doc(state.currentUser.uid).set({ log: { [key]: dayObj } }, { merge:true })
      .catch((e) => showToast('Save nahi ho saka: ' + (e.code || 'internet check karein')));
    state.remoteNamazLog = { log: { ...current, [key]: dayObj } };
  } else {
    const log = JSON.parse(localStorage.getItem('namazLog') || '{}');
    log[key] = log[key] || {};
    log[key][prayerKey] = !log[key][prayerKey];
    localStorage.setItem('namazLog', JSON.stringify(log));
  }
  renderNamazStreak();
  if(document.getElementById('dayDetailSheet') && !document.getElementById('dayDetailSheet').classList.contains('hidden')){
    openDayDetail(key);
  }
}

function markDailyStreak(){
  haptic();
  const key = dateKey(new Date());
  if(state.currentUser){
    const current = (state.remoteDailyLog && state.remoteDailyLog.daily) || {};
    if(current[key]){ showToast('Aaj ka amal pehle hi mark ho chuka hai ✓'); return; }
    db.collection('dhikrLogs').doc(state.currentUser.uid).set({ daily: { [key]: true } }, { merge:true })
      .catch((e) => showToast('Save nahi ho saka: ' + (e.code || 'internet check karein')));
    state.remoteDailyLog = { daily: { ...current, [key]: true } };
  } else {
    const daily = JSON.parse(localStorage.getItem('dailyLog') || '{}');
    if(daily[key]){ showToast('Aaj ka amal pehle hi mark ho chuka hai ✓'); return; }
    daily[key] = true;
    localStorage.setItem('dailyLog', JSON.stringify(daily));
  }
  renderDailyStreak();
  showToast('Aaj ka amal mark ho gaya 🎉');
}

function isDayComplete(entry){ if(!entry) return false; return PRAYERS.every(p => entry[p.key]); }
function dayPrayerCount(entry){ if(!entry) return 0; return PRAYERS.filter(p => entry[p.key]).length; }

function computeStreakGeneric(checkFn){
  const today = new Date();
  let streak = 0, cursor = new Date(today);
  if(!checkFn(dateKey(cursor))) cursor.setDate(cursor.getDate()-1);
  while(checkFn(dateKey(cursor))){ streak++; cursor.setDate(cursor.getDate()-1); }
  return streak;
}
function computeBestStreakGeneric(sortedDateKeys, currentStreak){
  let best = 0, cur = 0, prevD = null;
  for(const key of sortedDateKeys){
    const d = new Date(key + 'T00:00:00');
    if(prevD){ const diff = Math.round((d - prevD) / 86400000); cur = diff === 1 ? cur + 1 : 1; } else { cur = 1; }
    best = Math.max(best, cur); prevD = d;
  }
  return Math.max(best, currentStreak);
}
function namazStreakFromLog(log){
  const s = computeStreakGeneric(k => isDayComplete(log[k]));
  const best = computeBestStreakGeneric(Object.keys(log).filter(k => isDayComplete(log[k])).sort(), s);
  return { streak:s, best };
}
function dailyStreakFromLog(daily){
  const s = computeStreakGeneric(k => !!daily[k]);
  const best = computeBestStreakGeneric(Object.keys(daily).filter(k => daily[k]).sort(), s);
  return { streak:s, best };
}
function computeStreak(){ return namazStreakFromLog(loadNamazLog()).streak; }

async function fetchUserNamazLog(uid){
  if(state.currentUser && uid === state.currentUser.uid) return loadNamazLog();
  try{ const doc = await db.collection('prayerLogs').doc(uid).get(); return (doc.exists && doc.data().log) || {}; }
  catch(e){ return {}; }
}
async function fetchUserDailyLog(uid){
  if(state.currentUser && uid === state.currentUser.uid) return loadDailyLog();
  try{ const doc = await db.collection('dhikrLogs').doc(uid).get(); return (doc.exists && doc.data().daily) || {}; }
  catch(e){ return {}; }
}

let lastCachedStreaks = { namazStreak:null, namazBest:null, dailyStreak:null, dailyBest:null, totalNamaz:null };
function computeTotalNamaz(log){
  return Object.values(log).reduce((sum, day) => sum + dayPrayerCount(day), 0);
}
function maybeCacheLeaderboardFields(namaz, daily, totalNamaz){
  if(!state.currentUser) return;
  const payload = {};
  if(namaz.best !== lastCachedStreaks.namazBest || namaz.streak !== lastCachedStreaks.namazStreak){
    payload.namazStreak = namaz.streak; payload.namazBest = namaz.best;
  }
  if(daily.best !== lastCachedStreaks.dailyBest || daily.streak !== lastCachedStreaks.dailyStreak){
    payload.dailyStreak = daily.streak; payload.dailyBest = daily.best;
  }
  if(typeof totalNamaz === 'number' && totalNamaz !== lastCachedStreaks.totalNamaz){
    payload.totalNamaz = totalNamaz;
  }
  if(Object.keys(payload).length === 0) return;
  lastCachedStreaks = {
    namazStreak: payload.namazStreak ?? lastCachedStreaks.namazStreak,
    namazBest: payload.namazBest ?? lastCachedStreaks.namazBest,
    dailyStreak: payload.dailyStreak ?? lastCachedStreaks.dailyStreak,
    dailyBest: payload.dailyBest ?? lastCachedStreaks.dailyBest,
    totalNamaz: payload.totalNamaz ?? lastCachedStreaks.totalNamaz,
  };
  db.collection('users').doc(state.currentUser.uid).set(payload, { merge:true }).catch(() => {});
}

function renderBadgeRow(containerId, best){
  document.getElementById(containerId).innerHTML = MILESTONES.map(m => {
    const unlocked = best >= m.days;
    return `<div class="badge-chip ${unlocked?'unlocked':''}"><div class="b-icon">${m.icon}</div><div class="b-days">${m.days} din</div><div class="b-name">${m.name}</div></div>`;
  }).join('');
}
function renderWeekGrid(containerId, checkFn, countFn, clickable){
  const today = new Date();
  const weekDays = [];
  for(let i=6;i>=0;i--){ const d = new Date(today); d.setDate(d.getDate()-i); weekDays.push(d); }
  document.getElementById(containerId).innerHTML = weekDays.map(d => {
    const key = dateKey(d);
    const complete = checkFn(key);
    const isToday = key === dateKey(today);
    const label = countFn ? (complete ? '✓' : (countFn(key) > 0 ? String(countFn(key)) : '')) : (complete ? '✓' : '');
    return `<div class="week-day ${complete?'complete':''} ${isToday?'today':''}" data-date="${key}">
      <div class="wd-label">${WEEKDAY_ROMAN[d.getDay()].slice(0,3)}</div><div class="wd-dot">${label}</div>
    </div>`;
  }).join('');
  if(clickable){
    document.querySelectorAll(`#${containerId} .week-day`).forEach(el => el.addEventListener('click', () => openDayDetail(el.dataset.date)));
  }
}

function renderNamazStreak(){
  const log = loadNamazLog();
  const { streak, best } = namazStreakFromLog(log);
  document.getElementById('streakCount').textContent = streak;
  document.getElementById('streakBest').textContent = `🏅 Best Streak: ${best} din`;
  const flame = document.getElementById('streakFlame');
  flame.style.fontSize = streak >= 30 ? '58px' : streak >= 7 ? '50px' : '44px';
  renderBadgeRow('badgeRow', best);
  renderWeekGrid('weekGrid', k => isDayComplete(log[k]), k => dayPrayerCount(log[k]), true);
  renderStreakDays();
  maybeCacheLeaderboardFields({ streak, best }, dailyStreakFromLog(loadDailyLog()), computeTotalNamaz(log));
}
function renderDailyStreak(){
  const daily = loadDailyLog();
  const { streak, best } = dailyStreakFromLog(daily);
  document.getElementById('dailyCount').textContent = streak;
  document.getElementById('dailyBest').textContent = `🏅 Best Streak: ${best} din`;
  const flame = document.getElementById('dailyFlame');
  flame.style.fontSize = streak >= 30 ? '58px' : streak >= 7 ? '50px' : '44px';
  renderBadgeRow('dailyBadgeRow', best);
  renderWeekGrid('dailyWeekGrid', k => !!daily[k], null, false);
  const todayKey = dateKey(new Date());
  const btn = document.getElementById('btnMarkDaily');
  if(daily[todayKey]){ btn.textContent = 'Aaj Mark Ho Gaya ✓'; btn.disabled = true; }
  else { btn.textContent = 'Aaj ka Amal Mark Karein ✓'; btn.disabled = false; }
  maybeCacheLeaderboardFields(namazStreakFromLog(loadNamazLog()), { streak, best });
}
function renderStreakViews(){ renderNamazStreak(); renderDailyStreak(); }

/* ---------------- Day Detail Sheet ---------------- */

function openDayDetail(dateKeyStr){
  const log = loadNamazLog();
  const entry = log[dateKeyStr] || {};
  const d = new Date(dateKeyStr + 'T00:00:00');
  const today = new Date();
  const todayKey = dateKey(today);
  const yestKey = dateKey(new Date(today.getFullYear(), today.getMonth(), today.getDate()-1));
  const isEditable = (dateKeyStr === todayKey || dateKeyStr === yestKey);
  const isFuture = d > today;
  const label = d.toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'short' });
  document.getElementById('dayDetailTitle').textContent = label;
  const count = dayPrayerCount(entry);
  document.getElementById('dayDetailCount').textContent = `${count} / 5 Namaz Mukammal` + (isEditable ? '' : ' — sirf dekhne ke liye (purane din edit nahi ho sakte)');
  document.getElementById('dayDetailRows').innerHTML = PRAYERS.map(p => {
    const checked = !!entry[p.key];
    return `<div class="day-check-row ${isEditable && !isFuture ? '' : 'readonly'}" data-date="${dateKeyStr}" data-prayer="${p.key}">
      <span>${p.icon} ${p.rn}</span>
      <div class="check-box ${checked?'on':''}" ${(!isEditable||isFuture)?'style="opacity:0.4;"':''}>${checked?'✓':''}</div>
    </div>`;
  }).join('');
  if(isEditable && !isFuture){
    document.querySelectorAll('#dayDetailRows .day-check-row').forEach(row => {
      row.addEventListener('click', () => { const { date, prayer } = row.dataset; toggleLogEntry(date, prayer); });
    });
  }
  document.getElementById('dayDetailSheet').classList.remove('hidden');
}

function renderStreakDays(){
  const log = loadNamazLog();
  const today = new Date();
  const yest = new Date(today); yest.setDate(yest.getDate()-1);
  const buildDayCard = (dateObj, label) => {
    const key = dateKey(dateObj);
    const entry = log[key] || {};
    const rows = PRAYERS.map(p => {
      const checked = !!entry[p.key];
      return `<div class="check-row" data-date="${key}" data-prayer="${p.key}">
        <span>${p.icon} ${p.rn}</span>
        <div class="check-box ${checked?'on':''}">${checked?'✓':''}</div>
      </div>`;
    }).join('');
    return `<div class="faida-card"><div class="faida-title" style="margin-bottom:6px;">${label}</div>${rows}</div>`;
  };
  document.getElementById('streakDays').innerHTML = buildDayCard(today,'Aaj') + buildDayCard(yest,'Kal');
  document.querySelectorAll('#streakDays .check-row').forEach(row => {
    row.addEventListener('click', () => { const { date, prayer } = row.dataset; toggleLogEntry(date, prayer); });
  });
}

function bindDayDetailAndLeaderboard(){
  document.getElementById('btnCloseDayDetail').addEventListener('click', () => document.getElementById('dayDetailSheet').classList.add('hidden'));

  document.getElementById('btnOpenLeaderboard').addEventListener('click', openLeaderboard);
  document.getElementById('btnCloseLeaderboard').addEventListener('click', () => document.getElementById('leaderboardSheet').classList.add('hidden'));
  document.querySelectorAll('.lbtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.lbtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.leaderboardMode = tab.dataset.lb;
      document.getElementById('leaderboardList').innerHTML = `<div class="skeleton-row"></div><div class="skeleton-row"></div><div class="skeleton-row"></div>`;
      loadLeaderboard();
    });
  });
}

function openLeaderboard(){
  document.getElementById('leaderboardSheet').classList.remove('hidden');
  document.getElementById('leaderboardList').innerHTML = `<div class="skeleton-row"></div><div class="skeleton-row"></div><div class="skeleton-row"></div>`;
  loadLeaderboard();
}
async function loadLeaderboard(){
  const isNamaz = state.leaderboardMode === 'namaz';
  const field = isNamaz ? 'namazBest' : 'dailyBest';
  const hideField = isNamaz ? 'hideNamazStreak' : 'hideDailyStreak';
  const icon = isNamaz ? '🔥' : '📿';
  const list = document.getElementById('leaderboardList');
  try{
    const snap = await db.collection('users').orderBy(field, 'desc').limit(30).get();
    const rows = snap.docs.map(d => ({ uid:d.id, ...d.data() }))
      .filter(u => (u[field]||0) > 0 && !u[hideField] && !state.blockedSet.has(u.uid))
      .slice(0, 20);
    if(rows.length === 0){ list.innerHTML = `<div class="note-box">Abhi tak koi streak nahi bani. Sabse pehle banayein!</div>`; return; }
    list.innerHTML = rows.map((u,i) => {
      const displayName = safeDisplayName(u.nickname || u.username);
      const initial = displayName.charAt(0).toUpperCase();
      const avatarHtml = u.photoURL ? `<img src="${u.photoURL}">` : initial;
      const rankClass = i===0?'top1':i===1?'top2':i===2?'top3':'';
      const subLine = isNamaz && u.totalNamaz && !u.hideTotalNamaz ? `<div class="lb-sub">${u.totalNamaz} Namaz total</div>` : '';
      return `<div class="lb-row clickable" data-uid="${u.uid}">
        <div class="lb-rank ${rankClass}">${i+1}</div>
        <div class="lb-avatar">${avatarHtml}</div>
        <div class="lb-name-wrap"><div class="lb-name" style="display:inline-flex; align-items:center; gap:4px;">${escapeHtml(displayName)}${verifiedBadgeHtml(u.username, u.verifiedTier)}</div>${subLine}</div>
        <div class="lb-val">${icon} ${u[field]||0}</div>
      </div>`;
    }).join('');
    list.querySelectorAll('.clickable').forEach(el => el.addEventListener('click', () => {
      document.getElementById('leaderboardSheet').classList.add('hidden');
      openProfile(el.dataset.uid);
    }));
  } catch(e){
    list.innerHTML = `<div class="note-box">Leaderboard load nahi ho saka: ${e.code || e.message}</div>`;
  }
}

/* ---------------- Share (canvas image generation) ---------------- */

function drawShareCard(ctx, { type, value, name, photoImg }){
  const w = 600, h = 750;
  ctx.clearRect(0,0,w,h);
  const grad = ctx.createLinearGradient(0,0,w,h);
  if(type === 'namaz'){ grad.addColorStop(0,'#123C33'); grad.addColorStop(1,'#0B1F1A'); }
  else { grad.addColorStop(0,'#2E5A4E'); grad.addColorStop(1,'#0B1F1A'); }
  ctx.fillStyle = grad; ctx.fillRect(0,0,w,h);

  ctx.fillStyle = 'rgba(212,175,55,0.10)';
  ctx.beginPath(); ctx.arc(w*0.15, h*0.12, 160, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(w*0.9, h*0.85, 200, 0, Math.PI*2); ctx.fill();

  ctx.textAlign = 'center';
  ctx.fillStyle = '#D4AF37';
  ctx.font = '600 28px Poppins, sans-serif';
  ctx.fillText('🕌 Pak Raho', w/2, 90);

  if(photoImg){
    ctx.save();
    ctx.beginPath(); ctx.arc(w/2, 200, 60, 0, Math.PI*2); ctx.closePath(); ctx.clip();
    ctx.drawImage(photoImg, w/2-60, 140, 120, 120);
    ctx.restore();
    ctx.strokeStyle = 'rgba(212,175,55,0.6)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(w/2, 200, 60, 0, Math.PI*2); ctx.stroke();
  } else {
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.beginPath(); ctx.arc(w/2, 200, 60, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#D4AF37'; ctx.font = '700 42px Poppins, sans-serif';
    ctx.fillText((name||'U').charAt(0).toUpperCase(), w/2, 216);
  }

  ctx.fillStyle = '#F4EFE6'; ctx.font = '600 24px Poppins, sans-serif';
  ctx.fillText(name || 'User', w/2, 300);

  ctx.font = '400 18px Poppins, sans-serif'; ctx.fillStyle = 'rgba(244,239,230,0.7)';
  ctx.fillText(type === 'namaz' ? 'Namaz Streak' : 'Daily Amal Streak', w/2, 335);

  ctx.font = '700 130px Poppins, sans-serif'; ctx.fillStyle = '#D4AF37';
  ctx.fillText(String(value), w/2, 480);
  ctx.font = '500 26px Poppins, sans-serif'; ctx.fillStyle = 'rgba(244,239,230,0.85)';
  ctx.fillText('Din', w/2, 520);

  ctx.font = (type==='namaz'?'46px':'46px') + ' serif';
  ctx.fillText(type === 'namaz' ? '🔥' : '📿', w/2, 590);

  if(type === 'namaz'){
    ctx.font = 'italic 300 15px Poppins, sans-serif'; ctx.fillStyle = 'rgba(244,239,230,0.55)';
    wrapText(ctx, 'Riya (dikhawe) se ibadat ka sawab zaya ho jata hai — ye sirf khud ko motivate karne ke liye hai.', w/2, 650, 480, 22);
  }
  ctx.font = '400 13px Poppins, sans-serif'; ctx.fillStyle = 'rgba(212,175,55,0.6)';
  ctx.fillText('✓ Pak Raho Verified Streak', w/2, h-30);
}
function wrapText(ctx, text, x, y, maxWidth, lineHeight){
  const words = text.split(' ');
  let line = '';
  for(let n=0;n<words.length;n++){
    const testLine = line + words[n] + ' ';
    if(ctx.measureText(testLine).width > maxWidth && n > 0){ ctx.fillText(line, x, y); line = words[n] + ' '; y += lineHeight; }
    else line = testLine;
  }
  ctx.fillText(line, x, y);
}

function openSharePreview(type){
  state.shareType = type;
  const value = type === 'namaz' ? computeStreak() : dailyStreakFromLog(loadDailyLog()).streak;
  const name = safeDisplayName(state.profile?.nickname || state.profile?.username);
  const canvas = document.getElementById('shareCanvas');
  const ctx = canvas.getContext('2d');

  const render = (img) => drawShareCard(ctx, { type, value, name, photoImg:img });

  if(state.profile?.photoURL){
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => render(img);
    img.onerror = () => render(null);
    img.src = state.profile.photoURL;
  } else render(null);

  document.getElementById('sharePreviewSheet').classList.remove('hidden');
}

function bindShareUI(){
  document.getElementById('btnShareNamaz').addEventListener('click', () => {
    if(!state.currentUser){ switchView('viewAuth'); return; }
    openSharePreview('namaz');
  });
  document.getElementById('btnShareDaily').addEventListener('click', () => {
    if(!state.currentUser){ switchView('viewAuth'); return; }
    openSharePreview('daily');
  });
  document.getElementById('btnCloseSharePreview').addEventListener('click', () => document.getElementById('sharePreviewSheet').classList.add('hidden'));

  document.getElementById('btnSharePost').addEventListener('click', async () => {
    if(!state.currentUser) return;
    const canvas = document.getElementById('shareCanvas');
    const btn = document.getElementById('btnSharePost');
    setBtnLoading(btn, true);
    try{
      const imageURL = canvas.toDataURL('image/jpeg', 0.75);
      const value = state.shareType === 'namaz' ? computeStreak() : dailyStreakFromLog(loadDailyLog()).streak;
      const caption = state.shareType === 'namaz'
        ? `Alhamdulillah! Mera Namaz streak ${value} din ka ho gaya 🔥`
        : `Alhamdulillah! Mera Daily Amal streak ${value} din ka ho gaya 📿`;
      await db.collection('posts').add({
        uid: state.currentUser.uid,
        username: state.profile?.username || 'User',
        nickname: state.profile?.nickname || '',
        photoURL: state.profile?.photoURL || '',
        authorTier: state.profile?.verifiedTier || 0,
        text: caption,
        type: state.shareType === 'namaz' ? 'namazStreakShare' : 'dailyStreakShare',
        imageURL,
        streakValue: value,
        hashtags: extractHashtags(caption),
        likesCount: 0, commentsCount: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      document.getElementById('sharePreviewSheet').classList.add('hidden');
      switchView('viewFeed');
      showToast('Streak feed par post ho gayi ✓');
    } catch(e){
      const tooBig = (e.message||'').toLowerCase().includes('longer than') || e.code === 'invalid-argument';
      showToast(tooBig ? 'Image bohot bari hai — dobara try karein.' : ('Post nahi ho saki: ' + (e.code || e.message)));
    }
    setBtnLoading(btn, false);
  });

  document.getElementById('btnShareExternal').addEventListener('click', async () => {
    const canvas = document.getElementById('shareCanvas');
    try{
      const blob = await new Promise(res => canvas.toBlob(res, 'image/jpeg', 0.95));
      const file = new File([blob], 'pak-raho-streak.jpg', { type:'image/jpeg' });
      if(navigator.canShare && navigator.canShare({ files:[file] })){
        await navigator.share({ files:[file], title:'Pak Raho Streak', text:'Meri Pak Raho streak dekhein!' });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'pak-raho-streak.jpg'; a.click();
        URL.revokeObjectURL(url);
        showToast('Image download ho gayi — ab isse WhatsApp/Facebook par share kar dein.');
      }
    } catch(e){ if(e.name !== 'AbortError') showToast('Share nahi ho saka.'); }
  });
}

/* ---------------- Crop tool (WhatsApp-style) ---------------- */

let cropImg = null, cropScale = 1, cropOffsetX = 0, cropOffsetY = 0, cropDragging = false, cropLastX = 0, cropLastY = 0;

function openCropTool(fileOrUrl, onConfirm){
  const canvas = document.getElementById('cropCanvas');
  const ctx = canvas.getContext('2d');
  cropImg = new Image();
  cropScale = 1; cropOffsetX = 0; cropOffsetY = 0;
  document.getElementById('cropZoom').value = 100;
  state.cropCallback = onConfirm;

  const draw = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.beginPath(); ctx.arc(160,160,160,0,Math.PI*2); ctx.clip();
    const iw = cropImg.width, ih = cropImg.height;
    const baseScale = Math.max(320/iw, 320/ih);
    const scale = baseScale * cropScale;
    const dw = iw*scale, dh = ih*scale;
    ctx.drawImage(cropImg, 160-dw/2+cropOffsetX, 160-dh/2+cropOffsetY, dw, dh);
    ctx.restore();
  };
  cropImg.onload = draw;
  cropImg.src = (typeof fileOrUrl === 'string') ? fileOrUrl : URL.createObjectURL(fileOrUrl);

  canvas.__draw = draw;
  document.getElementById('cropSheet').classList.remove('hidden');
}

function bindCropTool(){
  const canvas = document.getElementById('cropCanvas');

  const start = (x,y) => { cropDragging = true; cropLastX = x; cropLastY = y; };
  const move = (x,y) => {
    if(!cropDragging) return;
    cropOffsetX += (x - cropLastX); cropOffsetY += (y - cropLastY);
    cropLastX = x; cropLastY = y;
    if(canvas.__draw) canvas.__draw();
  };
  const end = () => { cropDragging = false; };

  canvas.addEventListener('mousedown', (e) => start(e.offsetX, e.offsetY));
  canvas.addEventListener('mousemove', (e) => move(e.offsetX, e.offsetY));
  window.addEventListener('mouseup', end);

  canvas.addEventListener('touchstart', (e) => { const r = canvas.getBoundingClientRect(); const t = e.touches[0]; start(t.clientX-r.left, t.clientY-r.top); }, { passive:true });
  canvas.addEventListener('touchmove', (e) => { const r = canvas.getBoundingClientRect(); const t = e.touches[0]; move(t.clientX-r.left, t.clientY-r.top); }, { passive:true });
  canvas.addEventListener('touchend', end);

  document.getElementById('cropZoom').addEventListener('input', (e) => {
    cropScale = e.target.value / 100;
    if(canvas.__draw) canvas.__draw();
  });

  document.getElementById('btnCropCancel').addEventListener('click', () => {
    document.getElementById('cropSheet').classList.add('hidden');
    state.cropCallback = null;
  });

  document.getElementById('btnCropConfirm').addEventListener('click', () => {
    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
    document.getElementById('cropSheet').classList.add('hidden');
    if(state.cropCallback) state.cropCallback(dataUrl);
    state.cropCallback = null;
  });
}

/* ---------------- Post image crop tool (rectangular 4:3, pan + zoom) ---------------- */
let postCropImg = null, postCropScale = 1, postCropOffsetX = 0, postCropOffsetY = 0;
let postCropDragging = false, postCropLastX = 0, postCropLastY = 0;

function openPostImageCropTool(fileOrUrl, onConfirm){
  const canvas = document.getElementById('postCropCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height; // 320x240 = 4:3
  postCropImg = new Image();
  postCropScale = 1; postCropOffsetX = 0; postCropOffsetY = 0;
  document.getElementById('postCropZoom').value = 100;
  state.postCropCallback = onConfirm;

  const draw = () => {
    ctx.clearRect(0,0,W,H);
    const iw = postCropImg.width, ih = postCropImg.height;
    const baseScale = Math.max(W/iw, H/ih);
    const scale = baseScale * postCropScale;
    const dw = iw*scale, dh = ih*scale;
    // Clamp offsets so the image always fully covers the frame — no empty gaps.
    const maxOffX = Math.max(0, (dw - W) / 2);
    const maxOffY = Math.max(0, (dh - H) / 2);
    postCropOffsetX = Math.min(maxOffX, Math.max(-maxOffX, postCropOffsetX));
    postCropOffsetY = Math.min(maxOffY, Math.max(-maxOffY, postCropOffsetY));
    ctx.drawImage(postCropImg, W/2-dw/2+postCropOffsetX, H/2-dh/2+postCropOffsetY, dw, dh);
  };
  postCropImg.onload = draw;
  postCropImg.src = (typeof fileOrUrl === 'string') ? fileOrUrl : URL.createObjectURL(fileOrUrl);

  canvas.__draw = draw;
  document.getElementById('postCropSheet').classList.remove('hidden');
}

function bindPostImageCropTool(){
  const canvas = document.getElementById('postCropCanvas');

  const start = (x,y) => { postCropDragging = true; postCropLastX = x; postCropLastY = y; };
  const move = (x,y) => {
    if(!postCropDragging) return;
    postCropOffsetX += (x - postCropLastX); postCropOffsetY += (y - postCropLastY);
    postCropLastX = x; postCropLastY = y;
    if(canvas.__draw) canvas.__draw();
  };
  const end = () => { postCropDragging = false; };

  canvas.addEventListener('mousedown', (e) => start(e.offsetX, e.offsetY));
  canvas.addEventListener('mousemove', (e) => move(e.offsetX, e.offsetY));
  window.addEventListener('mouseup', end);

  canvas.addEventListener('touchstart', (e) => { const r = canvas.getBoundingClientRect(); const t = e.touches[0]; start(t.clientX-r.left, t.clientY-r.top); }, { passive:true });
  canvas.addEventListener('touchmove', (e) => { const r = canvas.getBoundingClientRect(); const t = e.touches[0]; move(t.clientX-r.left, t.clientY-r.top); }, { passive:true });
  canvas.addEventListener('touchend', end);

  document.getElementById('postCropZoom').addEventListener('input', (e) => {
    postCropScale = e.target.value / 100;
    if(canvas.__draw) canvas.__draw();
  });

  document.getElementById('btnPostCropCancel').addEventListener('click', () => {
    document.getElementById('postCropSheet').classList.add('hidden');
    state.postCropCallback = null;
  });

  document.getElementById('btnPostCropConfirm').addEventListener('click', () => {
    // Non-destructive: we don't bake a crop into pixels. We only work out which
    // point of the ORIGINAL image the user centered in the frame, as a percentage,
    // and hand that back. The full image is saved as-is; the feed just uses this
    // point as a CSS object-position so the framing matches what was chosen here,
    // while opening the post still shows the complete, uncropped picture.
    const iw = postCropImg.width, ih = postCropImg.height;
    const baseScale = Math.max(canvas.width/iw, canvas.height/ih);
    const scale = baseScale * postCropScale;
    const focusXPercent = Math.max(0, Math.min(100, (iw/2 - postCropOffsetX/scale) / iw * 100));
    const focusYPercent = Math.max(0, Math.min(100, (ih/2 - postCropOffsetY/scale) / ih * 100));
    document.getElementById('postCropSheet').classList.add('hidden');
    if(state.postCropCallback) state.postCropCallback(focusXPercent, focusYPercent);
    state.postCropCallback = null;
  });
}

function dataURLtoBlob(dataUrl){
  const [header, b64] = dataUrl.split(',');
  const mime = header.match(/:(.*?);/)[1];
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

/* ---------------- Image compression helper (used instead of Firebase Storage) ---------------- */

function compressImageToDataURL(fileOrBlob, maxDim, quality){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if(width > height && width > maxDim){ height = Math.round(height * (maxDim/width)); width = maxDim; }
      else if(height >= width && height > maxDim){ width = Math.round(width * (maxDim/height)); height = maxDim; }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => reject(new Error('image-load-failed'));
    img.src = URL.createObjectURL(fileOrBlob);
  });
}

/* ---------------- Init ---------------- */

document.addEventListener('DOMContentLoaded', () => {
  applySavedDisplayPrefs();
  renderFaida();
  renderJummah();
  renderDuas();
  renderDailyAmal();
  renderTasbeeh();
  renderHadithCard();
  renderStreakViews();
  renderHonestyNote();
  bindNav();
  bindOverlay();
  bindAuthUI();
  bindFeedUI();
  bindProfileUI();
  bindComposeSheet();
  bindCommentsSheet();
  bindEditProfileSheet();
  bindSettingsSheet();
  bindStreakPrivacySheet();
  bindStreakTabs();
  bindDayDetailAndLeaderboard();
  bindShareUI();
  bindCropTool();
  bindPostImageCropTool();
  bindSearchUI();
  bindModerationUI();
  bindQibla();
  bindImageLightbox();
  bindInviteFriends();
  bindInstallPrompt();
  attachFeedListener();
  updateHijriPill();
  updateAuthUI();
  bindOfflineDetection();
  bindOnboarding();
  bindPullToRefresh();
  bindErrorLogging();
  bindVerifiedTickClicks();

  setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    if(splash) splash.classList.add('fade-out');
  }, 900);

  document.getElementById('btnBannedLogout').addEventListener('click', () => auth.signOut());
  document.getElementById('btnMarkDaily').addEventListener('click', markDailyStreak);

  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});
  auth.onAuthStateChanged(handleAuthChange);

  const cached = localStorage.getItem('lastTimings');
  const cachedDate = localStorage.getItem('lastTimingsDate');
  const today = new Date().toDateString();
  if (cached && cachedDate === today) {
    state.timings = JSON.parse(cached);
    state.city = localStorage.getItem('lastCity') || '';
    finishLoad();
  } else if (localStorage.getItem('lastLat')) {
    fetchTimings(parseFloat(localStorage.getItem('lastLat')), parseFloat(localStorage.getItem('lastLng')));
  } else if(localStorage.getItem('onboardingSeen')){
    document.getElementById('locationOverlay').classList.remove('hidden');
  } else {
    state.locationPromptPending = true; // shown right after onboarding finishes instead
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing;
        if(!newSW) return;
        newSW.addEventListener('statechange', () => {
          if(newSW.state === 'installed' && navigator.serviceWorker.controller){
            newSW.postMessage({ type:'SKIP_WAITING' });
          }
        });
      });
    }).catch(() => {});
    let reloadedOnce = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if(reloadedOnce) return;
      reloadedOnce = true;
      window.location.reload();
    });
  }
});

function bindPullToRefresh(){
  const indicator = document.getElementById('pullRefreshIndicator');
  let startY = null, pulling = false, refreshing = false;
  const THRESHOLD = 70;

  window.addEventListener('touchstart', (e) => {
    if(window.scrollY > 0 || refreshing) { startY = null; return; }
    startY = e.touches[0].clientY;
    pulling = true;
  }, { passive:true });

  window.addEventListener('touchmove', (e) => {
    if(!pulling || startY === null || refreshing) return;
    const dy = e.touches[0].clientY - startY;
    if(dy <= 0) return;
    const pull = Math.min(dy * 0.5, 90);
    indicator.style.opacity = Math.min(pull / THRESHOLD, 1);
    indicator.style.transform = `translate(-50%, ${pull - 40}px)`;
  }, { passive:true });

  window.addEventListener('touchend', () => {
    if(!pulling || startY === null || refreshing) { pulling = false; return; }
    const currentPull = parseFloat((indicator.style.transform.match(/-?\d+(\.\d+)?px\)$/)||[0])[0]) || 0;
    pulling = false; startY = null;
    if(currentPull + 40 >= THRESHOLD){
      refreshing = true;
      haptic();
      indicator.classList.add('spinning');
      indicator.style.opacity = '1';
      indicator.style.transform = 'translate(-50%, 14px)';
      showToast('Refresh ho raha hai...');
      // Let the spinner actually spin for a beat so the gesture feels real,
      // then do a genuine full reload of whatever page the person is on.
      setTimeout(() => location.reload(), 600);
    } else {
      indicator.style.opacity = '0';
      indicator.style.transform = 'translate(-50%, -40px)';
    }
  });
}

function bindOnboarding(){
  const overlay = document.getElementById('onboardingOverlay');
  const slides = document.querySelectorAll('.onb-slide');
  const dots = document.querySelectorAll('.onb-dot');
  let idx = 0;
  const show = (i) => {
    idx = i;
    slides.forEach((s,si) => s.classList.toggle('active', si===i));
    dots.forEach((d,di) => d.classList.toggle('active', di===i));
    document.getElementById('btnOnboardingNext').textContent = (i === slides.length-1) ? 'Shuru Karein' : 'Agla';
  };
  const finish = () => {
    localStorage.setItem('onboardingSeen', '1');
    overlay.classList.add('hidden');
    if(state.locationPromptPending){
      state.locationPromptPending = false;
      document.getElementById('locationOverlay').classList.remove('hidden');
    }
  };
  document.getElementById('btnOnboardingNext').addEventListener('click', () => {
    if(idx === slides.length-1) finish(); else show(idx+1);
  });
  document.getElementById('btnOnboardingSkip').addEventListener('click', finish);
  if(!localStorage.getItem('onboardingSeen')){
    overlay.classList.remove('hidden');
  }
}

function bindOfflineDetection(){
  const banner = document.getElementById('offlineBanner');
  const update = () => banner.classList.toggle('hidden', navigator.onLine);
  window.addEventListener('online', () => { update(); showToast('Wapas online ho gaye ✓'); });
  window.addEventListener('offline', update);
  update();
  document.getElementById('btnRetryOnline').addEventListener('click', () => {
    if(navigator.onLine){ update(); showToast('Connection theek hai ✓'); }
    else showToast('Abhi bhi offline hai — thodi der mein dobara try karein.');
  });
}

function bindStreakTabs(){
  document.querySelectorAll('.stab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const which = tab.dataset.streak;
      document.getElementById('streakPaneNamaz').classList.toggle('active', which === 'namaz');
      document.getElementById('streakPaneDaily').classList.toggle('active', which === 'daily');
    });
  });
}

function bindOverlay(){
  const closeLocationOverlay = () => document.getElementById('locationOverlay').classList.add('hidden');
  document.getElementById('btnCloseLocationOverlay').addEventListener('click', closeLocationOverlay);
  document.getElementById('btnCloseLocationOverlay2').addEventListener('click', closeLocationOverlay);
  document.getElementById('btnUseLocation').addEventListener('click', () => {
    if (!navigator.geolocation) { alert('Location support nahi mila. Manually city choose karein.'); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        document.getElementById('locationOverlay').classList.add('hidden');
        fetchTimings(pos.coords.latitude, pos.coords.longitude);
        localStorage.setItem('lastLat', pos.coords.latitude);
        localStorage.setItem('lastLng', pos.coords.longitude);
      },
      () => { alert('Location allow nahi hui. Manually city choose karein.'); },
      { enableHighAccuracy:false, timeout:10000 }
    );
  });
}

async function fetchTimings(lat, lng){
  try{
    const d = new Date();
    const dateStr = `${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`;
    const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lng}&method=1`;
    const res = await fetch(url);
    const data = await res.json();
    state.timings = data.data.timings;
    state.city = await reverseCity(lat, lng);
    localStorage.setItem('lastTimings', JSON.stringify(state.timings));
    localStorage.setItem('lastTimingsDate', new Date().toDateString());
    localStorage.setItem('lastCity', state.city || '');
    cacheTimingsForOffline();
    finishLoad();
  } catch(e){
    document.getElementById('locationOverlay').classList.add('hidden');
    const oldTimings = localStorage.getItem('lastTimings');
    if(oldTimings){
      state.timings = JSON.parse(oldTimings);
      state.city = localStorage.getItem('lastCity') || '';
      finishLoad();
    }
    showErrorBanner('Internet check karein — timings load nahi ho saki. Purana data (agar hai) dikhaya ja raha hai.');
  }
}

function cacheTimingsForOffline(){
  if(!('caches' in window)) return;
  caches.open('pak-raho-notif-state').then(cache => {
    const body = JSON.stringify({ timings: state.timings, notifyOn: state.notifyOn, notifyOffset: state.notifyOffset });
    cache.put('namaz-timings-data', new Response(body, { headers:{ 'Content-Type':'application/json' } }));
  }).catch(() => {});
}

function showErrorBanner(msg){
  let el = document.getElementById('errBanner');
  if(!el){
    el = document.createElement('div');
    el.id = 'errBanner';
    el.className = 'err-banner';
    document.getElementById('viewHome').prepend(el);
  }
  el.innerHTML = `${msg} <span id="retryBtn" style="text-decoration:underline; cursor:pointer;">Dobara Koshish</span>`;
  document.getElementById('retryBtn').addEventListener('click', () => {
    el.remove();
    const lat = localStorage.getItem('lastLat'), lng = localStorage.getItem('lastLng');
    if(lat && lng) fetchTimings(parseFloat(lat), parseFloat(lng));
    else document.getElementById('locationOverlay').classList.remove('hidden');
  });
}

async function reverseCity(lat, lng){
  try{
    const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
    const j = await res.json();
    return j.city || j.locality || j.principalSubdivision || '';
  } catch(e){ return ''; }
}

function finishLoad(){
  document.getElementById('locationOverlay').classList.add('hidden');
  renderPrayerList();
  renderArc();
  updateCountdown();
  scheduleNotifications();
  catchUpMissedNotifications();
  registerPeriodicSync();
  document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') catchUpMissedNotifications();
  });
  setInterval(() => { updateCountdown(); renderArc(); }, 30000);
  setInterval(catchUpMissedNotifications, 10*60*1000);
  document.getElementById('locationPill').textContent = state.city ? `📍 ${state.city}` : '';
}

/* ---------------- Rendering (prayer times) ---------------- */

function to12h(t){
  if(!t) return '--:--';
  const [h,m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2,'0')} ${ampm}`;
}
function getNextPrayer(){
  if(!state.timings) return null;
  const now = new Date();
  const nowMins = now.getHours()*60 + now.getMinutes();
  for(const p of PRAYERS){
    const [h,m] = state.timings[p.key].split(':').map(Number);
    if(h*60+m > nowMins) return p;
  }
  return PRAYERS[0];
}
function renderPrayerList(){
  const list = document.getElementById('prayerList');
  const next = getNextPrayer();
  const isFriday = new Date().getDay() === 5;
  const OFFSET_OPTIONS = [0,5,10,15,30];
  list.innerHTML = PRAYERS.map(p => {
    const isCurrent = next && p.key === next.key;
    const label = (p.key === 'Dhuhr' && isFriday) ? { ar:'جمعہ', rn:'Jummah' } : p;
    const on = state.notifyOn[p.key];
    const offset = state.notifyOffset[p.key] || 0;
    return `
      <div class="prayer-row ${isCurrent?'current':''}">
        <div class="pname"><span class="ar">${label.ar}</span><span class="rn">${label.rn}</span></div>
        <div class="ptime-wrap">
          <span class="ptime">${to12h(state.timings[p.key])}</span>
          <select class="notify-offset-select ${on?'':'hidden'}" data-key="${p.key}">
            ${OFFSET_OPTIONS.map(o => `<option value="${o}" ${offset===o?'selected':''}>${o===0?'Waqt par':o+' min pehle'}</option>`).join('')}
          </select>
          <div class="toggle ${on?'on':''}" data-key="${p.key}"><div class="dot"></div></div>
        </div>
      </div>`;
  }).join('');
  list.querySelectorAll('.toggle').forEach(t => {
    t.addEventListener('click', async () => {
      haptic();
      const key = t.dataset.key;
      const turningOn = !state.notifyOn[key];
      if(turningOn && 'Notification' in window && Notification.permission === 'default'){
        await Notification.requestPermission();
      }
      state.notifyOn[key] = turningOn;
      localStorage.setItem('notifyPrefs', JSON.stringify(state.notifyOn));
      t.classList.toggle('on');
      const select = list.querySelector(`.notify-offset-select[data-key="${key}"]`);
      if(select) select.classList.toggle('hidden', !turningOn);
      scheduleNotifications();
      cacheTimingsForOffline();
    });
  });
  list.querySelectorAll('.notify-offset-select').forEach(sel => {
    sel.addEventListener('click', (e) => e.stopPropagation());
    sel.addEventListener('change', () => {
      state.notifyOffset[sel.dataset.key] = parseInt(sel.value, 10);
      localStorage.setItem('notifyOffsets', JSON.stringify(state.notifyOffset));
      scheduleNotifications();
      cacheTimingsForOffline();
      showToast('Alert time update ho gaya ✓');
    });
  });
}
function updateCountdown(){
  const next = getNextPrayer();
  if(!next || !state.timings) return;
  const now = new Date();
  const [h,m] = state.timings[next.key].split(':').map(Number);
  let target = new Date();
  target.setHours(h, m, 0, 0);
  if(target < now) target.setDate(target.getDate()+1);
  const diffMs = target - now;
  const hrs = Math.floor(diffMs / 3600000);
  const mins = Math.floor((diffMs % 3600000) / 60000);
  const isFriday = new Date().getDay() === 5;
  const label = (next.key === 'Dhuhr' && isFriday) ? 'Jummah' : next.rn;
  document.getElementById('nextName').textContent = label;
  document.getElementById('countdownText').textContent = `${hrs}h ${mins}m mein — ${to12h(state.timings[next.key])}`;
}
function renderArc(){
  const svgWrap = document.getElementById('arcSvg');
  if(!state.timings) return;
  const w = 320, h = 150;
  const toMin = (t) => { const [hh,mm] = t.split(':').map(Number); return hh*60+mm; };
  const fajrMin = toMin(state.timings.Fajr);
  const ishaMin = toMin(state.timings.Isha);
  const span = (ishaMin - fajrMin + 1440) % 1440 || 1;
  const points = PRAYERS.map(p => {
    let mins = toMin(state.timings[p.key]);
    let rel = (mins - fajrMin + 1440) % 1440;
    const pct = Math.min(Math.max(rel / span, 0), 1);
    const angle = Math.PI - pct * Math.PI;
    const cx = 20 + (w-40) * (1-pct);
    const cy = h - 20 - Math.sin(angle) * (h-45);
    return { ...p, x: cx, y: cy };
  });
  const now = new Date();
  const nowMin = now.getHours()*60 + now.getMinutes();
  const relNow = (nowMin - fajrMin + 1440) % 1440;
  const pctNow = Math.min(Math.max(relNow/span,0),1);
  const angleNow = Math.PI - pctNow * Math.PI;
  const nowX = 20 + (w-40)*(1-pctNow);
  const nowY = h - 20 - Math.sin(angleNow) * (h-45);
  const showIndicator = relNow <= span;
  const next = getNextPrayer();
  const isFriday = new Date().getDay() === 5;
  let pathD = `M 20 ${h-20} `;
  points.forEach(pt => { pathD += `L ${pt.x} ${pt.y} `; });
  pathD += `L ${w-20} ${h-20}`;
  let svg = `<svg viewBox="0 0 ${w} ${h}" class="arc-svg" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<path d="${pathD}" class="arc-path" />`;
  if(showIndicator) svg += `<circle cx="${nowX}" cy="${nowY}" r="5" class="arc-indicator" />`;
  points.forEach(pt => {
    const active = next && pt.key === next.key;
    const lbl = (pt.key === 'Dhuhr' && isFriday) ? 'Jummah' : pt.rn;
    svg += `<g class="arc-point ${active?'active':''}"><circle cx="${pt.x}" cy="${pt.y}" r="7" /><text x="${pt.x}" y="${pt.y+22}" text-anchor="middle">${lbl}</text></g>`;
  });
  svg += `</svg>`;
  svgWrap.innerHTML = svg;
}
function renderFaida(){
  const wrap = document.getElementById('faidaList');
  wrap.innerHTML = FAIDA.map((f,i) => `
    <div class="faida-card" data-i="${i}">
      <div class="faida-head">
        <div class="left"><div class="faida-icon">${f.icon}</div><div class="faida-title">${f.ar}<span class="rn">${f.key} ka Faida</span></div></div>
        <span class="chev">▾</span>
      </div>
      <div class="faida-body">${f.body}</div>
    </div>`).join('');
  wrap.querySelectorAll('.faida-card').forEach(card => {
    card.querySelector('.faida-head').addEventListener('click', () => {
      const body = card.querySelector('.faida-body');
      const isOpen = card.classList.contains('open');
      wrap.querySelectorAll('.faida-card').forEach(c => { c.classList.remove('open'); c.querySelector('.faida-body').style.maxHeight = null; });
      if(!isOpen){ card.classList.add('open'); body.style.maxHeight = body.scrollHeight + 20 + 'px'; }
    });
  });
}
function renderJummah(){
  document.getElementById('jummahList').innerHTML = JUMMAH_DATA.items.map(it => `
    <div class="faida-card"><div class="faida-title" style="margin-bottom:8px;">${it.h}</div><p style="font-size:13.5px; line-height:1.7; color:var(--text-muted);">${it.body}</p></div>`).join('');
}
function renderHadithCard(){
  document.getElementById('hadithCard').innerHTML = `
    <div class="hd-ar">${HADITH_SAWAB.ar}</div>
    <div class="hd-tr">${HADITH_SAWAB.translit}</div>
    <div class="hd-ref">${HADITH_SAWAB.ref}</div>`;
}
function renderDuas(){
  document.getElementById('duaList').innerHTML = DUAS.map(d => `
    <div class="dua-card"><div class="dtag">${d.tag}</div><div class="arabic">${d.ar}</div><div class="translit">${d.tr}</div><div class="meaning">${d.mn}</div></div>`).join('');
}
function renderDailyAmal(){
  const idx = new Date().getDay();
  const a = DAILY_AMAL[idx];
  document.getElementById('dailyAmalCard').innerHTML = `
    <div class="dtag">Aaj (${a.day}) ka Khaas Amal</div>
    <div class="faida-title" style="margin:8px 0 4px;">${a.title} <span class="rn" style="font-family:'Amiri',serif; font-size:15px; display:inline;">${a.ar}</span></div>
    <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">${a.body}</p>`;
}
function renderHonestyNote(){
  document.getElementById('honestyNote').innerHTML = `
    <div class="honesty-card">
      <div class="h-head"><span class="h-icon">⚠️</span><span class="h-title">${HONESTY_NOTE.title}</span></div>
      <div class="h-body">${HONESTY_NOTE.body}</div>
      <div class="h-hadith">${HONESTY_NOTE.hadith}</div>
    </div>`;
}
let tasbeehIndex = 0, tasbeehCount = 0;
function renderTasbeeh(){
  const t = TASBEEH_AFTER_NAMAZ;
  const current = t.items[tasbeehIndex];
  document.getElementById('tasbeehCard').innerHTML = `
    <div class="faida-title" style="margin-bottom:14px; text-align:center;">${t.title}</div>
    <div class="tasbeeh-widget">
      <div class="tasbeeh-phrase">${current.ar}</div>
      <div class="tasbeeh-progress">${tasbeehCount} / ${current.n.replace(' martaba','')}</div>
      <button class="tasbeeh-tap-btn" id="btnTasbeehTap">${tasbeehCount}</button>
      <div class="tasbeeh-dots">${t.items.map((it,i) => `<div class="td ${i<tasbeehIndex?'done':''}"></div>`).join('')}</div>
      <button class="tasbeeh-reset-btn" id="btnTasbeehReset">Reset Karein</button>
    </div>
    <p style="font-size:12.5px; color:var(--text-muted); margin-top:14px; line-height:1.6;">${t.note}</p>`;

  document.getElementById('btnTasbeehTap').addEventListener('click', () => {
    tasbeehCount++;
    const target = parseInt(current.n, 10);
    if(tasbeehCount >= target){
      tasbeehCount = 0;
      tasbeehIndex = (tasbeehIndex + 1) % t.items.length;
      if(tasbeehIndex === 0) showToast('Tasbeeh mukammal ho gayi 🎉');
    }
    renderTasbeeh();
  });
  document.getElementById('btnTasbeehReset').addEventListener('click', () => {
    tasbeehIndex = 0; tasbeehCount = 0; renderTasbeeh();
  });
}
function updateHijriPill(){
  const d = new Date();
  const gregorian = d.toLocaleDateString('en-GB', { day:'numeric', month:'short' });
  let hijri = '';
  try{ hijri = new Intl.DateTimeFormat('en-TN-u-ca-islamic', { day:'numeric', month:'long', year:'numeric' }).format(d); } catch(e){ hijri=''; }
  document.getElementById('hijriPill').innerHTML = hijri ? `${hijri}<br><span style="opacity:0.6; font-size:10px;">${gregorian}</span>` : gregorian;
}

/* ---------------- Notifications ---------------- */

// Covers the single most common failure mode: the person simply wasn't
// looking at the app the exact minute a prayer time hit, so the setTimeout
// below (which only runs while this page is open) never got a chance to
// fire. Every time the app opens or comes back to the foreground, check
// whether today's already-passed prayers were missed and notify right away
// — sharing the same "namaz-notified-today" cache entry the service worker
// uses so a prayer never gets announced twice from two different paths.
async function catchUpMissedNotifications(){
  if(!state.timings || !('Notification' in window) || Notification.permission !== 'granted') return;
  if(!('caches' in window)) return;
  try{
    const cache = await caches.open('pak-raho-notif-state');
    const todayKey = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
    let notified = { date: todayKey, keys: [] };
    const existing = await cache.match('namaz-notified-today');
    if(existing){ try{ const parsed = await existing.json(); if(parsed.date === todayKey) notified = parsed; } catch(e){} }

    const now = new Date();
    const nowMins = now.getHours()*60 + now.getMinutes();
    let changed = false;
    PRAYERS.forEach(p => {
      if(!state.notifyOn[p.key] || notified.keys.includes(p.key)) return;
      const [h,m] = (state.timings[p.key]||'').split(':').map(Number);
      if(isNaN(h)) return;
      const mins = h*60+m;
      if(nowMins >= mins && nowMins - mins <= 120){
        const isFriday = now.getDay() === 5;
        const label = (p.key === 'Dhuhr' && isFriday) ? 'Jummah' : p.rn;
        fireNotification(`${label} ka waqt ho gaya`, 'Namaz ada karne ka waqt aa gaya hai.');
        notified.keys.push(p.key);
        changed = true;
      }
    });
    if(changed) await cache.put('namaz-notified-today', new Response(JSON.stringify(notified)));
  } catch(e){ /* best-effort only */ }
}

function scheduleNotifications(){
  state.scheduledTimeouts.forEach(clearTimeout);
  state.scheduledTimeouts = [];
  if(!state.timings || !('Notification' in window)) return;
  if(Notification.permission !== 'granted') return;
  const now = new Date();
  PRAYERS.forEach(p => {
    if(!state.notifyOn[p.key]) return;
    const [h,m] = state.timings[p.key].split(':').map(Number);
    const target = new Date(); target.setHours(h,m,0,0);
    target.setMinutes(target.getMinutes() - (state.notifyOffset[p.key] || 0));
    if(target <= now) return;
    const ms = target - now;
    const isFriday = target.getDay() === 5;
    const label = (p.key === 'Dhuhr' && isFriday) ? 'Jummah' : p.rn;
    const offset = state.notifyOffset[p.key] || 0;
    const title = offset > 0 ? `${label} ${offset} minute mein hai` : `${label} ka waqt ho gaya`;
    const body = offset > 0 ? 'Namaz ki taiyari karein.' : 'Namaz ada karne ka waqt aa gaya hai.';
    const t = setTimeout(() => fireNotification(title, body), ms);
    state.scheduledTimeouts.push(t);
  });
}
function fireNotification(title, body){
  if(navigator.serviceWorker && navigator.serviceWorker.controller){
    navigator.serviceWorker.controller.postMessage({ type:'SHOW_NOTIFICATION', title, body, tag:'namaz-alert' });
  } else if(Notification.permission === 'granted'){
    new Notification(title, { body, icon:'icons/icon-192.png' });
  }
}
async function registerPeriodicSync(){
  try{
    if(!('serviceWorker' in navigator)) return;
    const reg = await navigator.serviceWorker.ready;
    if('periodicSync' in reg){
      const status = await navigator.permissions.query({ name:'periodic-background-sync' });
      if(status.state === 'granted') await reg.periodicSync.register('namaz-check', { minInterval: 15*60*1000 });
    } else if('sync' in reg){
      reg.sync.register('namaz-check').catch(() => {});
    }
  } catch(e){ /* not supported on this browser — best-effort only */ }
}

/* ---------------- Auth ---------------- */

function handleAuthChange(user){
  // Detach any listeners from a previous auth state first — onAuthStateChanged
  // can fire more than once for the same signed-in user (e.g. token refresh),
  // and attaching a fresh set of listeners on top of an old, still-live set
  // used to leave duplicate listeners running which could paint the profile
  // with an older/incomplete snapshot after a re-fire.
  detachUserListeners();
  state.currentUser = user;
  if(user){
    attachUserListeners(user.uid);
    pingDailyActive();
  } else {
    state.profile = null;
    state.blockedSet = new Set();
    checkBanned();
    updateAuthUI();
    try{ localStorage.removeItem('cachedHeaderAvatar'); } catch(e){}
  }
  renderStreakViews();
  renderProfileView();
}

function attachUserListeners(uid){
  // Live listener instead of a one-time get(): a one-time get() that only
  // fires once at sign-in time meant that if it was ever missed, delayed, or
  // raced by another render (exactly what happened when reopening the app
  // with an already-logged-in session), your own profile card could get
  // stuck showing the "{username:'User'}" placeholder — no photo, name
  // literally "User" — even though posts (which store their own copy of your
  // name/photo at post time) kept showing correctly. A live onSnapshot keeps
  // state.profile self-healing: it re-fires automatically on reconnect and
  // always reflects the real users/{uid} doc.
  unsubProfile = db.collection('users').doc(uid).onSnapshot(doc => {
    // If the doc genuinely doesn't exist yet (the very first instant after
    // signup) keep whatever we already had rather than blowing away a good
    // profile with the bare fallback.
    state.profile = doc.exists ? doc.data() : (state.profile || { username: 'User' });
    state.blockedSet = new Set(state.profile.blockedUsers || []);
    lastCachedStreaks = {
      namazStreak: state.profile.namazStreak ?? null, namazBest: state.profile.namazBest ?? null,
      dailyStreak: state.profile.dailyStreak ?? null, dailyBest: state.profile.dailyBest ?? null,
    };
    checkBanned();
    renderProfileView();
    renderFeed();
    updateAuthUI();
    try{
      localStorage.setItem('cachedHeaderAvatar', JSON.stringify({
        uid, photoURL: state.profile.photoURL || null,
        initial: (state.profile.nickname || state.profile.username || 'U').charAt(0).toUpperCase(),
      }));
    } catch(e){}
  }, (e) => showToast('Profile load nahi ho saka: ' + (e.code||'')));
  unsubPrayerLog = db.collection('prayerLogs').doc(uid).onSnapshot(doc => {
    state.remoteNamazLog = doc.exists ? doc.data() : { log:{} };
    renderNamazStreak();
  }, (e) => showToast('Namaz streak data load nahi ho saka: ' + (e.code||'')));
  unsubDailyLog = db.collection('dhikrLogs').doc(uid).onSnapshot(doc => {
    state.remoteDailyLog = doc.exists ? doc.data() : { daily:{} };
    renderDailyStreak();
  }, (e) => showToast('Daily streak data load nahi ho saka: ' + (e.code||'')));
  unsubFollows = db.collection('follows').where('follower','==',uid).onSnapshot(snap => {
    state.followingSet = new Set(snap.docs.map(d => d.data().following));
    renderFeed();
    renderProfileView();
  }, (e) => console.error('follows listener', e));
  unsubLikes = db.collection('likes').where('uid','==',uid).onSnapshot(snap => {
    const prevSet = state.myLikedPostIds || new Set();
    const newSet = new Set(snap.docs.map(d => d.data().postId));
    state.myLikedPostIds = newSet;
    // Only patch the hearts that actually changed instead of rebuilding the whole
    // feed — a full re-render here races with the posts listener (which owns the
    // like *count*) and was the cause of the like button flicking/miscounting.
    const changed = new Set([...prevSet, ...newSet].filter(id => prevSet.has(id) !== newSet.has(id)));
    changed.forEach(id => syncPostCardDOM(id));
  }, (e) => console.error('likes listener', e));
  unsubCommentLikes = db.collection('commentLikes').where('uid','==',uid).onSnapshot(snap => {
    const prevSet = state.myLikedCommentIds || new Set();
    const newSet = new Set(snap.docs.map(d => d.data().commentId));
    state.myLikedCommentIds = newSet;
    const changed = new Set([...prevSet, ...newSet].filter(id => prevSet.has(id) !== newSet.has(id)));
    changed.forEach(id => syncCommentRowDOM(id));
  }, (e) => console.error('comment likes listener', e));
}
function detachUserListeners(){
  if(unsubProfile) unsubProfile();
  if(unsubPrayerLog) unsubPrayerLog();
  if(unsubDailyLog) unsubDailyLog();
  if(unsubFollows) unsubFollows();
  if(unsubLikes) unsubLikes();
  if(unsubCommentLikes) unsubCommentLikes();
  unsubProfile = null; unsubPrayerLog = null; unsubDailyLog = null; unsubFollows = null; unsubLikes = null; unsubCommentLikes = null;
  state.remoteNamazLog = null; state.remoteDailyLog = null;
  state.followingSet = new Set();
  state.myLikedPostIds = new Set();
  state.myLikedCommentIds = new Set();
}

function authErrorMessage(err){
  const map = {
    'auth/email-already-in-use': 'Ye email pehle se registered hai.',
    'auth/invalid-email': 'Email sahi format mein daalein.',
    'auth/weak-password': 'Password kam se kam 6 characters ka ho.',
    'auth/user-not-found': 'Account nahi mila. Sign Up karein.',
    'auth/wrong-password': 'Password ghalat hai.',
    'auth/invalid-credential': 'Email ya password ghalat hai.',
  };
  return map[err.code] || (err.message || 'Kuch masla ho gaya, dobara koshish karein.');
}

/* ---------------- Signup Wizard ---------------- */

let wizard = { step:1, email:'', password:'', username:'', usernameAvailable:false, nickname:'', bio:'', picDataUrl:null };
let unameCheckTimer = null;

function resetWizard(){
  wizard = { step:1, email:'', password:'', username:'', usernameAvailable:false, nickname:'', bio:'', picDataUrl:null };
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupNickname').value = '';
  document.getElementById('signupBio').value = '';
  document.getElementById('unameStatus').innerHTML = '';
  document.getElementById('wizardPicPreview').innerHTML = '➕';
  ['wError1','wError2','wError3','wError4','wError5'].forEach(id => document.getElementById(id).textContent = '');
  document.getElementById('btnWizardNext2').disabled = true;
  goToWizardStep(1);
}
function goToWizardStep(n){
  wizard.step = n;
  document.querySelectorAll('.wizard-pane').forEach(p => p.classList.remove('active'));
  document.getElementById(`wpane${n}`).classList.add('active');
  document.querySelectorAll('.wstep').forEach(s => {
    const sn = parseInt(s.dataset.step, 10);
    s.classList.toggle('active', sn === n);
    s.classList.toggle('done', sn < n);
  });
}

function bindAuthUI(){
  document.querySelectorAll('.atab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.atab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.form === 'login';
      document.getElementById('loginForm').style.display = isLogin ? 'block' : 'none';
      document.getElementById('signupForm').style.display = isLogin ? 'none' : 'block';
      if(!isLogin) resetWizard();
    });
  });

  document.getElementById('btnLogin').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value;
    const errEl = document.getElementById('loginError');
    const btn = document.getElementById('btnLogin');
    errEl.textContent = '';
    setBtnLoading(btn, true);
    auth.signInWithEmailAndPassword(email, pass)
      .then(() => { switchView('viewHome'); })
      .catch(err => errEl.textContent = authErrorMessage(err))
      .finally(() => setBtnLoading(btn, false));
  });

  document.getElementById('btnForgotPassword').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value.trim();
    const errEl = document.getElementById('loginError');
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      errEl.textContent = 'Pehle upar email box mein apna email daalein, phir "Password bhool gaye?" dabayein.';
      return;
    }
    errEl.textContent = '';
    auth.sendPasswordResetEmail(email)
      .then(() => showToast('Reset link is email par bhej diya gaya: ' + email))
      .catch(err => errEl.textContent = authErrorMessage(err));
  });

  document.getElementById('btnWizardNext1').addEventListener('click', () => {
    const email = document.getElementById('signupEmail').value.trim();
    const pass = document.getElementById('signupPassword').value;
    const errEl = document.getElementById('wError1');
    errEl.textContent = '';
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ errEl.textContent = 'Sahi email daalein.'; return; }
    if(!pass || pass.length < 6){ errEl.textContent = 'Password kam se kam 6 characters ka ho.'; return; }
    wizard.email = email; wizard.password = pass;
    goToWizardStep(2);
  });

  document.getElementById('signupUsername').addEventListener('input', (e) => {
    clearTimeout(unameCheckTimer);
    const val = e.target.value.trim();
    const statusEl = document.getElementById('unameStatus');
    const nextBtn = document.getElementById('btnWizardNext2');
    const errEl = document.getElementById('wError2');
    errEl.textContent = '';
    wizard.usernameAvailable = false;
    nextBtn.disabled = true;
    if(val.length < 3){ statusEl.innerHTML=''; if(val.length>0) errEl.textContent='Username kam se kam 3 letters ka ho.'; return; }
    if(!/^[a-zA-Z0-9_.]+$/.test(val)){ statusEl.innerHTML=''; errEl.textContent='Sirf letters, numbers, _ aur . allowed hain.'; return; }
    statusEl.innerHTML = '<div class="uname-spinner"></div>';
    statusEl.className = 'uname-status';
    unameCheckTimer = setTimeout(async () => {
      try{
        const doc = await db.collection('usernames').doc(val.toLowerCase()).get();
        if(document.getElementById('signupUsername').value.trim() !== val) return;
        if(doc.exists){
          statusEl.innerHTML = '✕'; statusEl.className = 'uname-status bad';
          errEl.textContent = 'Ye username pehle se liya ja chuka hai.';
        } else {
          statusEl.innerHTML = '✓'; statusEl.className = 'uname-status ok';
          wizard.username = val; wizard.usernameAvailable = true;
          nextBtn.disabled = false;
        }
      } catch(e){ statusEl.innerHTML = ''; errEl.textContent = 'Check nahi ho saka: ' + (e.code || 'internet dekhein'); }
    }, 550);
  });

  document.getElementById('btnWizardNext2').addEventListener('click', () => {
    if(!wizard.usernameAvailable) return;
    const ok = confirm(`Username "${wizard.username}" confirm karein? Ye aap sirf 30 din baad hi dobara change kar sakenge.`);
    if(!ok) return;
    goToWizardStep(3);
  });

  document.getElementById('btnWizardNext3').addEventListener('click', () => {
    const nickname = document.getElementById('signupNickname').value.trim();
    const errEl = document.getElementById('wError3');
    if(!nickname){ errEl.textContent = 'Nickname likhein.'; return; }
    if(containsBadWords(nickname)){ errEl.textContent = 'Nazeba zaban allowed nahi hai.'; return; }
    errEl.textContent = '';
    wizard.nickname = nickname;
    goToWizardStep(4);
  });

  document.getElementById('wizardPicPreview').addEventListener('click', () => document.getElementById('wizardPicInput').click());
  document.getElementById('btnPickPic').addEventListener('click', () => document.getElementById('wizardPicInput').click());
  document.getElementById('wizardPicInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const errEl = document.getElementById('wError4');
    errEl.textContent = '';
    if(!file) return;
    if(!file.type.startsWith('image/')){ errEl.textContent = 'Sirf image file allowed hai.'; return; }
    if(file.size > 8*1024*1024){ errEl.textContent = 'Image 8MB se choti honi chahiye.'; return; }
    openCropTool(file, (dataUrl) => {
      wizard.picDataUrl = dataUrl;
      document.getElementById('wizardPicPreview').innerHTML = `<img src="${dataUrl}">`;
    });
    e.target.value = '';
  });
  document.getElementById('btnSkipPic').addEventListener('click', () => {
    wizard.picDataUrl = null;
    document.getElementById('wizardPicPreview').innerHTML = '➕';
    goToWizardStep(5);
  });
  document.getElementById('btnWizardNext4').addEventListener('click', () => goToWizardStep(5));

  document.getElementById('btnFinishSignup').addEventListener('click', async () => {
    const bio = document.getElementById('signupBio').value.trim();
    const errEl = document.getElementById('wError5');
    errEl.textContent = '';
    if(bio && containsBadWords(bio)){ errEl.textContent = 'Nazeba zaban allowed nahi hai.'; return; }
    wizard.bio = bio;

    const btn = document.getElementById('btnFinishSignup');
    setBtnLoading(btn, true);

    try{
      const nameDoc = await db.collection('usernames').doc(wizard.username.toLowerCase()).get();
      if(nameDoc.exists){ errEl.textContent = 'Ye username abhi kisi aur ne le liya hai — dobara try karein.'; setBtnLoading(btn,false); goToWizardStep(2); return; }

      const cred = await auth.createUserWithEmailAndPassword(wizard.email, wizard.password);
      const uid = cred.user.uid;

      const photoURL = wizard.picDataUrl || '';

      await db.collection('users').doc(uid).set({
        username: wizard.username, usernameLower: wizard.username.toLowerCase(),
        nickname: wizard.nickname, nicknameLower: wizard.nickname.toLowerCase(), bio: wizard.bio, photoURL, email: wizard.email,
        hideFollowing: false, hideNamazStreak: false, hideDailyStreak: false, hideTotalNamaz: false, warnings: 0, banned: false, verifiedTier: 0,
        namazStreak: 0, namazBest: 0, dailyStreak: 0, dailyBest: 0, blockedUsers: [],
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        usernameChangedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      await db.collection('usernames').doc(wizard.username.toLowerCase()).set({ uid });

      switchView('viewHome');
      showToast(`Khush aamdeed, ${wizard.nickname}! 🎉`);
    } catch(err){
      errEl.textContent = authErrorMessage(err);
    }
    setBtnLoading(btn, false);
  });
}

/* ---------------- Feed / Posts ---------------- */

let feedInitialized = false;
function attachFeedListener(){
  db.collection('posts').orderBy('createdAt','desc').limit(50).onSnapshot(snap => {
    state.posts = snap.docs.map(d => ({ id:d.id, ...d.data() }));
    const changes = snap.docChanges();
    const structural = changes.some(c => c.type === 'added' || c.type === 'removed');
    if(!feedInitialized || structural){
      // First load, or a post was added/removed — a full rebuild is needed here.
      feedInitialized = true;
      renderFeed();
    } else {
      // Only counts/fields changed (e.g. a like or comment landed) — patch just
      // those cards in place. Rebuilding the whole feed on every like/comment
      // (as before) raced with the likes listener and caused the like button
      // to show the wrong heart/count or need multiple clicks to "take".
      changes.forEach(c => { if(c.type === 'modified') syncPostCardDOM(c.doc.id); });
      refreshProfilePostsIfVisible();
    }
    refreshTierCacheForPosts(state.posts);
  }, (e) => {
    document.getElementById('feedList').innerHTML = `<div class="note-box">Feed load nahi ho saka: ${e.code || e.message}</div>`;
  });
}

// The verified-tier badge on a post used to read a "authorTier" value frozen
// onto the post document at the moment it was created — so verifying someone
// AFTER they'd already posted left all their older posts un-badged even
// though their profile/comments showed it correctly. This keeps a live
// uid → tier cache (refreshed from the real users doc) so every post always
// reflects the person's *current* badge, not whatever it was when they posted.
async function refreshTierCacheForPosts(posts){
  const uids = [...new Set(posts.map(p => p.uid))].filter(uid => uid && !state.userTierCache.has(uid));
  if(!uids.length) return;
  for(let i=0; i<uids.length; i+=10){
    const chunk = uids.slice(i, i+10);
    try{
      const snap = await db.collection('users').where(firebase.firestore.FieldPath.documentId(), 'in', chunk).get();
      snap.docs.forEach(d => state.userTierCache.set(d.id, d.data().verifiedTier || 0));
    } catch(e){ /* non-fatal — badge just falls back silently */ }
    chunk.forEach(uid => { if(!state.userTierCache.has(uid)) state.userTierCache.set(uid, 0); });
  }
  document.querySelectorAll('.post-uname[data-uid]').forEach(el => {
    const uid = el.dataset.uid;
    if(state.userTierCache.has(uid)){
      const tick = el.querySelector('.verified-tick');
      const wantsTick = state.userTierCache.get(uid) > 0 || isOfficialAccount(el.dataset.username);
      if(wantsTick && !tick){
        el.insertAdjacentHTML('beforeend', verifiedBadgeHtml(el.dataset.username, state.userTierCache.get(uid)));
      } else if(!wantsTick && tick){
        tick.remove();
      }
    }
  });
}

function timeAgo(ts){
  if(!ts || !ts.toDate) return 'abhi';
  const diffMs = Date.now() - ts.toDate().getTime();
  const mins = Math.floor(diffMs/60000);
  if(mins < 1) return 'abhi';
  if(mins < 60) return `${mins}m pehle`;
  const hrs = Math.floor(mins/60);
  if(hrs < 24) return `${hrs}h pehle`;
  return `${Math.floor(hrs/24)}d pehle`;
}
function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = str || '';
  return d.innerHTML;
}
function linkifyHashtags(text){
  return escapeHtml(text).replace(/#([a-zA-Z0-9_]+)/g, '<span class="hashtag" data-tag="$1">#$1</span>');
}

function buildPostCardHtml(p){
  const displayName = safeDisplayName(p.nickname || p.username);
  const initial = displayName.charAt(0).toUpperCase();
  const avatarHtml = p.photoURL ? `<img src="${p.photoURL}">` : initial;
  const isOwn = state.currentUser && p.uid === state.currentUser.uid;
  const isFollowing = state.followingSet.has(p.uid);
  const isLiked = state.myLikedPostIds.has(p.id);
  const isVerifiedShare = p.type === 'namazStreakShare' || p.type === 'dailyStreakShare';
  return `
    <div class="post-card ${isVerifiedShare ? 'verified-streak' : ''}" data-post-id="${p.id}">
      <div class="post-head">
        <div class="post-author clickable" data-uid="${p.uid}">
          <div class="post-avatar">${avatarHtml}</div>
          <div><div class="post-uname" data-uid="${p.uid}" data-username="${escapeHtml(p.username||'')}">${escapeHtml(displayName)}${verifiedBadgeHtml(p.username, state.userTierCache.has(p.uid) ? state.userTierCache.get(p.uid) : p.authorTier)}</div><div class="post-time">${timeAgo(p.createdAt)}</div></div>
        </div>
        ${isOwn ? '' : `<button class="follow-btn ${isFollowing?'following':''}" data-uid="${p.uid}" data-uname="${escapeHtml(p.username||'User')}">${isFollowing?'Following':'Follow'}</button>`}
        <button class="post-menu-btn" data-action="menu" data-id="${p.id}" data-uid="${p.uid}">⋮</button>
      </div>
      ${p.imageURL ? `<img class="post-image" src="${p.imageURL}" style="object-position:${p.imageFocusX ?? 50}% ${p.imageFocusY ?? 50}%" alt="${escapeHtml(p.title||'Post image')}" data-action="open-image" data-id="${p.id}" onload="this.classList.add('img-loaded')">` : ''}
      ${p.title ? `<div class="post-image-title">${escapeHtml(p.title)}</div>` : ''}
      <div class="post-text">${linkifyHashtags(p.text || '')}</div>
      ${p.madeForKids ? `<div class="kids-badge">👶 Made for Kids</div>` : ''}
      ${isVerifiedShare ? `<div class="verified-badge">✓ Pak Raho Verified Streak</div>` : ''}
      ${p.type === 'namazStreakShare' ? `<div class="riya-note">${RIYA_NOTE_TEXT}</div>` : ''}
      <div class="post-actions">
        <button class="post-action-btn ${isLiked?'liked':''}" data-action="like" data-id="${p.id}"><span>${isLiked?'❤️':'🤍'}</span><span class="cnt">${p.likesCount || 0}</span></button>
        <button class="post-action-btn" data-action="comment" data-id="${p.id}"><span>💬</span><span class="cnt">${p.commentsCount || 0}</span></button>
      </div>
    </div>`;
}

function bindPostCardEvents(container){
  container.querySelectorAll('.follow-btn').forEach(btn => btn.addEventListener('click', () => toggleFollow(btn.dataset.uid, btn.dataset.uname)));
  container.querySelectorAll('.clickable[data-uid]').forEach(el => el.addEventListener('click', () => openProfile(el.dataset.uid)));
  container.querySelectorAll('[data-action="like"]').forEach(btn => btn.addEventListener('click', () => toggleLike(btn.dataset.id)));
  container.querySelectorAll('[data-action="comment"]').forEach(btn => btn.addEventListener('click', () => openComments(btn.dataset.id)));
  container.querySelectorAll('[data-action="open-image"]').forEach(img => img.addEventListener('click', () => openImageLightbox(img.dataset.id)));
  container.querySelectorAll('[data-action="menu"]').forEach(btn => btn.addEventListener('click', () => openPostMenu(btn.dataset.id, btn.dataset.uid)));
  container.querySelectorAll('.hashtag').forEach(el => el.addEventListener('click', () => { openSearchSheet(); document.getElementById('searchInput').value = '#' + el.dataset.tag; runSearch('#' + el.dataset.tag); }));
}

function computeHotScore(p){
  const created = p.createdAt?.toMillis ? p.createdAt.toMillis() : Date.now();
  const ageHours = Math.max(0.5, (Date.now() - created) / 3600000);
  const engagement = (p.likesCount || 0) * 2 + (p.commentsCount || 0) * 3;
  // Engagement-weighted with a gentle recency decay — gives a "for you" feel
  // instead of a plain chronological dump, while still surfacing fresh posts.
  return (engagement + 1) / Math.pow(ageHours + 2, 1.3);
}

function renderFeed(){
  const list = document.getElementById('feedList');
  let posts = state.posts.filter(p => !state.blockedSet.has(p.uid));

  if(state.feedMode === 'following' && state.currentUser){
    posts = posts.filter(p => state.followingSet.has(p.uid) || p.uid === state.currentUser.uid);
  } else if(state.feedMode === 'images'){
    posts = posts.filter(p => !!p.imageURL).sort((a,b) => (b.createdAt?.toMillis?.()||0) - (a.createdAt?.toMillis?.()||0));
  } else if(state.feedMode === 'all'){
    posts = [...posts].sort((a,b) => computeHotScore(b) - computeHotScore(a));
  }

  if(posts.length === 0){
    const msg = state.feedMode === 'following' ? 'Abhi tak kisi ko follow nahi kiya, ya unhone post nahi ki.'
      : state.feedMode === 'images' ? 'Abhi koi image post nahi hai.'
      : 'Abhi koi post nahi hai. Sabse pehle post karein!';
    list.innerHTML = `<div class="note-box">${msg}</div>`;
    return;
  }

  if(state.feedMode === 'images'){
    list.innerHTML = `<div class="image-grid">${posts.map(buildImageGridTileHtml).join('')}</div>`;
    list.querySelectorAll('.grid-tile').forEach(el => el.addEventListener('click', () => openImageLightbox(el.dataset.id)));
  } else {
    list.innerHTML = posts.map(buildPostCardHtml).join('');
    bindPostCardEvents(list);
  }
  refreshProfilePostsIfVisible();
}

function buildImageGridTileHtml(p){
  const isLiked = state.myLikedPostIds.has(p.id);
  return `
    <div class="grid-tile" data-id="${p.id}">
      <img src="${p.imageURL}" alt="${escapeHtml(p.title||'Image')}">
      <div class="grid-tile-overlay">
        ${p.title ? `<div class="gt-title">${escapeHtml(p.title)}</div>` : ''}
        <div class="gt-stats">${isLiked?'❤️':'🤍'} ${p.likesCount||0} · 💬 ${p.commentsCount||0}</div>
      </div>
    </div>`;
}

/* ---------------- Image Lightbox ---------------- */

function openImageLightbox(postId){
  const p = state.posts.find(x => x.id === postId) || (state.profilePosts||[]).find(x => x.id === postId);
  if(!p || !p.imageURL) return;
  state.lightboxPostId = postId;
  document.getElementById('lightboxImg').src = p.imageURL;
  document.getElementById('lightboxTitle').textContent = p.title || '';
  document.getElementById('lightboxTitle').classList.toggle('hidden', !p.title);
  document.getElementById('lightboxLikeBtn').dataset.id = postId;
  document.getElementById('lightboxCommentBtn').dataset.id = postId;
  syncLightboxUI();
  document.getElementById('imageLightbox').classList.remove('hidden');
}
function closeImageLightbox(){
  document.getElementById('imageLightbox').classList.add('hidden');
  document.getElementById('lightboxImg').src = '';
  state.lightboxPostId = null;
}
function syncLightboxUI(){
  const postId = state.lightboxPostId;
  if(!postId) return;
  const p = state.posts.find(x => x.id === postId) || (state.profilePosts||[]).find(x => x.id === postId);
  const liked = state.myLikedPostIds.has(postId);
  const likesCount = p ? (p.likesCount||0) : 0;
  const commentsCount = p ? (p.commentsCount||0) : 0;
  const likeBtn = document.getElementById('lightboxLikeBtn');
  likeBtn.classList.toggle('liked', liked);
  likeBtn.querySelector('span:first-child').textContent = liked ? '❤️' : '🤍';
  likeBtn.querySelector('.cnt').textContent = likesCount;
  document.getElementById('lightboxCommentBtn').querySelector('.cnt').textContent = commentsCount;
}
function bindImageLightbox(){
  document.getElementById('btnCloseLightbox').addEventListener('click', closeImageLightbox);
  document.getElementById('imageLightbox').addEventListener('click', (e) => {
    if(e.target.id === 'imageLightbox') closeImageLightbox(); // click on backdrop closes it
  });
  document.getElementById('lightboxLikeBtn').addEventListener('click', () => toggleLike(state.lightboxPostId));
  document.getElementById('lightboxCommentBtn').addEventListener('click', () => {
    const postId = state.lightboxPostId;
    closeImageLightbox();
    openComments(postId);
  });
}

function toggleFollow(targetUid, targetUsername){
  if(!state.currentUser){ switchView('viewAuth'); return; }
  if(targetUid === state.currentUser.uid) return;
  const followId = `${state.currentUser.uid}_${targetUid}`;
  const ref = db.collection('follows').doc(followId);
  const wasFollowing = state.followingSet.has(targetUid);

  // Optimistic instant update — button text/count change immediately, corrected if write fails.
  if(wasFollowing) state.followingSet.delete(targetUid); else state.followingSet.add(targetUid);
  renderFeed();
  renderProfileView();

  if(wasFollowing){
    ref.delete().catch(e => { state.followingSet.add(targetUid); renderFeed(); renderProfileView(); showToast('Masla: ' + (e.code||'')); });
  } else {
    ref.set({ follower: state.currentUser.uid, following: targetUid, createdAt: firebase.firestore.FieldValue.serverTimestamp() })
      .catch(e => { state.followingSet.delete(targetUid); renderFeed(); renderProfileView(); showToast('Masla: ' + (e.code||'')); });
  }
}

async function toggleLike(postId){
  if(!state.currentUser){ switchView('viewAuth'); return; }
  haptic();
  const uid = state.currentUser.uid;
  const likeId = `${postId}_${uid}`;
  const likeRef = db.collection('likes').doc(likeId);
  const postRef = db.collection('posts').doc(postId);

  // Optimistic instant update: change our local membership + cached count together,
  // then repaint from that single source of truth. Because syncPostCardDOM always
  // *recomputes* from current state (rather than nudging a running total with a
  // +1/-1 delta), it stays correct even if the posts listener and the likes
  // listener each fire again afterwards — that double-listener race, combined
  // with delta-based counting, was what caused the heart/count to glitch and need
  // an extra click to "take".
  const wasLiked = state.myLikedPostIds.has(postId);
  if(wasLiked) state.myLikedPostIds.delete(postId); else state.myLikedPostIds.add(postId);
  updatePostLikeCountCache(postId, wasLiked ? -1 : 1);
  syncPostCardDOM(postId);

  try{
    await db.runTransaction(async (tx) => {
      const likeSnap = await tx.get(likeRef);
      if(likeSnap.exists){
        tx.delete(likeRef);
        tx.update(postRef, { likesCount: firebase.firestore.FieldValue.increment(-1) });
      } else {
        tx.set(likeRef, { postId, uid, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        tx.update(postRef, { likesCount: firebase.firestore.FieldValue.increment(1) });
      }
    });
    // Success: the likes/posts listeners will confirm this shortly via syncPostCardDOM,
    // which is a harmless no-op since our optimistic state already matches.
  } catch(e){
    // Revert optimistic update.
    if(wasLiked) state.myLikedPostIds.add(postId); else state.myLikedPostIds.delete(postId);
    updatePostLikeCountCache(postId, wasLiked ? 1 : -1);
    syncPostCardDOM(postId);
    showToast('Like nahi ho saka: ' + (e.code || e.message || 'kuch masla'));
  }
}

// Repaints every on-screen copy of a post's like/comment UI (feed card, profile
// card, image-grid tile) purely from current state — never from a delta — so it
// can be called as many times, in any order, from any listener, without drifting.
function syncPostCardDOM(postId){
  const p = state.posts.find(x => x.id === postId) || (state.profilePosts||[]).find(x => x.id === postId);
  const liked = state.myLikedPostIds.has(postId);
  const likesCount = p ? (p.likesCount || 0) : 0;
  const commentsCount = p ? (p.commentsCount || 0) : 0;

  document.querySelectorAll(`[data-action="like"][data-id="${postId}"]`).forEach(btn => {
    btn.classList.toggle('liked', liked);
    const iconSpan = btn.querySelector('span:first-child');
    const cntSpan = btn.querySelector('.cnt');
    if(iconSpan) iconSpan.textContent = liked ? '❤️' : '🤍';
    if(cntSpan) cntSpan.textContent = likesCount;
  });
  document.querySelectorAll(`[data-action="comment"][data-id="${postId}"] .cnt`).forEach(el => {
    el.textContent = commentsCount;
  });
  document.querySelectorAll(`.grid-tile[data-id="${postId}"] .gt-stats`).forEach(el => {
    el.textContent = `${liked ? '❤️' : '🤍'} ${likesCount} · 💬 ${commentsCount}`;
  });
  if(state.lightboxPostId === postId) syncLightboxUI();
}

function updatePostLikeCountCache(postId, delta){
  if(delta === 0) return;
  [state.posts, state.profilePosts].forEach(arr => {
    const p = (arr||[]).find(x => x.id === postId);
    if(p) p.likesCount = Math.max(0, (p.likesCount||0) + delta);
  });
}

function bindFeedUI(){
  document.querySelectorAll('.ftab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.feedMode = tab.dataset.mode;
      renderFeed();
    });
  });
}

let picPostDataUrl = null;
let picPostFocusX = 50, picPostFocusY = 50;

function bindComposeSheet(){
  document.getElementById('fabAdd').addEventListener('click', openComposeSheet);
  document.getElementById('btnCancelPost').addEventListener('click', closeComposeSheet);
  document.getElementById('btnCancelPost2').addEventListener('click', closeComposeSheet);
  document.getElementById('btnGoLogin').addEventListener('click', () => { closeComposeSheet(); switchView('viewAuth'); });

  document.querySelectorAll('.ctype-btn').forEach(btn => {
    btn.addEventListener('click', () => showComposeBlock(btn.dataset.ctype));
  });

  document.getElementById('picPostPreview').addEventListener('click', () => document.getElementById('picPostInput').click());
  document.getElementById('picPostInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const errEl = document.getElementById('picPostError');
    e.target.value = '';
    if(!file) return;
    if(!file.type.startsWith('image/')){ errEl.textContent = 'Sirf image file allowed hai.'; return; }
    if(file.size > 10*1024*1024){ errEl.textContent = 'Image 10MB se choti honi chahiye.'; return; }
    errEl.textContent = '';
    openPostImageCropTool(file, async (focusX, focusY) => {
      document.getElementById('picPostPreview').innerHTML = `<div class="mini-spinner"></div>`;
      try{
        // Full image, not cropped — only resized/compressed to stay well under
        // Firestore's 1MB doc limit. Opening the post later shows this in full.
        picPostDataUrl = await compressImageToDataURL(file, 1280, 0.8);
        picPostFocusX = focusX; picPostFocusY = focusY;
        document.getElementById('picPostPreview').innerHTML = `<img src="${picPostDataUrl}" style="object-position:${focusX}% ${focusY}%">`;
      } catch(err){
        errEl.textContent = 'Image process nahi ho saki, dobara try karein.';
        document.getElementById('picPostPreview').innerHTML = `📷<span>Gallery se Picture Chunein</span>`;
      }
    });
  });

  document.getElementById('btnSubmitPost').addEventListener('click', async () => {
    if(!state.currentUser) return;
    const box = document.getElementById('postText');
    const text = box.value.trim();
    const errEl = document.getElementById('postError');
    const btn = document.getElementById('btnSubmitPost');
    errEl.textContent = '';
    if(!text) return;
    if(containsBadWords(text)){ errEl.textContent = 'Ye post nazeba zaban ki wajah se block ho gayi hai.'; await applyWarning(); return; }
    setBtnLoading(btn, true);
    try{
      await db.collection('posts').add({
        uid: state.currentUser.uid, username: state.profile?.username || 'User',
        nickname: state.profile?.nickname || '', photoURL: state.profile?.photoURL || '',
        authorTier: state.profile?.verifiedTier || 0,
        text, type: 'text', hashtags: extractHashtags(text),
        likesCount: 0, commentsCount: 0, createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      box.value = '';
      closeComposeSheet();
      showToast('Post ho gaya ✓');
    } catch(e){ errEl.textContent = 'Post nahi ho saki: ' + (e.code || e.message); }
    setBtnLoading(btn, false);
  });

  document.getElementById('btnSubmitPicPost').addEventListener('click', async () => {
    if(!state.currentUser) return;
    const errEl = document.getElementById('picPostError');
    const btn = document.getElementById('btnSubmitPicPost');
    errEl.textContent = '';
    if(!picPostDataUrl){ errEl.textContent = 'Pehle ek picture select karein.'; return; }
    const title = document.getElementById('picPostTitle').value.trim();
    const desc = document.getElementById('picPostDesc').value.trim();
    const madeForKids = document.getElementById('picPostKids').checked;
    if(containsBadWords(title) || containsBadWords(desc)){ errEl.textContent = 'Nazeba zaban allowed nahi hai.'; await applyWarning(); return; }
    setBtnLoading(btn, true);
    try{
      await db.collection('posts').add({
        uid: state.currentUser.uid, username: state.profile?.username || 'User',
        nickname: state.profile?.nickname || '', photoURL: state.profile?.photoURL || '',
        authorTier: state.profile?.verifiedTier || 0,
        text: desc, title, imageURL: picPostDataUrl,
        imageFocusX: picPostFocusX, imageFocusY: picPostFocusY,
        madeForKids, type: 'image',
        hashtags: extractHashtags(desc + ' ' + title),
        likesCount: 0, commentsCount: 0, createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      closeComposeSheet();
      showToast('Picture post ho gayi ✓');
    } catch(e){
      const tooBig = (e.message||'').toLowerCase().includes('longer than') || e.code === 'invalid-argument';
      errEl.textContent = tooBig ? 'Image bohot bari hai, chhoti/kam quality wali picture try karein.' : ('Post nahi ho saki: ' + (e.code || e.message));
    }
    setBtnLoading(btn, false);
  });
}

function showComposeBlock(type){
  document.querySelectorAll('.ctype-btn').forEach(b => b.classList.toggle('active', b.dataset.ctype === type));
  document.getElementById('composeTextBlock').classList.toggle('hidden', type !== 'text');
  document.getElementById('composeImageBlock').classList.toggle('hidden', type !== 'image');
  document.getElementById('composeVideoBlock').classList.toggle('hidden', type !== 'video');
}

function openComposeSheet(){
  const sheet = document.getElementById('composeSheet');
  sheet.classList.remove('hidden');
  const isIn = !!state.currentUser;
  document.getElementById('composeLoggedIn').style.display = isIn ? 'block' : 'none';
  document.getElementById('composeLoggedOut').style.display = isIn ? 'none' : 'block';
  showComposeBlock('text');
}
function closeComposeSheet(){
  document.getElementById('composeSheet').classList.add('hidden');
  document.getElementById('postError').textContent = '';
  document.getElementById('picPostError').textContent = '';
  document.getElementById('postText').value = '';
  picPostDataUrl = null;
  picPostFocusX = 50; picPostFocusY = 50;
  document.getElementById('picPostPreview').innerHTML = `📷<span>Gallery se Picture Chunein</span>`;
  document.getElementById('picPostTitle').value = '';
  document.getElementById('picPostDesc').value = '';
  document.getElementById('picPostKids').checked = false;
}

/* ---------------- Comments (with like + reply) ---------------- */

function openComments(postId){
  state.openPostId = postId;
  state.replyingTo = null;
  document.getElementById('replyingToBar').classList.add('hidden');
  const sheet = document.getElementById('commentsSheet');
  sheet.classList.remove('hidden');
  const isIn = !!state.currentUser;
  document.getElementById('commentComposeLoggedIn').style.display = isIn ? 'flex' : 'none';
  document.getElementById('commentComposeLoggedOut').style.display = isIn ? 'none' : 'block';
  document.getElementById('commentsList').innerHTML = `<div class="skeleton-row"></div><div class="skeleton-row"></div>`;
  if(unsubComments) unsubComments();
  unsubComments = db.collection('posts').doc(postId).collection('comments').orderBy('createdAt','asc')
    .onSnapshot(snap => { renderComments(snap.docs.map(d => ({ id:d.id, ...d.data() }))); },
    (e) => { document.getElementById('commentsList').innerHTML = `<div class="note-box">Comments load nahi ho sake: ${e.code || e.message}.</div>`; });
}
function closeComments(){
  document.getElementById('commentsSheet').classList.add('hidden');
  if(unsubComments){ unsubComments(); unsubComments = null; }
  state.openPostId = null;
  state.currentComments = null;
}
function renderComments(comments){
  state.currentComments = comments;
  const el = document.getElementById('commentsList');
  const blocked = state.blockedSet;
  const visible = comments.filter(c => !blocked.has(c.uid));
  if(visible.length === 0){ el.innerHTML = `<div class="note-box">Abhi koi comment nahi. Pehla comment karein!</div>`; return; }
  const top = visible.filter(c => !c.parentId);
  const repliesOf = (id) => visible.filter(c => c.parentId === id);

  const rowHtml = (c, isReply) => {
    const displayName = safeDisplayName(c.nickname || c.username);
    const initial = displayName.charAt(0).toUpperCase();
    const avatarHtml = c.photoURL ? `<img src="${c.photoURL}">` : initial;
    const isLiked = state.myLikedCommentIds.has(c.id);
    return `<div class="comment-row ${isReply?'comment-reply':''}">
      <div class="comment-avatar clickable" data-uid="${c.uid}">${avatarHtml}</div>
      <div style="flex:1;">
        <div class="comment-uname clickable" data-uid="${c.uid}">${escapeHtml(displayName)}${verifiedBadgeHtml(c.username, c.authorTier)}</div>
        <div class="comment-text">${escapeHtml(c.text)}</div>
        <div class="comment-time">${timeAgo(c.createdAt)}</div>
        <div class="comment-row-actions">
          <button class="${isLiked?'liked':''}" data-action="clike" data-id="${c.id}"><span class="clike-icon">${isLiked?'❤️':'🤍'}</span> <span class="cnt">${c.likesCount||0}</span></button>
          <button data-action="creply" data-id="${c.id}" data-name="${escapeHtml(displayName)}">Reply</button>
        </div>
      </div>
    </div>`;
  };

  // Flatten: replies-to-replies are grouped visually under the original top-level comment.
  el.innerHTML = top.map(c => rowHtml(c,false) + repliesOf(c.id).map(r => rowHtml(r,true)).join('')).join('');
  el.scrollTop = el.scrollHeight;
  el.querySelectorAll('.clickable[data-uid]').forEach(elm => elm.addEventListener('click', () => { closeComments(); openProfile(elm.dataset.uid); }));
  el.querySelectorAll('[data-action="clike"]').forEach(btn => btn.addEventListener('click', () => toggleCommentLike(btn.dataset.id)));
  el.querySelectorAll('[data-action="creply"]').forEach(btn => btn.addEventListener('click', () => {
    if(!state.currentUser){ switchView('viewAuth'); return; }
    const commentId = btn.dataset.id;
    const target = (state.currentComments || []).find(c => c.id === commentId);
    // If replying to a reply, attach the new reply to the ROOT comment so it isn't orphaned/hidden.
    const rootId = target && target.parentId ? target.parentId : commentId;
    state.replyingTo = rootId;
    document.getElementById('replyingToName').textContent = btn.dataset.name;
    document.getElementById('replyingToBar').classList.remove('hidden');
    document.getElementById('commentInput').focus();
  }));
}

async function toggleCommentLike(commentId){
  if(!state.currentUser){ switchView('viewAuth'); return; }
  if(!state.openPostId) return;
  const uid = state.currentUser.uid;
  const likeId = `${commentId}_${uid}`;
  const likeRef = db.collection('commentLikes').doc(likeId);
  const commentRef = db.collection('posts').doc(state.openPostId).collection('comments').doc(commentId);

  const wasLiked = state.myLikedCommentIds.has(commentId);
  if(wasLiked) state.myLikedCommentIds.delete(commentId); else state.myLikedCommentIds.add(commentId);
  updateCommentLikeCountCache(commentId, wasLiked ? -1 : 1);
  syncCommentRowDOM(commentId);

  try{
    await db.runTransaction(async (tx) => {
      const likeSnap = await tx.get(likeRef);
      if(likeSnap.exists){
        tx.delete(likeRef);
        tx.update(commentRef, { likesCount: firebase.firestore.FieldValue.increment(-1) });
      } else {
        tx.set(likeRef, { commentId, uid, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        tx.update(commentRef, { likesCount: firebase.firestore.FieldValue.increment(1) });
      }
    });
  } catch(e){
    if(wasLiked) state.myLikedCommentIds.add(commentId); else state.myLikedCommentIds.delete(commentId);
    updateCommentLikeCountCache(commentId, wasLiked ? 1 : -1);
    syncCommentRowDOM(commentId);
    showToast('Masla: ' + (e.code||''));
  }
}
function updateCommentLikeCountCache(commentId, delta){
  if(delta === 0 || !state.currentComments) return;
  const c = state.currentComments.find(x => x.id === commentId);
  if(c) c.likesCount = Math.max(0, (c.likesCount||0) + delta);
}
function syncCommentRowDOM(commentId){
  const c = (state.currentComments||[]).find(x => x.id === commentId);
  const liked = state.myLikedCommentIds.has(commentId);
  const count = c ? (c.likesCount||0) : 0;
  document.querySelectorAll(`[data-action="clike"][data-id="${commentId}"]`).forEach(btn => {
    btn.classList.toggle('liked', liked);
    const iconSpan = btn.querySelector('.clike-icon');
    const cntSpan = btn.querySelector('.cnt');
    if(iconSpan) iconSpan.textContent = liked ? '❤️' : '🤍';
    if(cntSpan) cntSpan.textContent = count;
  });
}

function bindCommentsSheet(){
  document.getElementById('btnCloseComments').addEventListener('click', closeComments);
  document.getElementById('btnCommentLogin').addEventListener('click', () => { closeComments(); switchView('viewAuth'); });
  document.getElementById('btnCancelReply').addEventListener('click', () => { state.replyingTo = null; document.getElementById('replyingToBar').classList.add('hidden'); });

  document.getElementById('btnSendComment').addEventListener('click', async () => {
    if(!state.currentUser || !state.openPostId) return;
    const input = document.getElementById('commentInput');
    const text = input.value.trim();
    if(!text) return;
    if(containsBadWords(text)){ input.value = ''; await applyWarning(); return; }
    const postId = state.openPostId;
    const parentId = state.replyingTo;
    input.value = '';
    state.replyingTo = null;
    document.getElementById('replyingToBar').classList.add('hidden');
    try{
      await db.collection('posts').doc(postId).collection('comments').add({
        uid: state.currentUser.uid, username: state.profile?.username || 'User',
        nickname: state.profile?.nickname || '', photoURL: state.profile?.photoURL || '',
        authorTier: state.profile?.verifiedTier || 0,
        text, parentId: parentId || null, likesCount: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      await db.collection('posts').doc(postId).update({ commentsCount: firebase.firestore.FieldValue.increment(1) });
    } catch(e){ showToast('Comment nahi ho saka: ' + (e.code || e.message)); }
  });
  document.getElementById('commentInput').addEventListener('keydown', (e) => { if(e.key === 'Enter') document.getElementById('btnSendComment').click(); });
}

/* ---------------- Profile ---------------- */

function openProfile(uid){
  state.viewingUid = (state.currentUser && uid === state.currentUser.uid) ? null : uid;
  switchView('viewProfile');
}

// renderProfileView() can be triggered several times in quick succession (nav
// clicks, auth state changing, the followers/likes listeners all call it) and
// renderProfileCard() below is async — it awaits several Firestore reads before
// painting. Without a guard, an *older* call that happens to resolve *later*
// (e.g. one that started before the profile had even finished loading) can
// overwrite a newer, correct render with stale/blank data. That race was why
// your own profile sometimes showed no name/photo until you reloaded it via
// the Leaderboard. profileRenderToken makes only the most recent call allowed
// to paint the DOM.
let profileRenderToken = 0;

function renderProfileView(){
  const el = document.getElementById('profileContent');
  const viewingUid = state.viewingUid;
  const myToken = ++profileRenderToken;
  if(!viewingUid){
    if(!state.currentUser){
      el.innerHTML = `<div class="empty-cta" style="margin-top:24px;"><div class="ic">👤</div><p>Profile dekhne ke liye login karein</p><button class="btn" id="btnProfileLogin">Login / Sign Up</button></div>`;
      document.getElementById('btnProfileLogin').addEventListener('click', () => switchView('viewAuth'));
      return;
    }
    if(!state.profile){
      // Profile doc hasn't loaded yet — show a skeleton instead of a blank/empty
      // card; handleAuthChange() will call renderProfileView() again once it has.
      el.innerHTML = `<div class="skeleton-row" style="margin-top:20px;"></div><div class="skeleton-row"></div>`;
      return;
    }
    const p = state.profile || {};
    renderProfileCard(el, { uid: state.currentUser.uid, ...p, username: p.username || 'User' }, true, myToken);
  } else {
    el.innerHTML = `<div class="profile-loading"><div class="profile-loading-spinner"></div><div class="profile-loading-text">Profile load ho raha hai...</div></div>`;
    db.collection('users').doc(viewingUid).get().then(doc => {
      if(myToken !== profileRenderToken) return; // a newer render superseded this one
      if(!doc.exists){ el.innerHTML = `<div class="note-box">User nahi mila.</div>`; return; }
      renderProfileCard(el, { uid: viewingUid, ...doc.data() }, false, myToken);
    }).catch((e) => { if(myToken === profileRenderToken) el.innerHTML = `<div class="note-box">Profile load nahi ho saka: ${e.code||e.message}</div>`; });
  }
}

async function renderProfileCard(el, p, isOwn, token){
  const displayName = safeDisplayName(p.nickname || p.username);
  const initial = displayName.charAt(0).toUpperCase();
  const avatarHtml = p.photoURL ? `<img src="${p.photoURL}">` : initial;
  const isBlocked = state.blockedSet.has(p.uid);

  let followersSnap, followingSnap, postsSnap, namazLog, dailyLog;
  try{
    [followersSnap, followingSnap, postsSnap, namazLog, dailyLog] = await Promise.all([
      db.collection('follows').where('following','==', p.uid).get(),
      db.collection('follows').where('follower','==', p.uid).get(),
      db.collection('posts').where('uid','==', p.uid).get(),
      fetchUserNamazLog(p.uid),
      fetchUserDailyLog(p.uid),
    ]);
  } catch(e){ if(token === profileRenderToken) el.innerHTML = `<div class="note-box" style="margin-top:20px;">Profile load nahi ho saka: ${e.code||e.message}</div>`; return; }
  if(token !== profileRenderToken) return; // a newer render started while these reads were in flight — discard this one

  const followers = followersSnap.size, following = followingSnap.size;
  const isFollowing = state.followingSet.has(p.uid);
  const canSeeFollowing = isOwn || !p.hideFollowing;
  const canSeeNamazStreak = isOwn || !p.hideNamazStreak;
  const canSeeDailyStreak = isOwn || !p.hideDailyStreak;
  const namaz = namazStreakFromLog(namazLog);
  const daily = dailyStreakFromLog(dailyLog);

  const rawPosts = postsSnap.docs.map(d => state.posts.find(sp => sp.id === d.id) || { id:d.id, ...d.data() })
    .sort((a,b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  const totalLikes = rawPosts.reduce((sum, post) => sum + (post.likesCount || 0), 0);

  state.profilePosts = rawPosts;
  state.profilePostsOwn = isOwn;

  el.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${avatarHtml}</div>
      <div class="faida-title" style="display:inline-flex; align-items:center; justify-content:center; gap:5px;">${escapeHtml(displayName)}${verifiedBadgeHtml(p.username, p.verifiedTier)}</div>
      <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">@${escapeHtml(p.username && !p.username.includes('@') ? p.username : 'user')}</div>
      ${p.bio ? `<div class="profile-bio">${escapeHtml(p.bio)}</div>` : ''}
      <div class="profile-stats">
        <div class="profile-stat"><div class="num">${canSeeNamazStreak ? namaz.streak : '🔒'}</div><div class="lbl">🔥 Namaz</div></div>
        <div class="profile-stat"><div class="num">${canSeeDailyStreak ? daily.streak : '🔒'}</div><div class="lbl">📿 Daily</div></div>
        <div class="profile-stat"><div class="num">${rawPosts.length}</div><div class="lbl">Posts</div></div>
        <div class="profile-stat"><div class="num">${followers}</div><div class="lbl">Followers</div></div>
        <div class="profile-stat"><div class="num">${canSeeFollowing ? following : '🔒'}</div><div class="lbl">Following</div></div>
        <div class="profile-stat"><div class="num">${totalLikes}</div><div class="lbl">❤️ Likes</div></div>
      </div>
      ${isOwn ? `
        <div class="profile-actions">
          <button class="btn secondary" id="btnEditProfile" style="flex:1;">Edit Profile</button>
          <button class="btn secondary" id="btnOpenSettings" style="flex:1;">Settings</button>
        </div>
        <button class="btn secondary" id="btnLogout" style="margin-top:10px;">Logout</button>
      ` : (state.currentUser ? `
        <div class="profile-actions">
          <button class="btn profile-follow-btn" id="btnProfileFollow" style="flex:1;">${isFollowing?'Following':'Follow'}</button>
          <button class="btn secondary" id="btnProfileBlock" style="flex:1;">${isBlocked?'Unblock':'Block'}</button>
        </div>` : '')}
    </div>
    ${isOwn ? buildRecapCardHtml(namazLog) : ''}
    <div class="section-label">Posts</div>
    <div id="profilePostsList" class="profile-posts-list"></div>
  `;

  if(isOwn){
    document.getElementById('btnLogout').addEventListener('click', () => auth.signOut());
    document.getElementById('btnEditProfile').addEventListener('click', openEditProfileSheet);
    document.getElementById('btnOpenSettings').addEventListener('click', openSettingsSheet);
  } else if(state.currentUser){
    document.getElementById('btnProfileFollow').addEventListener('click', () => toggleFollow(p.uid, p.username));
    document.getElementById('btnProfileBlock').addEventListener('click', () => toggleBlockUser(p.uid, displayName));
  }
  renderProfilePostsBlock();
}

function renderProfilePostsBlock(){
  const container = document.getElementById('profilePostsList');
  if(!container) return;
  const posts = state.profilePosts || [];
  if(posts.length === 0){
    if(state.profilePostsOwn){
      container.innerHTML = `<div class="empty-cta"><div class="ic">✍️</div><p>Abhi tak koi post nahi. Apni pehli post banayein!</p><button class="btn" id="btnCreateFirstPost">Create Your First Post</button></div>`;
      document.getElementById('btnCreateFirstPost').addEventListener('click', () => { switchView('viewFeed'); openComposeSheet(); });
    } else {
      container.innerHTML = `<div class="note-box">Abhi tak koi post nahi.</div>`;
    }
    return;
  }
  container.innerHTML = posts.map(buildPostCardHtml).join('');
  bindPostCardEvents(container);
}

function refreshProfilePostsIfVisible(){
  if(document.getElementById('profilePostsList')){
    state.profilePosts = (state.profilePosts || []).map(p => state.posts.find(sp => sp.id === p.id) || p);
    renderProfilePostsBlock();
  }
}

function buildRecapCardHtml(namazLog){
  const today = new Date();
  const weekAgo = new Date(today); weekAgo.setDate(weekAgo.getDate()-6);
  const monthAgo = new Date(today); monthAgo.setDate(monthAgo.getDate()-29);

  let weekComplete = 0, weekTotal = 0, monthComplete = 0, monthTotal = 0;
  for(let d = new Date(monthAgo); d <= today; d.setDate(d.getDate()+1)){
    const key = dateKey(d);
    const entry = namazLog[key];
    const cnt = dayPrayerCount(entry);
    monthTotal += cnt;
    if(isDayComplete(entry)) monthComplete++;
    if(d >= weekAgo){ weekTotal += cnt; if(isDayComplete(entry)) weekComplete++; }
  }
  const weekPct = Math.round((weekComplete/7)*100);
  const monthPct = Math.round((monthComplete/30)*100);

  return `
    <div class="section-label">Recap</div>
    <div class="recap-card">
      <div class="recap-row"><span>Is hafte mukammal din</span><span class="r-val">${weekComplete} / 7 (${weekPct}%)</span></div>
      <div class="recap-row"><span>Is hafte total Namaz</span><span class="r-val">${weekTotal} / 35</span></div>
      <div class="recap-row"><span>Is mahine mukammal din</span><span class="r-val">${monthComplete} / 30 (${monthPct}%)</span></div>
      <div class="recap-row"><span>Is mahine total Namaz</span><span class="r-val">${monthTotal} / 150</span></div>
    </div>`;
}

function bindProfileUI(){
  document.getElementById('profileBtn').addEventListener('click', () => {
    state.viewingUid = null;
    switchView(state.currentUser ? 'viewProfile' : 'viewAuth');
  });
}

/* ---------------- Edit Profile ---------------- */

let editPicDataUrl = null;

function openEditProfileSheet(){
  const p = state.profile || {};
  document.getElementById('editNickname').value = p.nickname || '';
  document.getElementById('editBio').value = p.bio || '';
  const preview = document.getElementById('editPicPreview');
  preview.innerHTML = p.photoURL ? `<img src="${p.photoURL}">` : '➕';
  editPicDataUrl = null;
  document.getElementById('editProfileError').textContent = '';
  document.getElementById('editProfileSheet').classList.remove('hidden');
}
function bindEditProfileSheet(){
  document.getElementById('btnCancelEditProfile').addEventListener('click', () => document.getElementById('editProfileSheet').classList.add('hidden'));
  document.getElementById('editPicPreview').addEventListener('click', () => document.getElementById('editPicInput').click());
  document.getElementById('btnEditPickPic').addEventListener('click', () => document.getElementById('editPicInput').click());
  document.getElementById('editPicInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const errEl = document.getElementById('editProfileError');
    if(!file) return;
    if(!file.type.startsWith('image/')){ errEl.textContent = 'Sirf image file allowed hai.'; return; }
    if(file.size > 8*1024*1024){ errEl.textContent = 'Image 8MB se choti honi chahiye.'; return; }
    errEl.textContent = '';
    openCropTool(file, (dataUrl) => {
      editPicDataUrl = dataUrl;
      document.getElementById('editPicPreview').innerHTML = `<img src="${dataUrl}">`;
    });
    e.target.value = '';
  });

  document.getElementById('btnSaveProfile').addEventListener('click', async () => {
    if(!state.currentUser) return;
    const nickname = document.getElementById('editNickname').value.trim();
    const bio = document.getElementById('editBio').value.trim();
    const errEl = document.getElementById('editProfileError');
    errEl.textContent = '';
    if(!nickname){ errEl.textContent = 'Nickname likhein.'; return; }
    if(containsBadWords(nickname) || containsBadWords(bio)){ errEl.textContent = 'Nazeba zaban allowed nahi hai.'; await applyWarning(); return; }

    const btn = document.getElementById('btnSaveProfile');
    setBtnLoading(btn, true);
    const update = { nickname, nicknameLower: nickname.toLowerCase(), bio };
    if(editPicDataUrl){ update.photoURL = editPicDataUrl; }
    try{
      await db.collection('users').doc(state.currentUser.uid).set(update, { merge:true });
      state.profile = { ...(state.profile||{}), ...update };
      document.getElementById('editProfileSheet').classList.add('hidden');
      renderProfileView();
      updateAuthUI();
      showToast('Profile update ho gayi ✓');
    } catch(e){ errEl.textContent = 'Save nahi ho saka: ' + (e.code || e.message) + (e.code === 'invalid-argument' || (e.message||'').includes('longer than') ? ' — Picture bohot bari hai, chhoti image try karein.' : ''); }
    setBtnLoading(btn, false);
  });
}

/* ---------------- Settings + Blocked Users ---------------- */

function openSettingsSheet(){
  document.getElementById('toggleHideFollowing').classList.toggle('on', !!(state.profile && state.profile.hideFollowing));
  document.getElementById('blockedCountText').textContent = `${state.blockedSet.size} users blocked`;
  document.getElementById('settingsSheet').classList.remove('hidden');
}
function bindSettingsSheet(){
  document.getElementById('btnCloseSettings').addEventListener('click', () => document.getElementById('settingsSheet').classList.add('hidden'));

  const themeToggle = document.getElementById('toggleLightTheme');
  themeToggle.classList.toggle('on', localStorage.getItem('theme') === 'light');
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    themeToggle.classList.toggle('on', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  const TEXT_SIZES = [0.9, 1, 1.1, 1.2, 1.3];
  let sizeIdx = TEXT_SIZES.indexOf(parseFloat(localStorage.getItem('textScale')) || 1);
  if(sizeIdx === -1) sizeIdx = 1;
  const applyTextSize = () => {
    document.getElementById('app').style.zoom = TEXT_SIZES[sizeIdx];
    localStorage.setItem('textScale', TEXT_SIZES[sizeIdx]);
  };
  document.getElementById('btnTextSizeUp').addEventListener('click', () => {
    if(sizeIdx < TEXT_SIZES.length-1) sizeIdx++;
    applyTextSize();
  });
  document.getElementById('btnTextSizeDown').addEventListener('click', () => {
    if(sizeIdx > 0) sizeIdx--;
    applyTextSize();
  });

  document.getElementById('toggleHideFollowing').addEventListener('click', async (e) => {
    if(!state.currentUser) return;
    const on = !e.currentTarget.classList.contains('on');
    e.currentTarget.classList.toggle('on', on);
    try{ await db.collection('users').doc(state.currentUser.uid).set({ hideFollowing: on }, { merge:true }); state.profile = { ...(state.profile||{}), hideFollowing: on }; }
    catch(e){ showToast('Save nahi ho saka: ' + (e.code||'')); }
  });
  document.getElementById('btnManageBlocked').addEventListener('click', openBlockedSheet);
  document.getElementById('btnCloseBlocked').addEventListener('click', () => document.getElementById('blockedSheet').classList.add('hidden'));
  document.getElementById('btnResetApp').addEventListener('click', () => {
    if(!state.currentUser){ showToast('Reset karne ke liye pehle login karein.'); return; }
    document.getElementById('resetConfirmError').textContent = '';
    document.getElementById('settingsSheet').classList.add('hidden');
    document.getElementById('resetConfirmSheet').classList.remove('hidden');
  });
  document.getElementById('btnCancelReset').addEventListener('click', () => document.getElementById('resetConfirmSheet').classList.add('hidden'));
  document.getElementById('btnConfirmReset').addEventListener('click', performFullAppReset);
}

// Applies the person's saved theme + text-size preference immediately on load,
// before first paint settles, so there's no flash of the wrong theme/size.
function applySavedDisplayPrefs(){
  if(localStorage.getItem('theme') === 'light') document.body.classList.add('light-theme');
  const savedScale = parseFloat(localStorage.getItem('textScale'));
  if(savedScale && savedScale !== 1){
    const app = document.getElementById('app');
    if(app) app.style.zoom = savedScale;
  }
  try{
    const cached = JSON.parse(localStorage.getItem('cachedHeaderAvatar') || 'null');
    if(cached){
      const btn = document.getElementById('profileBtn');
      if(btn){
        btn.innerHTML = cached.photoURL
          ? `<img src="${cached.photoURL}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`
          : '';
        if(!cached.photoURL) btn.textContent = cached.initial || '👤';
      }
    }
  } catch(e){}
}

// Deletes everything the signed-in user owns (posts, likes, comment-likes, their
// own comments, follow relationships they created, and their prayer/dhikr streak
// history), resets their profile counters, then clears all local caches/storage
// and reloads the app so it starts completely fresh — this is the "reset app /
// delete all my old data" option.
async function performFullAppReset(){
  const btn = document.getElementById('btnConfirmReset');
  const errEl = document.getElementById('resetConfirmError');
  errEl.textContent = '';
  setBtnLoading(btn, true);
  try{
    const uid = state.currentUser.uid;

    const deleteAllDocs = async (query) => {
      const snap = await query.get();
      await Promise.all(snap.docs.map(d => d.ref.delete().catch(() => {})));
    };

    await deleteAllDocs(db.collection('posts').where('uid','==', uid));
    await deleteAllDocs(db.collection('likes').where('uid','==', uid));
    await deleteAllDocs(db.collection('commentLikes').where('uid','==', uid));
    await deleteAllDocs(db.collection('follows').where('follower','==', uid));
    try{ await deleteAllDocs(db.collectionGroup('comments').where('uid','==', uid)); }
    catch(e){ /* collection-group query may need an index — skip, not critical */ }

    await db.collection('prayerLogs').doc(uid).set({ log:{} }).catch(() => {});
    await db.collection('dhikrLogs').doc(uid).set({ daily:{} }).catch(() => {});
    await db.collection('users').doc(uid).set({
      namazStreak: 0, namazBest: 0, dailyStreak: 0, dailyBest: 0, warnings: 0, banned: false, verifiedTier: 0,
    }, { merge:true }).catch(() => {});

    try{ localStorage.clear(); } catch(e){}
    if('caches' in window){ const keys = await caches.keys(); await Promise.all(keys.map(k => caches.delete(k))); }
    if('serviceWorker' in navigator){
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
    }

    await auth.signOut().catch(() => {});
    showToast('App reset ho gaya — dobara load ho raha hai...');
    setTimeout(() => window.location.reload(), 1200);
  } catch(e){
    errEl.textContent = 'Reset nahi ho saka: ' + (e.code || e.message || 'kuch masla ho gaya, dobara try karein.');
    setBtnLoading(btn, false);
  }
}

function openStreakPrivacySheet(){
  if(!state.currentUser){ switchView('viewAuth'); return; }
  document.getElementById('toggleHideNamazStreak').classList.toggle('on', !!(state.profile && state.profile.hideNamazStreak));
  document.getElementById('toggleHideDailyStreak').classList.toggle('on', !!(state.profile && state.profile.hideDailyStreak));
  document.getElementById('toggleHideTotalNamaz').classList.toggle('on', !!(state.profile && state.profile.hideTotalNamaz));
  document.getElementById('streakPrivacySheet').classList.remove('hidden');
}
function bindStreakPrivacySheet(){
  document.getElementById('btnOpenStreakPrivacy').addEventListener('click', openStreakPrivacySheet);
  document.getElementById('btnCloseStreakPrivacy').addEventListener('click', () => document.getElementById('streakPrivacySheet').classList.add('hidden'));
  const bindToggle = (id, field) => {
    document.getElementById(id).addEventListener('click', async (e) => {
      if(!state.currentUser) return;
      const on = !e.currentTarget.classList.contains('on');
      e.currentTarget.classList.toggle('on', on);
      try{ await db.collection('users').doc(state.currentUser.uid).set({ [field]: on }, { merge:true }); state.profile = { ...(state.profile||{}), [field]: on }; }
      catch(err){ showToast('Save nahi ho saka: ' + (err.code||'')); }
    });
  };
  bindToggle('toggleHideNamazStreak', 'hideNamazStreak');
  bindToggle('toggleHideDailyStreak', 'hideDailyStreak');
  bindToggle('toggleHideTotalNamaz', 'hideTotalNamaz');
}

async function toggleBlockUser(targetUid, targetName){
  if(!state.currentUser) return;
  const isBlocked = state.blockedSet.has(targetUid);
  try{
    if(isBlocked){
      await db.collection('users').doc(state.currentUser.uid).update({ blockedUsers: firebase.firestore.FieldValue.arrayRemove(targetUid) });
      state.blockedSet.delete(targetUid);
      showToast(`${targetName} unblock ho gaya`);
    } else {
      await db.collection('users').doc(state.currentUser.uid).update({ blockedUsers: firebase.firestore.FieldValue.arrayUnion(targetUid) });
      state.blockedSet.add(targetUid);
      showToast(`${targetName} block ho gaya`);
    }
    renderFeed();
    renderProfileView();
  } catch(e){ showToast('Masla: ' + (e.code||'')); }
}

function openBlockedSheet(){
  const list = document.getElementById('blockedList');
  if(state.blockedSet.size === 0){ list.innerHTML = `<div class="note-box">Koi bhi block nahi hai.</div>`; document.getElementById('blockedSheet').classList.remove('hidden'); return; }
  list.innerHTML = `<div class="skeleton-row"></div>`;
  document.getElementById('blockedSheet').classList.remove('hidden');
  Promise.all([...state.blockedSet].map(uid => db.collection('users').doc(uid).get().then(d => ({ uid, ...d.data() })).catch(() => ({ uid, username:'User' }))))
    .then(users => {
      list.innerHTML = users.map(u => {
        const name = safeDisplayName(u.nickname || u.username);
        const initial = name.charAt(0).toUpperCase();
        const avatar = u.photoURL ? `<img src="${u.photoURL}">` : initial;
        return `<div class="blocked-row"><div class="lb-avatar">${avatar}</div><div>${escapeHtml(name)}</div><button class="unblock-btn" data-uid="${u.uid}" data-name="${escapeHtml(name)}">Unblock</button></div>`;
      }).join('');
      list.querySelectorAll('.unblock-btn').forEach(btn => btn.addEventListener('click', () => { toggleBlockUser(btn.dataset.uid, btn.dataset.name); openBlockedSheet(); }));
    });
}

/* ---------------- Search ---------------- */

let searchDebounce = null;
function openSearchSheet(){
  document.getElementById('searchSheet').classList.remove('hidden');
  document.getElementById('searchResults').innerHTML = '';
  document.getElementById('searchInput').focus();
}
function bindSearchUI(){
  document.getElementById('btnOpenSearch').addEventListener('click', openSearchSheet);
  document.getElementById('btnCloseSearch').addEventListener('click', () => document.getElementById('searchSheet').classList.add('hidden'));
  document.getElementById('searchInput').addEventListener('input', (e) => {
    clearTimeout(searchDebounce);
    const term = e.target.value.trim();
    if(!term){ document.getElementById('searchResults').innerHTML = ''; return; }
    searchDebounce = setTimeout(() => runSearch(term), 400);
  });
}
async function runSearch(term){
  const results = document.getElementById('searchResults');
  results.innerHTML = `<div class="skeleton-row"></div>`;
  try{
    if(term.startsWith('#')){
      const tag = term.slice(1).toLowerCase();
      const snap = await db.collection('posts').where('hashtags','array-contains', tag).limit(20).get();
      const posts = snap.docs.map(d => ({ id:d.id, ...d.data() })).filter(p => !state.blockedSet.has(p.uid));
      if(posts.length === 0){ results.innerHTML = `<div class="note-box">#${tag} ke liye koi post nahi mili.</div>`; return; }
      results.innerHTML = `<div class="section-label" style="margin-top:10px;">Posts</div>` + posts.map(buildPostCardHtml).join('');
      bindPostCardEvents(results);
      return;
    }

    const lower = term.toLowerCase();
    let users = [];
    try{
      const [byUsername, byNickname] = await Promise.all([
        db.collection('users').orderBy('usernameLower').startAt(lower).endAt(lower + '\uf8ff').limit(8).get().catch(() => ({ docs:[] })),
        db.collection('users').orderBy('nicknameLower').startAt(lower).endAt(lower + '\uf8ff').limit(8).get().catch(() => ({ docs:[] })),
      ]);
      const seen = new Set();
      [...byUsername.docs, ...byNickname.docs].forEach(d => {
        if(seen.has(d.id)) return;
        seen.add(d.id);
        users.push({ uid:d.id, ...d.data() });
      });
    } catch(e){ console.error('prefix search failed', e); }

    if(users.length === 0){
      // Fallback: substring match across recent users — also catches older accounts
      // created before usernameLower/nicknameLower were being saved.
      try{
        const snap = await db.collection('users').limit(80).get();
        const seen = new Set();
        snap.docs.forEach(d => {
          const u = { uid:d.id, ...d.data() };
          const hay = `${u.username||''} ${u.nickname||''}`.toLowerCase();
          if(hay.includes(lower) && !seen.has(u.uid)){ seen.add(u.uid); users.push(u); }
        });
      } catch(e){ /* non-fatal — post search below can still work */ }
    }

    users = users.filter(u => !state.blockedSet.has(u.uid));
    const topUsers = users.slice(0, 5);

    // Post content match: any word appearing anywhere in a post's text,
    // title, or description (not just hashtags/usernames) surfaces the post.
    let matchingPosts = [];
    try{
      // Prefer the already-loaded, live-synced feed cache; only hit Firestore
      // directly if that cache looks too small to be a fair search.
      let pool = state.posts && state.posts.length >= 40 ? state.posts
        : (await db.collection('posts').orderBy('createdAt','desc').limit(150).get()).docs.map(d => ({ id:d.id, ...d.data() }));
      matchingPosts = pool.filter(p => {
        if(state.blockedSet.has(p.uid)) return false;
        const hay = `${p.text||''} ${p.title||''}`.toLowerCase();
        return hay.includes(lower);
      }).slice(0, 15);
    } catch(e){ console.error('post text search failed', e); }

    if(topUsers.length === 0 && matchingPosts.length === 0){
      results.innerHTML = `<div class="note-box">Koi result nahi mila.</div>`;
      return;
    }

    let html = '';
    if(topUsers.length){
      html += `<div class="section-label" style="margin-top:10px;">Users</div>` + topUsers.map(u => {
        const name = safeDisplayName(u.nickname || u.username);
        const initial = name.charAt(0).toUpperCase();
        const avatar = u.photoURL ? `<img src="${u.photoURL}">` : initial;
        const isOwnResult = state.currentUser && u.uid === state.currentUser.uid;
        const isFollowingResult = state.followingSet.has(u.uid);
        return `<div class="search-user-row" data-uid="${u.uid}"><div class="search-user-avatar">${avatar}</div><div style="flex:1;"><div style="display:inline-flex; align-items:center; gap:4px;">${escapeHtml(name)}${verifiedBadgeHtml(u.username, u.verifiedTier)}</div><div style="font-size:11px; color:var(--text-muted);">@${escapeHtml(u.username && !u.username.includes('@') ? u.username : 'user')}</div></div>${isOwnResult ? '' : `<button class="follow-btn ${isFollowingResult?'following':''}" data-uid="${u.uid}" data-uname="${escapeHtml(u.username||'User')}">${isFollowingResult?'Following':'Follow'}</button>`}</div>`;
      }).join('');
    }
    if(matchingPosts.length){
      html += `<div class="section-label" style="margin-top:10px;">Posts</div>` + matchingPosts.map(buildPostCardHtml).join('');
    }

    results.innerHTML = html;
    results.querySelectorAll('.search-user-row').forEach(row => row.addEventListener('click', (e) => {
      if(e.target.closest('.follow-btn')) return;
      document.getElementById('searchSheet').classList.add('hidden'); openProfile(row.dataset.uid);
    }));
    results.querySelectorAll('.search-user-row .follow-btn').forEach(btn => btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFollow(btn.dataset.uid, btn.dataset.uname);
      btn.classList.toggle('following');
      btn.textContent = btn.classList.contains('following') ? 'Following' : 'Follow';
    }));
    bindPostCardEvents(results);

    const shownIds = new Set(matchingPosts.map(p => p.id));
    const uids = topUsers.map(u => u.uid).slice(0, 10);
    if(uids.length > 0){
      const postsSnap = await db.collection('posts').where('uid','in', uids).limit(15).get();
      const posts = postsSnap.docs.map(d => ({ id:d.id, ...d.data() }))
        .filter(p => !shownIds.has(p.id))
        .sort((a,b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
      if(posts.length > 0){
        const postsHtml = `<div class="section-label" style="margin-top:14px;">In matlab users ki posts</div>` + posts.map(buildPostCardHtml).join('');
        results.insertAdjacentHTML('beforeend', postsHtml);
        bindPostCardEvents(results);
      }
    }
  } catch(e){ results.innerHTML = `<div class="note-box">Search nahi ho saka: ${e.code || e.message}</div>`; }
}

/* ---------------- Report / Block / Delete post menu ---------------- */

function openPostMenu(postId, postUid){
  state.postMenuTarget = { postId, postUid };
  const isOwn = state.currentUser && postUid === state.currentUser.uid;
  document.getElementById('menuDeletePost').style.display = isOwn ? 'block' : 'none';
  document.getElementById('menuBlockUser').style.display = isOwn ? 'none' : 'block';
  document.getElementById('postMenuSheet').classList.remove('hidden');
}
function bindModerationUI(){
  document.getElementById('btnClosePostMenu').addEventListener('click', () => document.getElementById('postMenuSheet').classList.add('hidden'));
  document.getElementById('menuReportPost').addEventListener('click', () => {
    if(!state.currentUser){ document.getElementById('postMenuSheet').classList.add('hidden'); switchView('viewAuth'); return; }
    document.getElementById('postMenuSheet').classList.add('hidden');
    document.getElementById('reportSheet').classList.remove('hidden');
  });
  document.getElementById('menuBlockUser').addEventListener('click', () => {
    if(!state.currentUser){ document.getElementById('postMenuSheet').classList.add('hidden'); switchView('viewAuth'); return; }
    const { postUid } = state.postMenuTarget || {};
    document.getElementById('postMenuSheet').classList.add('hidden');
    if(postUid) toggleBlockUser(postUid, 'User');
  });
  document.getElementById('menuDeletePost').addEventListener('click', async () => {
    const { postId } = state.postMenuTarget || {};
    document.getElementById('postMenuSheet').classList.add('hidden');
    if(!postId) return;
    if(!confirm('Ye post delete karein? Ye wapas nahi aayegi.')) return;
    try{
      await db.collection('posts').doc(postId).delete();
      showToast('Post delete ho gayi');
    } catch(e){ showToast('Delete nahi ho saka: ' + (e.code||'')); }
  });

  document.getElementById('btnCloseReport').addEventListener('click', () => document.getElementById('reportSheet').classList.add('hidden'));
  document.querySelectorAll('.report-reason-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const { postId, postUid } = state.postMenuTarget || {};
      document.getElementById('reportSheet').classList.add('hidden');
      if(!postId || !state.currentUser) return;
      try{
        await db.collection('reports').add({
          postId, reportedUid: postUid, reporterUid: state.currentUser.uid,
          reason: btn.dataset.reason, createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        showToast('Report bhej diya gaya, shukriya 🙏');
      } catch(e){ showToast('Report nahi ho saka: ' + (e.code||'')); }
    });
  });
}

/* ---------------- Auth UI state ---------------- */

function updateAuthUI(){
  const isIn = !!state.currentUser;
  document.getElementById('guestNote').style.display = isIn ? 'none' : 'block';
  const displayName = state.profile?.nickname || state.profile?.username || 'U';
  const btn = document.getElementById('profileBtn');
  if(isIn && state.profile?.photoURL) btn.innerHTML = `<img src="${state.profile.photoURL}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
  else btn.textContent = isIn ? displayName.charAt(0).toUpperCase() : '👤';
}

/* ---------------- Nav ---------------- */

function switchView(id){
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-btn[data-view="${id}"]`);
  if(navBtn) navBtn.classList.add('active');
  document.getElementById(id).classList.add('active');
  if(id === 'viewProfile') renderProfileView();
}
function bindNav(){
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => { state.viewingUid = null; switchView(btn.dataset.view); });
  });
}

/* ---------------- Qibla Compass ---------------- */

const KAABA_LAT = 21.4225, KAABA_LNG = 39.8262;
let qiblaWatchId = null, qiblaBearing = null;

function computeQiblaBearing(lat, lng){
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const phiK = toRad(KAABA_LAT), lambdaK = toRad(KAABA_LNG);
  const phi = toRad(lat), lambda = toRad(lng);
  const psi = Math.atan2(
    Math.sin(lambdaK - lambda),
    Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda)
  );
  return (toDeg(psi) + 360) % 360;
}

function bindQibla(){
  document.getElementById('btnOpenQibla').addEventListener('click', () => switchView('viewQibla'));
  document.getElementById('btnCloseQibla').addEventListener('click', () => switchView('viewHome'));
  document.getElementById('btnEnableQibla').addEventListener('click', startQibla);
}

function startQibla(){
  const statusEl = document.getElementById('qiblaStatus');
  statusEl.textContent = 'Location dhoondi ja rahi hai...';
  if(!navigator.geolocation){ statusEl.textContent = 'Is device par location support nahi hai.'; return; }

  navigator.geolocation.getCurrentPosition(async (pos) => {
    qiblaBearing = computeQiblaBearing(pos.coords.latitude, pos.coords.longitude);
    statusEl.textContent = `Qibla ka bearing: ${Math.round(qiblaBearing)}° (North se). Compass permission maangi ja rahi hai...`;

    const needle = document.getElementById('qiblaNeedle');
    let gotOrientationEvent = false;

    const handleOrientation = (e) => {
      let heading = null;
      if(typeof e.webkitCompassHeading === 'number') heading = e.webkitCompassHeading; // iOS Safari
      else if(e.alpha != null) heading = 360 - e.alpha; // Android (absolute or relative)
      if(heading == null) return;
      gotOrientationEvent = true;
      const rotation = (qiblaBearing - heading + 360) % 360;
      needle.style.transform = `rotate(${rotation}deg)`;
      statusEl.textContent = `Kaaba is taraf hai — phone ghumate rahein jab tak icon seedha upar na ho.`;
    };

    // Some Android phones/browsers report deviceorientation support (the
    // property exists) but never actually fire an event — no magnetometer,
    // permission silently blocked, etc. Without this timeout the screen was
    // stuck forever on "compass permission maangi ja rahi hai" with no
    // explanation. After a few seconds with nothing received, fall back to
    // showing the numeric bearing so the person can still use it manually.
    const fallbackTimer = setTimeout(() => {
      if(!gotOrientationEvent){
        statusEl.textContent = `Is device par compass sensor response nahi de raha. Qibla bearing: ${Math.round(qiblaBearing)}° (North se, clockwise ghumayein — phone ka apna compass app North dikhata hai, wahan se match karein).`;
      }
    }, 3000);

    if(typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function'){
      try{
        const perm = await DeviceOrientationEvent.requestPermission();
        if(perm === 'granted') window.addEventListener('deviceorientation', handleOrientation);
        else { clearTimeout(fallbackTimer); statusEl.textContent = `Compass permission nahi mili. Qibla bearing: ${Math.round(qiblaBearing)}° (North se, clockwise).`; }
      } catch(e){
        clearTimeout(fallbackTimer);
        statusEl.textContent = `Compass is device par kaam nahi kar raha. Qibla bearing: ${Math.round(qiblaBearing)}° (North se, clockwise).`;
      }
    } else if('ondeviceorientationabsolute' in window){
      window.addEventListener('deviceorientationabsolute', handleOrientation);
    } else if('ondeviceorientation' in window){
      window.addEventListener('deviceorientation', handleOrientation);
    } else {
      clearTimeout(fallbackTimer);
      statusEl.textContent = `Is device/browser mein compass sensor nahi mila. Qibla bearing: ${Math.round(qiblaBearing)}° (North se, clockwise ghumayein).`;
    }
  }, () => {
    statusEl.textContent = 'Location allow nahi hui — Qibla direction ke liye location zaroori hai.';
  });
}

/* ---------------- Invite Friends ---------------- */

function bindInviteFriends(){
  const url = () => window.location.href.split('?')[0].split('#')[0];
  const text = 'Pak Raho app try karein — Namaz timings, duaein, streak tracker aur Islamic community, sab ek jagah!';

  document.getElementById('btnInviteFriends').addEventListener('click', () => {
    document.getElementById('inviteSheet').classList.remove('hidden');
  });
  document.getElementById('btnCloseInvite').addEventListener('click', () => {
    document.getElementById('inviteSheet').classList.add('hidden');
  });
  document.getElementById('btnInviteShare').addEventListener('click', async () => {
    if(navigator.share){
      try{ await navigator.share({ title:'Pak Raho', text, url:url() }); } catch(e){}
    } else {
      try{
        await navigator.clipboard.writeText(`${text} ${url()}`);
        showToast('Link copy ho gaya — kisi ko bhi bhej dein 📨');
      } catch(e){ showToast(url()); }
    }
  });
  document.getElementById('btnInviteWhatsapp').addEventListener('click', () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url())}`, '_blank');
  });
  document.getElementById('btnInviteQR').addEventListener('click', () => {
    document.getElementById('inviteSheet').classList.add('hidden');
    document.getElementById('qrCodeImg').src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url())}`;
    document.getElementById('qrSheet').classList.remove('hidden');
  });
  document.getElementById('btnCloseQR').addEventListener('click', () => {
    document.getElementById('qrSheet').classList.add('hidden');
  });
}

/* ---------------- Install Prompt (PWA) ---------------- */

let deferredInstallPrompt = null;
function bindInstallPrompt(){
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if(!localStorage.getItem('installDismissed')) document.getElementById('installBanner').classList.remove('hidden');
  });
  document.getElementById('btnInstallApp').addEventListener('click', async () => {
    if(!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById('installBanner').classList.add('hidden');
  });
  document.getElementById('btnDismissInstall').addEventListener('click', () => {
    document.getElementById('installBanner').classList.add('hidden');
    localStorage.setItem('installDismissed', '1');
  });
  window.addEventListener('appinstalled', () => {
    document.getElementById('installBanner').classList.add('hidden');
  });

  // Manual trigger from Settings — covers the case where the person dismissed
  // the auto-banner once (which then never shows again) or wants to install
  // from a device/browser that doesn't show the banner automatically.
  document.getElementById('btnInstallFromSettings').addEventListener('click', async () => {
    if(window.matchMedia('(display-mode: standalone)').matches || navigator.standalone){
      showToast('App pehle se hi install hai — isi installed icon se open karein, Chrome se nahi.');
      return;
    }
    if(deferredInstallPrompt){
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      return;
    }
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if(isIOS){
      showToast('iPhone/iPad par: neeche Share ⬆️ button dabayein → "Add to Home Screen" chunein.');
    } else {
      showToast('Chrome ke ⋮ menu se "Install app" ya "Add to Home screen" chunein — sirf bookmark na banayein.');
    }
  });
}
