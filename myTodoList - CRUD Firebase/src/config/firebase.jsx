// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVtF9fmxKv9RqC6MAQ1BPpahhqBkGWDz4",
  authDomain: "myreactapp1234.firebaseapp.com",
  projectId: "myreactapp1234",
  storageBucket: "myreactapp1234.firebasestorage.app",
  messagingSenderId: "629570682780",
  appId: "1:629570682780:web:3a3b766e320588bb4ad259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };