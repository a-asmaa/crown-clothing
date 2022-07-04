import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithPopup,
createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import { getDoc, getFirestore, setDoc, doc, addDoc, collection, writeBatch, getDocs} from 'firebase/firestore'

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

export const createCollectionAndDocument = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {

        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj)
            // batch to insert data in on successful transaction

    })

    await batch.commit()
    console.log("done");
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const querySnapshot = await getDocs(collectionRef);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        
        return acc;
    }, {})
    return categoryMap
}


export const createUserDocumentFromAuth = async (user, options ) => {

    if(!user) return;
    const userDocRef = doc(db, 'users', user.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
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


export const signOutUser = async () =>  await signOut(auth)


// call back function to call every time onAuth changes 
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)


// observer pattern start listen (next, error, complete)


// add data to DB 
