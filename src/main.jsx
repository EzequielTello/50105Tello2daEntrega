import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-TT45ZA_2g4tfgGURmFxkaHj-QOEFV_k",
  authDomain: "bluestore-43f2e.firebaseapp.com",
  projectId: "bluestore-43f2e",
  storageBucket: "bluestore-43f2e.appspot.com",
  messagingSenderId: "299361404898",
  appId: "1:299361404898:web:4d2eb8e0ab8a40126a1bbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
