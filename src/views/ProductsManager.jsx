import { useEffect, useState } from 'react';
import { useUserContext } from '../context/userContext';
import { useGetProducts } from '../hooks/useGetProducts';
import { MyProduct } from '../components/MyProduct';
import { Stack, Typography } from '@mui/material';

export const ProductsManager = () => {
    const { user } = useUserContext();
    const { products } = useGetProducts();
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        setMyProducts(products.filter((item) => item.userId === user.uid));
    }, [products]);

    if (!myProducts) {
        return <p>Loading</p>;
    }

    return (
        <>
            <Typography variant="h2" mb="2rem" fontFamily="Kanit,sans-serif" fontWeight="bold">
                Mis Publicaciones
            </Typography>
            <Stack gap="1rem">
                {myProducts.map((item) => (
                    <MyProduct
                        key={item.id}
                        product={item}
                        setMyProducts={setMyProducts}
                        myProducts={myProducts}
                    />
                ))}
            </Stack>
        </>
    );
};
