// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxsgpVIHrolBhLlypDuIaDY7G2vQw696Y",
  authDomain: "vite-contact-17e31.firebaseapp.com",
  projectId: "vite-contact-17e31",
  storageBucket: "vite-contact-17e31.firebasestorage.app",
  messagingSenderId: "1018398125236",
  appId: "1:1018398125236:web:1ac913bcfe5fb385777be1",
  measurementId: "G-QNGNT1C0MX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);