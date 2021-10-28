import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvU2xScJccRVYeTtKAg-WJv5RPWG1Qy2g",
    authDomain: "usermail-firease.firebaseapp.com",
    projectId: "usermail-firease",
    storageBucket: "usermail-firease.appspot.com",
    messagingSenderId: "615345595975",
    appId: "1:615345595975:web:5479ce05e6c91444ed3362"
};

console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;