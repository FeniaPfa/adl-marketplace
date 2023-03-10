import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Paper,
    Skeleton,
    Stack,
    Typography,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const FavCard = () => {
    const goToFav = () => {
        console.log('Ver favorito');
    };

    const deleteFav = () => {
        console.log('delete');
    };

    const addToCart = () => {
        console.log('añadido al carrito');
    };

    return (
        <Paper sx={{ padding: '1.2rem' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" gap="2rem" alignItems="center">
                    <Avatar
                        src={'https://picsum.photos/200'}
                        sx={{ width: '80px', height: '80px' }}
                        variant="rounded"
                        alt="alt"
                    />
                    <Stack gap=".2rem">
                        <Box>
                            
                        <Typography variant="overline">Clases de Karate</Typography>
                        <Typography variant="h5" fontWeight="bold" fontFamily="Kanit,sans-serif">
                            Cobra Kai
                        </Typography>
                        </Box>
                        <Button variant="outlined" size='small'>
                            <CloseRoundedIcon />
                            Eliminar
                        </Button>
                    </Stack>
                </Stack>
                <Stack gap="1rem" alignItems="center">
                    <Typography variant="h4" fontWeight="bold">$ 10.000</Typography>
                    <Button variant="contained" size='small' onClick={deleteFav}>
                        Agregar al Carrito
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
};
