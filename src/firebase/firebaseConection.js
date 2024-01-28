import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCJZqInRuto4Pg3UEWLp_WI_hGcYoiTb4Q",
  authDomain: "movie-night-plan-c63e6.firebaseapp.com",
  projectId: "movie-night-plan-c63e6",
  storageBucket: "movie-night-plan-c63e6.appspot.com",
  messagingSenderId: "910692422723",
  appId: "1:910692422723:web:a4fe4da442e88ee4e3b0f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
