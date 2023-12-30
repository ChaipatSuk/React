// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-TQWu-RIPXESCIgWF4zZ6OVOloydjty8",
  authDomain: "shiawase-7eef4.firebaseapp.com",
  projectId: "shiawase-7eef4",
  storageBucket: "shiawase-7eef4.appspot.com",
  messagingSenderId: "1039533902809",
  appId: "1:1039533902809:web:38f6a11926cf248d2ca7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
export {database}
export const imagedatabase = getStorage(app)