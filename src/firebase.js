// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCcgefu_xHIWrzftN33l4t8lHf8BZOtIJo",
  authDomain: "news-app-133c4.firebaseapp.com",
  projectId: "news-app-133c4",
  storageBucket: "news-app-133c4.appspot.com",
  messagingSenderId: "922693862835",
  appId: "1:922693862835:web:793b8d2300e21457dcb7c6",
  measurementId: "G-54MREZ9NTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();

export {app , auth}