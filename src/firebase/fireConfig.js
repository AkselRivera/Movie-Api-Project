import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_dxZwDc0l6zfQHZIrDyeQxH_vbUaWZIc",
    authDomain: "akselflix.firebaseapp.com",
    projectId: "akselflix",
    storageBucket: "akselflix.appspot.com",
    messagingSenderId: "923196889756",
    appId: "1:923196889756:web:335439426f13b5c9456b59"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    // const db= firebase.firestore();
    var googleAuthProvider= new firebase.auth.GoogleAuthProvider();

    export { googleAuthProvider, firebase}