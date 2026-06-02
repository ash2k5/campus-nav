# UC CampusPathFinder

A walking-navigation web app for the University of Cincinnati campus. Search buildings, get
pedestrian routes computed on real OpenStreetMap walkways, and let admins draw custom shortcut
paths that are folded into the routing graph.

## Prerequisites

- Node.js 18.18 or newer
- A Firebase project (free Spark plan is sufficient) with:
  - Email/Password authentication enabled
  - A Cloud Firestore database

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a Firebase project at https://console.firebase.google.com, then:
   - Enable Authentication with the Email/Password sign-in method.
   - Create a Cloud Firestore database.
   - Open Project settings > General > Your apps and register a Web app to get its config.

3. Copy the env template and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Description |
   |----------|-------------|
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase web API key |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project id |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender id |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app id |
   | `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Analytics measurement id (optional) |

4. Deploy the Firestore security rules (requires the Firebase CLI):

   ```bash
   npx firebase deploy --only firestore:rules
   ```

5. Grant yourself admin so you can draw and delete paths: sign in once through the app to create
   your account, find your user id in the Firebase console under Authentication, then create a
   document at `admins/{your-user-id}` in Firestore (any contents). Any user with a matching
   document in the `admins` collection is treated as an admin.

## Running

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 and sign in with an account you create through the app. Admin controls
appear for accounts listed in the `admins` collection (see setup step 5).

## Production build

```bash
npm run build
npm run start
```
