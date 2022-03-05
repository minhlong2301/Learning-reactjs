import "firebase/auth"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDmYO8N16M9sdULprUFNregLPVfENGuzdk",
    authDomain: "todolist-1141e.firebaseapp.com",
    databaseURL: "https://todolist-1141e.firebaseio.com",
    projectId: "todolist-1141e",
    storageBucket: "todolist-1141e.appspot.com",
    messagingSenderId: "674886335610",
    appId: "1:674886335610:web:e1496c5e085c6e29a94fc3"
  };

firebase.initializeApp(firebaseConfig)

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };
