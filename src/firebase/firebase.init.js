// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAHDTbXkQUuppAL0ZtLGIl4P2pLJIPtm0",
  authDomain: "first-firebase-basic.firebaseapp.com",
  projectId: "first-firebase-basic",
  storageBucket: "first-firebase-basic.appspot.com",
  messagingSenderId: "433594348591",
  appId: "1:433594348591:web:4c6e8c25021b86d47902da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;