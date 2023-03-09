// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrpWeXVhvuANpNg7ho2536OmiHSCaV31A",
  authDomain: "e-commerce-3cf83.firebaseapp.com",
  projectId: "e-commerce-3cf83",
  storageBucket: "e-commerce-3cf83.appspot.com",
  messagingSenderId: "35682364546",
  appId: "1:35682364546:web:e42d960801b16943ed589b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;