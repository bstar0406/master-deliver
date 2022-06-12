import firebase from "firebase/app";
import * as firebaseui from "firebaseui";
import "firebase/auth";
require("firebase/functions");

export const firebaseConfig = {
  apiKey: "AIzaSyABAHlj33fYYHfxDBC6wBJL9hpOLnRWITM",
  authDomain: "boxbee-d6bd6.firebaseapp.com",
  projectId: "boxbee-d6bd6",
  storageBucket: "boxbee-d6bd6.appspot.com",
  messagingSenderId: "997889315718",
  appId: "1:997889315718:web:44761cf65fcb9d39295207",
  measurementId: "G-M2EF452ZZ6",
};

firebase.initializeApp(firebaseConfig);

export const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const auth = firebase.auth();
export const firebaseApp = firebase.app();
export const firebaseFunctions = firebase.functions();
