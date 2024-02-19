// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv2UUSM0VEf4gvqWORO4PgDLhnvZu6-IY",
  authDomain: "fontfriend-97c44.firebaseapp.com",
  projectId: "fontfriend-97c44",
  storageBucket: "fontfriend-97c44.appspot.com",
  messagingSenderId: "253449218885",
  appId: "1:253449218885:web:0ebf3d4031ad6f956dec2c"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();
