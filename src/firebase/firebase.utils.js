import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDFL-cblSxfXt_WRi-BK98VDue6eYxJhp8",
  authDomain: "marginal-utility.firebaseapp.com",
  databaseURL: "https://marginal-utility.firebaseio.com",
  projectId: "marginal-utility",
  storageBucket: "marginal-utility.appspot.com",
  messagingSenderId: "989604522407",
  appId: "1:989604522407:web:1f1aaecf9e18821e072e82",
  measurementId: "G-0HVZE0L0T6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;