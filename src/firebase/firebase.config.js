// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOLInjo3wHupWbgyzt5LMbJyj5gSSlf0A",
  authDomain: "learning-platform-dbefb.firebaseapp.com",
  projectId: "learning-platform-dbefb",
  storageBucket: "learning-platform-dbefb.appspot.com",
  messagingSenderId: "204619684442",
  appId: "1:204619684442:web:bff43eb40c5179db545663",
  measurementId: "G-GQSJR6DWLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
