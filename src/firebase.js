import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAB5fLdf9FLn-6SaP5AW8LxH7ej5_ERNio",
  authDomain: "project-39b47.firebaseapp.com",
  projectId: "project-39b47",
  storageBucket: "project-39b47.appspot.com",
  messagingSenderId: "679540474575",
  appId: "1:679540474575:web:cf35863671d71aa65cedba",
  measurementId: "G-G8ELS3R54H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;