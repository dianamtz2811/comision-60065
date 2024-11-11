// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtGHJsXuFU26g-Uwv6lEqL3J_9RMj8750",
    authDomain: "backend-60065-95fdb.firebaseapp.com",
    projectId: "backend-60065-95fdb",
    storageBucket: "backend-60065-95fdb.firebasestorage.app",
    messagingSenderId: "975418164345",
    appId: "1:975418164345:web:31bf1a717dbaeb0846c0a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);