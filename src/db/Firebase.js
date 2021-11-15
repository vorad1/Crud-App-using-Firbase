// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4yf_D0GIfG6PQmtqhDk4T6IcjuWzmqzM",
  authDomain: "authentication-9a558.firebaseapp.com",
  projectId: "authentication-9a558",
  storageBucket: "authentication-9a558.appspot.com",
  messagingSenderId: "50710064530",
  appId: "1:50710064530:web:b246b32011ac29e854654b",
  measurementId: "G-BTV0NYGG3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
