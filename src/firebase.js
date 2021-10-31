import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAiGg6ionAirMZG0qVt7FQpoVEJo9xBrCY",
    authDomain: "photo-web-a58d4.firebaseapp.com",
    projectId: "photo-web-a58d4",
    storageBucket: "photo-web-a58d4.appspot.com",
    messagingSenderId: "368691580738",
    appId: "1:368691580738:web:621bb6515565b5128a02db"
})

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInwithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}


