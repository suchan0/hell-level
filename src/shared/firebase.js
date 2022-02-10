import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbFLucZOmAu12RFi3oN83gbkk2PWOGT38",
  authDomain: "hell-level.firebaseapp.com",
  projectId: "hell-level",
  storageBucket: "hell-level.appspot.com",
  messagingSenderId: "96176275931",
  appId: "1:96176275931:web:69b2e9c4a88e8a1179e7fe",
  measurementId: "G-WN154QGSXQ"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
export{auth, apiKey, firestore, storage, realtime};