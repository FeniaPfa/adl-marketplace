import { useEffect, useState } from 'react';
import { MyProduct } from '../components/MyProduct';
import { useUserContext } from '../context/userContext';
import { useGetData } from '../hooks/useGetData';

export const ProductsManager = () => {
    const { user } = useUserContext();
    const { products } = useGetData();
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        setMyProducts(products.filter((item) => item.userId === user.uid));
    }, [products]);

    if (!myProducts) {
        return <p>Loading</p>;
    }

    return (
        <>
            {myProducts.map((item) => (
                <MyProduct key={item.id} product={item}/>
            ))}
        </>
    );
};
