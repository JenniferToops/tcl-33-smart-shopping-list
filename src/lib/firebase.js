// NOTE: import only the Firebase modules that you need in your app... except
// for the second line, which makes both the linter and react-firebase happy
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";

// Initalize Firebase.
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyAg771NDelxVm1qW8lYGYCafdl02uept_M',
  authDomain: 'my-smart-shopping-list-ee379.firebaseapp.com',
  projectId: 'my-smart-shopping-list-ee379',
  storageBucket: 'my-smart-shopping-list-ee379.appspot.com',
  messagingSenderId: '796512760840',
  appId: '1:796512760840:web:28f9240dd3877b482e0dbd',
  measurementId: 'G-RMYHGTDD7L',
};

const firebaseInstance = firebase.initializeApp(firebaseConfig);
const db = firebaseInstance.firestore();
// const analytics = getAnalytics(db)

export { db };
