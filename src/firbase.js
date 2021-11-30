import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDA7BdPW-jcF43-pDP4O2QJ2_szVuynhQw",
    authDomain: "todolist2021-b5030.firebaseapp.com",
    projectId: "todolist2021-b5030",
    storageBucket: "todolist2021-b5030.appspot.com",
    messagingSenderId: "563054226795",
    appId: "1:563054226795:web:b3c6bc9c573f51cd31702e",
    measurementId: "G-QY60H89WYN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
    
export default db;