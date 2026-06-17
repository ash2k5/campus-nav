# uc campuspathfinder

a walking-navigation web app for the university of cincinnati campus. search buildings,
get pedestrian routes computed on real openstreetmap walkways, and (as an admin) draw
custom shortcuts that fold into the routing graph live.

https://uc-campus-path-finder-beryl.vercel.app

built with next.js, react, typescript, maplibre, and firebase (auth + firestore), on the
shared `@ash2k5/cinematic-ds` design system (light + dark).

## run locally

needs node 20+ and a firebase project (the free spark plan is fine) with email/password
auth and a cloud firestore database enabled.

```bash
npm install
cp .env.example .env.local   # fill in your firebase web config
npm run dev
```

the `NEXT_PUBLIC_FIREBASE_*` values come from firebase console > project settings > your
apps. they're public web config, not secrets; firestore rules control access. open
http://localhost:3000 and sign in with an account you create in the app.

admin controls (drawing shortcuts) need the firestore rules deployed
(`firebase deploy --only firestore:rules`) and your user id added as a document at
`admins/{your-uid}` in firestore.

## tests

```bash
npm test            # unit + component tests
npm run lint
npm run test:rules  # firestore rules against the emulator (needs java + firebase cli)
npm run test:e2e    # playwright against a production build (needs java + firebase cli)
```
