import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBhRsKOuqlx62Lrd3MV6BHKk7r7PJ_X0e8",
  authDomain: "todolister-b1fb8.firebaseapp.com",
  databaseURL: "https://todolister-b1fb8-default-rtdb.firebaseio.com",
  projectId: "todolister-b1fb8",
  storageBucket: "todolister-b1fb8.appspot.com",
  messagingSenderId: "448971555273",
  appId: "1:448971555273:web:2f101dea877e7bb99e6818",
  measurementId: "G-6TD0N8PJ49"
};
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   }

const app = initializeApp(firebaseConfig)

// export const auth = app.auth();

// export default app

export const auth = getAuth(app)