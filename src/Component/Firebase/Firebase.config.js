// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGTN37skiSYQR94iAX7t9bz0cKnNCfIDo",
    authDomain: "journeylife-project.firebaseapp.com",
    projectId: "journeylife-project",
    storageBucket: "journeylife-project.firebasestorage.app",
    messagingSenderId: "595218964439",
    appId: "1:595218964439:web:c5c6bb60ef8ec609ad7592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;