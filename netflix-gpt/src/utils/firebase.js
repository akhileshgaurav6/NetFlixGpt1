// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAktq0jHdXE1gVA8TZ8WoYlJfCdYyKdFTs",
  authDomain: "netflixgpt-83f1e.firebaseapp.com",
  projectId: "netflixgpt-83f1e",
  storageBucket: "netflixgpt-83f1e.firebasestorage.app",
  messagingSenderId: "1034661499576",
  appId: "1:1034661499576:web:8973f7b55b4f5cbd03da4d",
  measurementId: "G-E0EEBPYK44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();