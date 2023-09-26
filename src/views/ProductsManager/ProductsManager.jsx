import { useEffect, useState } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { useUserContext } from '../../context';
import { MyProduct } from './components';
import { EmptyAlert } from '../../common/components';
import { useProductsByUserId } from '../../hooks/useProductsByUserId';

export const ProductsManager = () => {
    const { user } = useUserContext();
    const { products, loading } = useProductsByUserId(user.uid);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        setMyProducts(products);
    }, [products]);

    if (loading) {
        return <p>Loading</p>;
    }

    return (
        <Container maxWidth="lg">
            <Typography
                variant="h2"
                mb="2rem"
                fontFamily="Kanit,sans-serif"
                fontWeight="bold"
                sx={{ wordBreak: 'break-word', fontSize: { xs: '3rem', sm: '3.7rem' } }}>
                Mis Publicaciones
            </Typography>
            <Stack gap="1rem">
                {myProducts.length === 0 && <EmptyAlert width="md" type="products" />}
                {myProducts.map((item) => (
                    <MyProduct key={item.id} product={item} setMyProducts={setMyProducts} myProducts={myProducts} />
                ))}
            </Stack>
        </Container>
    );
};
