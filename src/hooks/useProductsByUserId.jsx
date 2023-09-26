import { useEffect, useState } from 'react';
import { productsCollectionRef } from '../config/firebase';
import { getDocs, query, where } from 'firebase/firestore';

export const useProductsByUserId = (id) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const q = query(productsCollectionRef, where('userId', '==', id));

    const getProductByUserId = async () => {
        try {
            const data = await getDocs(q);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            setProducts(filteredData);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductByUserId();
    }, []);

    return {
        products,
        loading,
    };
};
