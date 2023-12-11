import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClbnyjHoiL-QUP2IkhuyMK8_V2n2FuiHs",
  authDomain: "comision-50105-react.firebaseapp.com",
  projectId: "comision-50105-react",
  storageBucket: "comision-50105-react.appspot.com",
  messagingSenderId: "834837902808",
  appId: "1:834837902808:web:5a2f0eee418e0e35fcaead",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
