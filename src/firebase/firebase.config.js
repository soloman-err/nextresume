// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdxTG2zRzJ_hkXO_pjoCNVW9o741omjbQ",
  authDomain: "resumengine-ai.firebaseapp.com",
  projectId: "resumengine-ai",
  storageBucket: "resumengine-ai.appspot.com",
  messagingSenderId: "1041648004050",
  appId: "1:1041648004050:web:8acaf9f487b8bb024af60b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;