import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACnxRQHd_pQe3svxqL_jJt362GC_Bo8rM",
  authDomain: "react-docket-recent-app.firebaseapp.com",
  projectId: "react-docket-recent-app",
  storageBucket: "react-docket-recent-app.appspot.com",
  messagingSenderId: "490136428252",
  appId: "1:490136428252:web:2a8894fa4ca2730096de19",
};

//initialize fb
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
