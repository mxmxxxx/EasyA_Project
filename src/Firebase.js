// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5K3Aw8kqVECd3VBWC-zGxFMT0tXsk1GY",
  authDomain: "unmuted-auth.firebaseapp.com",
  projectId: "unmuted-auth",
  storageBucket: "unmuted-auth.appspot.com",
  messagingSenderId: "652469621905",
  appId: "1:652469621905:web:9c1fccf151cef59fdadb30",
  measurementId: "G-C0ZC4MPNXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);