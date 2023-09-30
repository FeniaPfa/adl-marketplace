import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { getUser } from './user';
import { getImage } from './images';

export const getProduct = async (id) => {
    const productRef = doc(db, 'products', id);
    const docSnap = await getDoc(productRef);
    const data = docSnap.data();
    const userData = await getUser(data.userId);
    const userName = `${userData.name} ${userData.apellido}`;
    const imageUrl = await getImage(id);
    return { ...data, id: id, image: imageUrl, userName };
};
