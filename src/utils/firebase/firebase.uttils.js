import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithGoo, signInWithPopup, EmailAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDoc, getFirestore, setDoc, doc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwXMhC66VIpD2b4OVKffPovtmi5MZW5gA",
  authDomain: "crown-cloth-db-71011.firebaseapp.com",
  projectId: "crown-cloth-db-71011",
  storageBucket: "crown-cloth-db-71011.appspot.com",
  messagingSenderId: "301028692374",
  appId: "1:301028692374:web:47d4cce9d95f64dc63cdb7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth(); // way to know if user authenticated or not 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user, options ) => {

    if(!user) return;

    const userDocRef = doc(db, 'users', user.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(! userSnapshot.exists()){
        // add user  
        const {displayName, email } = user
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...options
            })
    
        } catch (error) {
            console.log(error.message);
        }
    }

    return userDocRef;

}

export const createAuthWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthWithEmailAndPassword = async (email, password) => {

    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)

}