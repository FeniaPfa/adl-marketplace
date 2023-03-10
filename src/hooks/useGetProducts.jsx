import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { productsCollectionRef } from '../config/firebase';

export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            const data = await getDocs(productsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setProducts(filteredData);
            // console.log("getProducts")
        } catch (err) {
            console.error(err);
        } finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        products,
        getProducts,
        setProducts,
        loading
    };
};
