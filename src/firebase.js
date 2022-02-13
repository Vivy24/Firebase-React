// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getFireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIMkBb_xYgCE48e62ULT4myst7hLBUv1M",
  authDomain: "react-fb-48284.firebaseapp.com",
  projectId: "react-fb-48284",
  storageBucket: "react-fb-48284.appspot.com",
  messagingSenderId: "489221778059",
  appId: "1:489221778059:web:bd42a00c2e53f66621c28e",
  measurementId: "G-S07NKMWV09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();
