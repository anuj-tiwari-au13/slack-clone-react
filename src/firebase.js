import firebase from "firebase";

// CONFIG FROM FIREBASE PROJECT SETTING -> CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyDyfm8CV_P-maPbiyaoO9mF7YirGIivAwY",
  authDomain: "slack-clone-challenge-274dc.firebaseapp.com",
  projectId: "slack-clone-challenge-274dc",
  storageBucket: "slack-clone-challenge-274dc.appspot.com",
  messagingSenderId: "870644854645",
  appId: "1:870644854645:web:7f1a6656c589d74b87ad3c",
};

// INITIALIZE OUR FIREBASE APP

const firebaseApp = firebase.initializeApp(firebaseConfig);

// INITIALIZE OUR DB

const db = firebaseApp.firestore();
// firestore is a realtime database in firebase.

//ENABLE AUTHENTICATION FOR LOGIN WITH GOOGLE
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//EXPORT
export { auth, provider };
export default db;

// firebase is a realtime database
// we are storing channel info in firebase database, as component database is not  consistent and vanishes as soon as we login again.
