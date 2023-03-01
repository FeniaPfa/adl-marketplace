import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { deleteObject, getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyChBXMLQo2_oxaxIdKG--h9CCCu85Ec6dU',
    authDomain: 'adl-marketplace.firebaseapp.com',
    projectId: 'adl-marketplace',
    storageBucket: 'adl-marketplace.appspot.com',
    messagingSenderId: '404073098406',
    appId: '1:404073098406:web:520d252d5bfad0b9065867',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const login = ({ email, password }) => signInWithEmailAndPassword(auth, email, password);

const logOut = () => signOut(auth);

// Firestore
const db = getFirestore(app);
const storage = getStorage(app);

const productsCollectionRef = collection(db, 'products');
const usersCollectionRef = collection(db, 'users');

const deleteFile = async (ref) => {
  await deleteObject(ref);
};

export { auth, login, logOut, db, storage, productsCollectionRef, usersCollectionRef, deleteFile };
