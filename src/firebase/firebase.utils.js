import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyD4j0WzAkImqN0ub5N1cSGt_mdsd_ChGco",
    authDomain: "padel-8ef68.firebaseapp.com",
    databaseURL: "https://padel-8ef68-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "padel-8ef68",
    storageBucket: "padel-8ef68.appspot.com",
    messagingSenderId: "82197416506",
    appId: "1:82197416506:web:f4684c72a07b846f8b4303",
    measurementId: "G-CN3VW4XXDM"
};

firebase.initializeApp(config);

export default firebase;
export const firestore = firebase.firestore();