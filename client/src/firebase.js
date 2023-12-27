// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-755f5.firebaseapp.com",
  projectId: "real-estate-755f5",
  storageBucket: "real-estate-755f5.appspot.com",
  messagingSenderId: "763927094070",
  appId: "1:763927094070:web:8c1938ac5bd2f4c18c0997"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);