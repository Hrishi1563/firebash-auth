// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlL8DHxIAHp7iY4LyRacGh9lDEAnH57Rg",
  authDomain: "fir-auth-92fb7.firebaseapp.com",
  projectId: "fir-auth-92fb7",
  storageBucket: "fir-auth-92fb7.appspot.com",
  messagingSenderId: "107579869151",
  appId: "1:107579869151:web:d05025de535f35c26e266a",
};

// const app = initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
