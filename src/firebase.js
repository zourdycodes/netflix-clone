import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYp2pO98czST_sdm2vlOd5jG24x2wVKp8",
    authDomain: "netflix-clone-c1f35.firebaseapp.com",
    projectId: "netflix-clone-c1f35",
    storageBucket: "netflix-clone-c1f35.appspot.com",
    messagingSenderId: "434060804620",
    appId: "1:434060804620:web:d8f6c4f06c96b0b71e2429",
    measurementId: "G-WQLJQ0JG5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth };
export default db;