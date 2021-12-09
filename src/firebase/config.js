// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtI6NTRTS-z24JaQbinpkjJjwjEXvg-z8",
  authDomain: "flores-babel-rj.firebaseapp.com",
  projectId: "flores-babel-rj",
  storageBucket: "flores-babel-rj.appspot.com",
  messagingSenderId: "1075035214687",
  appId: "1:1075035214687:web:d02325e40c96cd4066dcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);