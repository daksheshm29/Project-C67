import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAvHa1zr4gMeyutj64WYJ6Ds1QlYoWNkS8",

    authDomain: "c67-team-voting.firebaseapp.com",
  
    databaseURL: "https://c67-team-voting-default-rtdb.firebaseio.com",
  
    projectId: "c67-team-voting",
  
    storageBucket: "c67-team-voting.appspot.com",
  
    messagingSenderId: "728699790197",
  
    appId: "1:728699790197:web:a49e0f39202f946227293c"
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();