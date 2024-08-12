// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYi5rLmmGzrpTgzUWFhjR0H9WjeOzNnyw",
  authDomain: "chat-app-f9e12.firebaseapp.com",
  projectId: "chat-app-f9e12",
  storageBucket: "chat-app-f9e12.appspot.com",
  messagingSenderId: "1049143762994",
  appId: "1:1049143762994:web:ea47dd220a8071ee931c2b",
  measurementId: "G-JL31QQ65PC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
