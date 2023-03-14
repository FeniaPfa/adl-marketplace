import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FavCard } from '../components/FavCard';
import { Loading } from '../components/Loading';
import { useGetProducts } from '../hooks/useGetProducts';
import { useGetUser } from '../hooks/useGetUser';

export const Favorites = () => {
    const { products } = useGetProducts();
    const { userData } = useGetUser();

    const [favorites, setFavorites] = useState();

    const favData = products.filter((item) => userData?.favs.includes(item.id));
    // console.log(favorites);

    useEffect(() => {
        setFavorites(favData);
    }, [products, userData]);

    if (!favorites) return <Loading />;

    return (
        <>
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
        </>
    );
};
