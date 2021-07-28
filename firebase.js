import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
    apiKey: "AIzaSyBDXXADfoGczUje7zgj9IafyS5uUmvNu5Q",
    authDomain: "first-project-2914d.firebaseapp.com",
    databaseURL: "https://first-project-2914d.firebaseio.com",
    projectId: "first-project-2914d",
    storageBucket: "first-project-2914d.appspot.com",
    messagingSenderId: "27395919700",
    appId: "1:27395919700:web:10885e375a8719e5c642c1"
  });

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);


export default firebase;
