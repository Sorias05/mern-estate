// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-82894.firebaseapp.com",
  projectId: "mern-estate-82894",
  storageBucket: "mern-estate-82894.appspot.com",
  messagingSenderId: "182088400868",
  appId: "1:182088400868:web:5cfd99774635cb9e7e91f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);