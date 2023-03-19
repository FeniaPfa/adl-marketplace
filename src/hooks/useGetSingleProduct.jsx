import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';

export const useGetSingleProduct = (id) => {
    const [productData, setProductData] = useState();

    const getProduct = async () => {
        try {
            const productRef = doc(db, 'products', id);
            const docSnap = await getDoc(productRef);
            const data = docSnap.data();
            setProductData({...data,id: id});
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return { productData };
};
