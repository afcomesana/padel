import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "*************************************",
    authDomain: "padel-*******.firebaseapp.com",
    databaseURL: "***********************************************************",
    projectId: "padel-******",
    storageBucket: "padel-******.appspot.com",
    messagingSenderId: "*****************",
    appId: "1:******************:web:**************************",
    measurementId: "G-**************"
};

firebase.initializeApp(config);

export default firebase;
export const firestore = firebase.firestore();
