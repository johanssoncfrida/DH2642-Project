import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZBdDX4hMXSYqQoGDYqiiOVfWs97Si6rg",
  authDomain: "quizinezz.firebaseapp.com",
  databaseURL: "https://quizinezz.firebaseio.com",
  projectId: "quizinezz",
  storageBucket: "quizinezz.appspot.com",
  messagingSenderId: "818418797455",
  appId: "1:818418797455:web:505f99a446c2bc9c7c19fa",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
