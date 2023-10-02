import { useEffect, useState } from 'react';
import { FavCard } from './components';
import { Container, Stack, Typography } from '@mui/material';
import { Loading, EmptyAlert } from '../../common/components';
import { useFavorites } from '../../hooks/useFavorites';

export const Favorites = () => {
    const { favoritesData, loading } = useFavorites();

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setFavorites(favoritesData);
    }, [favoritesData]);

    if (loading) return <Loading />;

    return (
        <Container maxWidth="lg">
            <Typography variant="h2" mb="2rem" fontFamily="Kanit,sans-serif" fontWeight="bold">
                Mis favoritos
            </Typography>
            <Stack gap="1rem">
                {favorites.length === 0 && <EmptyAlert width="sm" type="favs" />}
                {favorites.map((item) => (
                    <FavCard key={item.id} productData={item} setFavorites={setFavorites} favorites={favorites} />
                ))}
            </Stack>
        </Container>
    );
};
