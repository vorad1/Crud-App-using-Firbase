// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3Fq13YXBlsaWLVvFmdxEz_HRvjWYVtIw",
  authDomain: "practical-3-3a28a.firebaseapp.com",
  projectId: "practical-3-3a28a",
  storageBucket: "practical-3-3a28a.appspot.com",
  messagingSenderId: "837707451010",
  appId: "1:837707451010:web:f90e49eab511c880d9029b",
  measurementId: "G-S202KNNTW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);