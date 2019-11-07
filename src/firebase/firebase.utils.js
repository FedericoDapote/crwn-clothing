import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//firebase stuff
const config = {
    apiKey: "AIzaSyCA_DrCzrpcnzlpBVakrZo4_zn7BRJuUu4",
    authDomain: "crwn-db-a865e.firebaseapp.com",
    databaseURL: "https://crwn-db-a865e.firebaseio.com",
    projectId: "crwn-db-a865e",
    storageBucket: "crwn-db-a865e.appspot.com",
    messagingSenderId: "497408193562",
    appId: "1:497408193562:web:f4ed8ff9291bd8079d4da3",
    measurementId: "G-MP8FTHYJB4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    //if the snapShot (data of the user) doent exist then it creates a user with all the data
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        //creates the data for the user
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

//exports auth and firebase for other projects
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth popup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;