// Import Firebase and Firestore using URLs (Firebase ESM build)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT9Es6cS1cmBKLc4VAcq8KmrOJKmSbAt8",
  authDomain: "buyzy-f207f.firebaseapp.com",
  projectId: "buyzy-f207f",
  storageBucket: "buyzy-f207f.appspot.com",
  messagingSenderId: "562796706461",
  appId: "1:562796706461:web:3e401761d089bb4655f274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
