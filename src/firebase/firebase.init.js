// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5zRN-61l3_Q8i1q4wS83b3qswCf_SAGA",
  authDomain: "chill-gamer-2f5a6.firebaseapp.com",
  projectId: "chill-gamer-2f5a6",
  storageBucket: "chill-gamer-2f5a6.firebasestorage.app",
  messagingSenderId: "109536016369",
  appId: "1:109536016369:web:7d3b4301b8c9581795b650"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;