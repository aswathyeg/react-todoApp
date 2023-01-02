import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-95G9laGX8ua2CpmiuPuSBbDryguIZb8",
  authDomain: "react-docket-app.firebaseapp.com",
  projectId: "react-docket-app",
  storageBucket: "react-docket-app.appspot.com",
  messagingSenderId: "625361759196",
  appId: "1:625361759196:web:b5b90ef882da0c14e17d19",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
