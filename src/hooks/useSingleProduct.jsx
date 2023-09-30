import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { getImage } from '../services/images';

export const useSingleProduct = (id) => {
    const [productData, setProductData] = useState();

    const getProduct = async () => {
        try {
            const productRef = doc(db, 'products', id);
            const docSnap = await getDoc(productRef);
            const data = docSnap.data();
            const imageUrl = await getImage(id);
            setProductData({ ...data, id: id, image: imageUrl });
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return { productData, getProduct, setProductData };
};
