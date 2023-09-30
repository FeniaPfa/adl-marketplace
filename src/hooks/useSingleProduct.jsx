import { useEffect, useState } from 'react';
import { getProduct } from '../services/products';

export const useSingleProduct = (id) => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const getProductData = async () => {
        try {
            const productData = await getProduct(id);
            setProduct(productData);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return { product, getProductData, setProduct, loading };
};
