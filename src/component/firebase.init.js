// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfynPBaiB7_d6ZKhYPFFRgGgTMu9eYBX0",
  authDomain: "login-signup-e0cc2.firebaseapp.com",
  projectId: "login-signup-e0cc2",
  storageBucket: "login-signup-e0cc2.appspot.com",
  messagingSenderId: "741745342614",
  appId: "1:741745342614:web:a26c214732ae99ed95aab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 