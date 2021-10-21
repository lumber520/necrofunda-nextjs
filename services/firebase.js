// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyD5g2Ja5HIRdy05dlE_CYDoTI6xUWquU7A",
    authDomain: "necro-funda.firebaseapp.com",
    databaseURL: "https://necro-funda-default-rtdb.firebaseio.com",
    projectId: "necro-funda",
    storageBucket: "necro-funda.appspot.com",
    messagingSenderId: "553041485035",
    appId: "1:553041485035:web:35ffb1af99134d15eb72ae"
};

// Initialize Firebase
const app = initializeApp(config);