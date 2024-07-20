import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkwfInf5TnDtV2rLQdrxyyBNxP1mEvDBI",
  authDomain: "react-chat-cd266.firebaseapp.com",
  projectId: "react-chat-cd266",
  storageBucket: "react-chat-cd266.appspot.com",
  messagingSenderId: "157753188681",
  appId: "1:157753188681:web:5e7c0bb04fe32a95ccfa98",
  measurementId: "G-VQDLQ1BNCE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
