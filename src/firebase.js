// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIL6uK0OxXNxy8lhfnq8jxEJ44cIh7BGQ",
  authDomain: "shop-a7fcb.firebaseapp.com",
  projectId: "shop-a7fcb",
  storageBucket: "shop-a7fcb.appspot.com",
  messagingSenderId: "812069195046",
  appId: "1:812069195046:web:11cc4e01f030356bf605e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;