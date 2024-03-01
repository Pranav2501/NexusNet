// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ6yor9Ivw6fap_0O_ahh4SxmVLMc4fOA",
    authDomain: "nexusnet-63734.firebaseapp.com",
    databaseURL: "https://nexusnet-63734-default-rtdb.firebaseio.com",
    projectId: "nexusnet-63734",
    storageBucket: "nexusnet-63734.appspot.com",
    messagingSenderId: "945151845366",
    appId: "1:945151845366:web:01524bcb01740bbae21dd7",
    measurementId: "G-33MKL8PT93"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };