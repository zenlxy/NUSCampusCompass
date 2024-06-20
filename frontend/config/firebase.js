// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaqFonv195HfwUo57d44Nwy8lulBBSw3w",
    authDomain: "nuscampuscompass.firebaseapp.com",
    projectId: "nuscampuscompass",
    storageBucket: "nuscampuscompass.appspot.com",
    messagingSenderId: "612672545476",
    appId: "1:612672545476:web:6874831b53bb3b8d3fdf91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const itineraryRef = collection(db, 'itineraries');

export { auth, db, itineraryRef };