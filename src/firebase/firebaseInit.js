import firebase from "firebase/app"
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA9iks6ndxLFMIJq13KEinFya8nbCoUJcI",
    authDomain: "fireblogsyt-c221f.firebaseapp.com",
    projectId: "fireblogsyt-c221f",
    storageBucket: "fireblogsyt-c221f.appspot.com",
    messagingSenderId: "407248371455",
    appId: "1:407248371455:web:64feace3ba8066e04696ca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {timeStamp};
// hook up Front end with back end in firebase
export default firebaseApp.firestore();