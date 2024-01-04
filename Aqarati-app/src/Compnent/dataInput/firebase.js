// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx822X6dvUFKeSABCAfuUfFVt-ChVUhqk",
  authDomain: "aqar-507e7.firebaseapp.com",
  projectId: "aqar-507e7",
  storageBucket: "aqar-507e7.appspot.com",
  messagingSenderId: "547130026064",
  appId: "1:547130026064:web:de27875525dd19f9704955",
  measurementId: "G-91TEK2RVL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const Auth = getAuth(app);
