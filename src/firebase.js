// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBI9L6sq9jLalBcvXDJkD8MGU4wevD1NBo",
	authDomain: "facebook-clone-f5fd5.firebaseapp.com",
	projectId: "facebook-clone-f5fd5",
	storageBucket: "facebook-clone-f5fd5.appspot.com",
	messagingSenderId: "288411348244",
	appId: "1:288411348244:web:c62c792db0011296b16601",
	measurementId: "G-2B1DVJD86D",
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const db = fireBaseApp.firestore();
const auth = fireBaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;