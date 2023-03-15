import { useEffect, useState } from 'react';
import { useGetUser } from '../hooks/useGetUser';
import { useGetProducts } from '../hooks/useGetProducts';
import { Loading } from '../components/Loading';
import { FavCard } from '../components/FavCard';
import { Container, Stack, Typography } from '@mui/material';

export const Favorites = () => {
    const { products } = useGetProducts();
    const { userData } = useGetUser();

    const [favorites, setFavorites] = useState();

    const favData = products.filter((item) => userData?.favs.includes(item.id));

    useEffect(() => {
        setFavorites(favData);
    }, [products, userData]);

    if (!favorites) return <Loading />;

    return (
        <Container maxWidth="lg">
            <Typography variant="h2" mb="2rem" fontFamily="Kanit,sans-serif" fontWeight="bold">
                Mis Favoritos
            </Typography>

            <Stack gap="1rem">
                {favorites.map((item) => (
                    <FavCard
                        key={item.id}
                        productData={item}
                        setFavorites={setFavorites}
                        favorites={favorites}
                        userData={userData}
                    />
                ))}
            </Stack>
        </Container>
    );
};
