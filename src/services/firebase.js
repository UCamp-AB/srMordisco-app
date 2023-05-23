// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi2DVyHzXulKTYIHIJ_-GT2udqD7TlUN0",
    authDomain: "srmordisco-2023.firebaseapp.com",
    projectId: "srmordisco-2023",
    storageBucket: "srmordisco-2023.appspot.com",
    messagingSenderId: "323106273219",
    appId: "1:323106273219:web:64bddbbdfff9d9267a2f76"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();