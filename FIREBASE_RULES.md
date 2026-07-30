# Firebase Security Rules — Pak Raho (COMPLETE — copy-paste ready)

⚠️ **Update:** App ab images (profile picture, post pictures, streak-share cards) Firebase Storage ki bajaye **seedha Firestore mein (compressed) save karta hai** — is liye **Storage set up karna / Blaze plan lena ab zaroori nahi hai** app chalne ke liye. Sirf neeche wali **Firestore Rules** hi lagana kaafi hai. Storage Rules wala hissa sirf tab kaam aayega jab future mein Storage add karwana ho — abhi ke liye skip kar sakte hain.

Dono blocks (Firestore + Storage) neeche diye gaye hain, lekin **abhi sirf Firestore Rules lagana zaroori hai**. Firebase Console → apna project (deen-64ba0) → **Firestore Database → Rules** tab mein pehla block paste karein, **Publish** karein.

## 1) Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isSignedIn() {
      return request.auth != null;
    }
    function isOwner(uid) {
      return isSignedIn() && request.auth.uid == uid;
    }
    function isAdmin() {
      return isSignedIn() && request.auth.token.email == "sufynexsystems@gmail.com";
    }

    match /users/{uid} {
      allow read: if true;
      allow write: if isOwner(uid);
    }

    match /usernames/{name} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
      allow update, delete: if false;
    }

    match /posts/{postId} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
      allow update: if isSignedIn() &&
        (resource.data.uid == request.auth.uid ||
         request.resource.data.diff(resource.data).affectedKeys().hasOnly(['likesCount','commentsCount']));
      allow delete: if isSignedIn() && resource.data.uid == request.auth.uid;

      match /comments/{commentId} {
        allow read: if true;
        allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
        allow update: if isSignedIn() &&
          (resource.data.uid == request.auth.uid ||
           request.resource.data.diff(resource.data).affectedKeys().hasOnly(['likesCount']));
        allow delete: if isSignedIn() && resource.data.uid == request.auth.uid;
      }
    }

    match /likes/{likeId} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
      allow delete: if isSignedIn() && resource.data.uid == request.auth.uid;
      allow update: if false;
    }

    match /commentLikes/{likeId} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
      allow delete: if isSignedIn() && resource.data.uid == request.auth.uid;
      allow update: if false;
    }

    match /follows/{followId} {
      allow read: if true;
      allow create: if isSignedIn() && request.resource.data.follower == request.auth.uid;
      allow delete: if isSignedIn() && resource.data.follower == request.auth.uid;
      allow update: if false;
    }

    match /prayerLogs/{uid} {
      allow read: if true;
      allow write: if isOwner(uid);
    }

    match /dhikrLogs/{uid} {
      allow read: if true;
      allow write: if isOwner(uid);
    }

    match /dailyContent/{date} {
      allow read: if true;
      allow write: if isAdmin();
    }

    match /reports/{reportId} {
      allow read: if isAdmin();
      allow create: if isSignedIn() && request.resource.data.reporterUid == request.auth.uid;
      allow update, delete: if isAdmin();
    }
  }
}
```

## 2) Storage Rules (profile pictures + streak-share images)

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /profile_pics/{uid}.jpg {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
    match /post_images/{fileName} {
      allow read: if true;
      allow write: if request.auth != null
                   && fileName.matches(request.auth.uid + '_.*')
                   && request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}
```

## 3) Optional but recommended — CORS for Storage (so profile picture shows up inside the Streak Share image)

Streak-share images are drawn using the HTML Canvas, and canvas needs the browser's permission (CORS) to read your profile picture from Firebase Storage. Without this, the share card still works but falls back to showing your initial letter instead of your photo. To enable it fully:

1. Install Google Cloud SDK (`gcloud`) once: https://cloud.google.com/sdk/docs/install
2. Create a file `cors.json` with:
```json
[{"origin": ["*"], "method": ["GET"], "maxAgeSeconds": 3600}]
```
3. Run: `gsutil cors set cors.json gs://deen-64ba0.firebasestorage.app`

This is a one-time setup step and isn't required for the app to work — only for the photo to appear inside the generated share image.

## Zaroori Notes

- `hideFollowing`, `hideNamazStreak`, `hideDailyStreak`, `warnings`, `banned`, `namazStreak`, `namazBest`, `dailyStreak`, `dailyBest`, `totalNamaz`, `blockedUsers`, `nicknameLower` — ye sab `users/{uid}` doc ke andar fields hain, alag rules nahi chahiye.
- **Leaderboard** `users` collection par `orderBy('namazBest')` / `orderBy('dailyBest')` query karta hai — koi extra index nahi chahiye (single-field sort auto-indexed hota hai).
- **Report/Block**: report Firestore mein save hota hai (`reports` collection); admin dashboard abhi app mein nahi hai (future addition). Block sirf aapke apne `users/{uid}.blockedUsers` array mein client-side filter hai.
- **Image content-moderation**: ye rules sirf type/size/ownership check karte hain, AI se "gandi image" detect nahi karte — uske liye alag Cloud Function + Vision API chahiye (Blaze plan).
