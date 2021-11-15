import firebase from "firebase/compat";

const settings = { timestampsInSnapshots: true };

const config = {
  //  put your values here
  apiKey: "AIzaSyD3Fq13YXBlsaWLVvFmdxEz_HRvjWYVtIw",
  authDomain: "practical-3-3a28a.firebaseapp.com",
  projectId: "practical-3-3a28a",
  storageBucket: "practical-3-3a28a.appspot.com",
  messagingSenderId: "837707451010",
  appId: "1:837707451010:web:f90e49eab511c880d9029b",
  measurementId: "G-S202KNNTW5",
};

// Initialize Firebase

firebase.initializeApp(config);

// export Firebase so it can be used elsewhere

const FireBase = firebase.initializeApp(config);

export default firebase;
