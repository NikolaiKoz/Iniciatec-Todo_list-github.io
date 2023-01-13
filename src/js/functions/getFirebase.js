// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebase = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2Ae388Y75nOTDZ_gAnhZSTl5HxyCg1NY",
    authDomain: "iniciatec-todo-list.firebaseapp.com",
    projectId: "iniciatec-todo-list",
    storageBucket: "iniciatec-todo-list.appspot.com",
    messagingSenderId: "621227733351",
    appId: "1:621227733351:web:60801f931708e068b4ffc2",
    measurementId: "G-JKN34CMFFX",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
   const db = getFirestore(app);

};
