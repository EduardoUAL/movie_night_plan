import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7c65cGgP4yxkMRrE5Q5iXW8u590zzhmY",
  authDomain: "movie-night-plan.firebaseapp.com",
  projectId: "movie-night-plan",
  storageBucket: "movie-night-plan.appspot.com",
  messagingSenderId: "380653216813",
  appId: "1:380653216813:web:29a0d430c788edfdcd84a4",
  measurementId: "G-7EFFYPJGTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
