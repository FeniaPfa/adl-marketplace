import { Stack, Typography } from '@mui/material';
import { FavCard } from '../components/FavCard';

export const Favorites = () => {
    // logica para para hacerun map con favcards
    return (
        <>
            <Typography variant="h2" mb="2rem" fontFamily="Kanit,sans-serif" fontWeight="bold">
                Mis Favoritos
            </Typography>
            <Stack gap="1rem">
                <FavCard />
            </Stack>
        </>
    );
};
