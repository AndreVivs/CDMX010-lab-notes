import firebase from "firebase";
// firebase.analytics();
const firebaseConf = {
  apiKey: "AIzaSyB8ERLM0OnXfrs2NPtVksUhGT3SF2ov8lE",
  authDomain: "moosely-day.firebaseapp.com",
  projectId: "moosely-day",
  storageBucket: "moosely-day.appspot.com",
  messagingSenderId: "990686613290",
  appId: "1:990686613290:web:d57762782f8e7dd5435853",
  measurementId: "G-DEBRN2R04R",
};
const fire = firebase.initializeApp(firebaseConf);
export const db = fire.firestore();
// Guardando publicacion en Firebase
