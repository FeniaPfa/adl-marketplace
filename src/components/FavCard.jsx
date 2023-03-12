import {
    Avatar,
    Box,
    Button,
    Container,
    Paper,
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
        <Container maxWidth="lg">

        <Paper sx={{ padding: '2rem' }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" gap="2rem" alignItems="center">
                    <Avatar
                        src={'https://picsum.photos/200'}
                        sx={{ width: '150px', height: '150px' }}
                        variant="rounded"
                        alt="alt"
                        />
                    <Stack gap="1.2rem">
                        <Box>
                            
                        <Typography variant="overline" fontSize="1.2rem" sx={{lineHeight:"1.5"}}>Karate - Nivel - Edades</Typography>
                        <Typography variant="h4" fontWeight="bold" fontFamily="Kanit,sans-serif">
                            Cobra Kai
                        </Typography>
                        </Box>
                        <Button variant="outlined" size='large'>
                            <CloseRoundedIcon />
                            Eliminar
                        </Button>
                    </Stack>
                </Stack>
                <Stack gap="1rem" alignItems="center">
                    <Typography variant="h3" fontWeight="bold">$ 10.000</Typography>
                    <Button variant="contained" size='large' onClick={deleteFav}>
                        Agregar al Carrito
                    </Button>
                </Stack>
            </Stack>
        </Paper>
                        </Container>
    );
};
