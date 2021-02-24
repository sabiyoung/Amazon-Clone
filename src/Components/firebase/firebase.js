// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDu8hn5nmG0X883972VFkxGW0eyx0h0xq0",
  authDomain: "clone-7ceaa.firebaseapp.com",
  projectId: "clone-7ceaa",
  storageBucket: "clone-7ceaa.appspot.com",
  messagingSenderId: "1042824121802",
  appId: "1:1042824121802:web:3c358c5b0d432101555333",
  measurementId: "G-XWPHLZXW0H"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};

