import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBMeUT4aXYRcjClnhVKAUrzxpYlLfJdN9s",
  authDomain: "firstapp-1494b.firebaseapp.com",
  databaseURL: "https://firstapp-1494b.firebaseio.com",
  projectId: "firstapp-1494b",
  storageBucket: "firstapp-1494b.appspot.com",
  messagingSenderId: "148280510939",
  appId: "1:148280510939:web:b2b5aa893ee12982"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
