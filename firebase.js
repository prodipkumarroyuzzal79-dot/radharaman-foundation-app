
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDohiPYANaOW_Pm7XeBfRo5Q2ehqLkINNU",
  authDomain: "radharaman-sanatani-foun-5d5cd.firebaseapp.com",
  projectId: "radharaman-sanatani-foun-5d5cd",
  storageBucket: "radharaman-sanatani-foun-5d5cd.firebasestorage.app",
  messagingSenderId: "336112155496",
  appId: "1:336112155496:web:f0fcefe38c44c43fd934dd",
  measurementId: "G-0C1CQZWJTJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
