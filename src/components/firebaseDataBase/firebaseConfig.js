// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCs0dSCzPiqYSdwOeS92D1UEUiNi1eZqGs",
    authDomain: "registrationdb-18d42.firebaseapp.com",
    projectId: "registrationdb-18d42",
    storageBucket: "registrationdb-18d42.appspot.com",
    messagingSenderId: "113114786805",
    appId: "1:113114786805:web:5ca7ba7e39d1c3d55c4ebc",
    measurementId: "G-RTQVGRYQLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
