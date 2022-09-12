import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCApqP49lpPYFh91z4Tzdfa3xti8x0dxjw",
  authDomain: "chatapp-e26ec.firebaseapp.com",
  projectId: "chatapp-e26ec",
  storageBucket: "chatapp-e26ec.appspot.com",
  messagingSenderId: "669947474562",
  appId: "1:669947474562:web:fc1f79cbda75dd9c4c7a9b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();