// import firebase from 'firebase';
// import {initializeApp} from 'firebase';
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyALvDq9z7r_tIndXvQ1BojO1CuQOlbcl5o",
    authDomain: "venus-love.firebaseapp.com",
    projectId: "venus-love",
    storageBucket: "venus-love.appspot.com",
    messagingSenderId: "1039491801369",
    appId: "1:1039491801369:web:fe4656b3dc281c0d482588",
    measurementId: "G-H2QS1WTWYD"
  };
  // const firebaseApp = initializeApp(firebaseConfig);

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;