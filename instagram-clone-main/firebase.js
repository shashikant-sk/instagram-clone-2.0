// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React from "react";
const firebaseConfig = {
  apiKey: "AIzaSyB7bE9Y7AjB4-PoZ8un55vRroShvbIfS-s",
  authDomain: "instagram-clone-by-shashikant.firebaseapp.com",
  projectId: "instagram-clone-by-shashikant",
  storageBucket: "instagram-clone-by-shashikant.appspot.com",
  messagingSenderId: "98028871690",
  appId: "1:98028871690:web:6291c7fedfac05b73c7ff3",
  measurementId: "G-Y639SZ3CT2"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(); 
const storage = getStorage();
const auth = getAuth();
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((re) => console.log(re))
    .catch((err) => {
      console.log(err);

    });
};
const useAuth = () => {
  const [currentUser, currentUserSet] = React.useState(null);
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        currentUserSet(user);
      } else {
        currentUserSet(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return currentUser;
}; 
export { app, db, storage, useAuth, auth, signInWithGoogle };

