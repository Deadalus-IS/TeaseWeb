import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAeOOK-Eo4larA2PjFNPbK1fcbJ7MjQ5HQ",
  authDomain: "pass-41255.firebaseapp.com",
  projectId: "pass-41255",
  storageBucket: "pass-41255.appspot.com",
  messagingSenderId: "547495753227",
  appId: "1:547495753227:web:05e894ee26bb6b19ac390e",
  measurementId: "G-183MJ7TVPR",
};

let fapp = initializeApp(firebaseConfig);

if (getApps.length == 0) {
  fapp = initializeApp(firebaseConfig);
}

export default fapp;
