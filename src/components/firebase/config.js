// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7D3rxhmfg9m2s6BW_yJ22qcPyXR96eNk",
  authDomain: "mockup-rj-ecommerce.firebaseapp.com",
  projectId: "mockup-rj-ecommerce",
  storageBucket: "mockup-rj-ecommerce.appspot.com",
  messagingSenderId: "1036701596702",
  appId: "1:1036701596702:web:b54b0004ac5034121b820f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)