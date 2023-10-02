import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';
import { deleteObject, getDownloadURL, getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const register = ({ email, password }) => createUserWithEmailAndPassword(auth, email, password);

const login = ({ email, password }) => signInWithEmailAndPassword(auth, email, password);

const disconnect = () => signOut(auth);

// Firestore
const db = getFirestore(app);
const storage = getStorage(app);

const productsCollectionRef = collection(db, 'products');
const usersCollectionRef = collection(db, 'users');

const deleteFile = async (ref) => {
    await deleteObject(ref);
};

const getImg = async (id, setImg) => {
    const imgRef = ref(storage, `products-img/${id}`);

    try {
        const url = await getDownloadURL(imgRef);
        setImg(url);
    } catch (err) {
        console.log('Error al descagar la imagen', err);
    }
};

export { auth, register, login, disconnect, db, storage, productsCollectionRef, usersCollectionRef, deleteFile, getImg };
