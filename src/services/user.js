import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const getUser = async (id) => {
    const userRef = doc(db, 'users', id);
    const docSnap = await getDoc(userRef);
    const data = docSnap.data();
    return data;
};
