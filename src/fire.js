import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBr67PP-X_Xb1dzrOJuFb_6tByGIppelcI",
    authDomain: "drafthouse.firebaseapp.com",
    databaseURL: "https://drafthouse.firebaseio.com",
    projectId: "drafthouse",
    storageBucket: "drafthouse.appspot.com",
    messagingSenderId: "374550581440",
    appId: "1:374550581440:web:b8316bf59b38a82b951d25",
    measurementId: "G-PGRGY78HGK"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();
export { firestore };