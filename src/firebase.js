import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_eq5ZVy684hzrrAOKSUlJTW4bzM2WNkI",
  authDomain: "sveltejs-crud-42242.firebaseapp.com",
  projectId: "sveltejs-crud-42242",
  storageBucket: "sveltejs-crud-42242.appspot.com",
  messagingSenderId: "385351516102",
  appId: "1:385351516102:web:20315859c110a1cca1fcc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);