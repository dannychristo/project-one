import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWkpGvYsv7q86wKneURIbMrbAZ4zUidG8",
    authDomain: "tinder-clone-75bba.firebaseapp.com",
    projectId: "tinder-clone-75bba",
    storageBucket: "tinder-clone-75bba.appspot.com",
    messagingSenderId: "736902181175",
    appId: "1:736902181175:web:3e3923d6d15de3c9a9aab2",
    measurementId: "G-GFK1GF617Y"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;