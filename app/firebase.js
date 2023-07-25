// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM-zL9r_mEwuDyxzyuvXcX5b55x-qky8M",
  authDomain: "chatgpt-clone-6dffa.firebaseapp.com",
  projectId: "chatgpt-clone-6dffa",
  storageBucket: "chatgpt-clone-6dffa.appspot.com",
  messagingSenderId: "90829487888",
  appId: "1:90829487888:web:37c084fc5b90fef57aaf95",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const GoogleProvider = new GoogleAuthProvider();

export { db, auth, GoogleProvider };
