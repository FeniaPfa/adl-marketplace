import { Stack, Typography } from '@mui/material';
import { FavCard } from '../components/FavCard';
import { useGetProducts } from '../hooks/useGetProducts';
import { useGetUser } from '../hooks/useGetUser';

export const Favorites = () => {
    // logica para para hacerun map con favcards
    const { products } = useGetProducts();
    const {userData} = useGetUser()

    const favData = products.filter((item) => userData?.favs.includes(item.id) )
    console.log(favData)


    return (
        <>
            <Typography variant="h2" mb="2rem" fontFamily="Kanit,sans-serif" fontWeight="bold">
                Mis Favoritos
            </Typography>
            <Stack gap="1rem">
                {favData.map(item => <FavCard productData={item} /> )}
                
            </Stack>
        </>
    );
};
