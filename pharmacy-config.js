// HAE Pharmacy Module — Firebase configuration
// Same Firebase project as every other HAE app (hae-vuma-92fca) —
// one shared Firestore, Storage bucket, and Auth instance across all
// modules. This is the same config already live in Ekhaya Connect and
// every other HAE app; there is nothing module-specific about it.
//
// Separated into its own file per the HAE Architecture Standards —
// for auditability, not because it is a secret. Firebase client config
// is intentionally public-facing; real security comes from Firebase Auth
// and the Firestore security rules (see HAE_Access_Control_Specification_FINAL.md),
// not from hiding this object.
//
// API key is restricted to shakabornman.github.io/* in the Google Cloud
// Console — covers every HAE module hosted under that account without
// needing per-repo changes.
//
// If this module ever needs a server-side secret (e.g. an external API key),
// that belongs in Cloud Functions as a Firebase secret — never in this file.

const firebaseConfig = {
  apiKey:            "AIzaSyBla6UBluNcWVKPSU8U30IuTSubLb7R2Kc",
  authDomain:        "hae-vuma-92fca.firebaseapp.com",
  projectId:         "hae-vuma-92fca",
  storageBucket:     "hae-vuma-92fca.firebasestorage.app",
  messagingSenderId: "1052424261313",
  appId:             "1:1052424261313:web:a4bebe68d6f9ba14fa0e40"
};

export { firebaseConfig };
