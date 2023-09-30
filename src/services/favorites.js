import { doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db, productsCollectionRef } from '../config/firebase';

export const getFavorites = async (favsArr) => {
    if (favsArr.length < 1) {
        return [];
    }
    const q = query(productsCollectionRef, where('__name__', 'in', favsArr));

    const res = await getDocs(q);

    const data = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));
    console.log(data);
    return data;
};

export const updateFavorites = async (userId, newFavs) => {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, { favs: newFavs });
};
