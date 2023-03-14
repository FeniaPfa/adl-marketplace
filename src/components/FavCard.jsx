import { Avatar, Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useEffect, useState } from 'react';
import { getImg } from '../config/firebase';
import { formatNumber } from '../utils/utils.js';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';


export const FavCard = ({ productData }) => {
    const { addProduct } = useCartContext();
    const [img, setImg] = useState();
    const navigate = useNavigate()
    const goToFav = () => {
        navigate(`/products/${productData.id}`)
    };

    const deleteFav = () => {
        console.log('delete');
    };

    const addToCart = () => {
        addProduct(productData);
    };

    useEffect(() => {
        getImg(productData?.id, setImg);
    });

    return (
        <Container maxWidth="lg">
            <Paper sx={{ padding: '2rem' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" gap="2rem" alignItems="center">
                        <Avatar
                            src={img}
                            sx={{ width: '150px', height: '150px' }}
                            variant="rounded"
                            alt="alt"
                        />
                        <Stack gap="1.2rem" alignItems="flex-start">
                            <Box>
                                <Typography
                                    variant="overline"
                                    fontSize="1.2rem"
                                    sx={{ lineHeight: '1.5' }}>
                                    {productData?.sport} - {productData?.level} - {productData?.age}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    fontFamily="Kanit,sans-serif">
                                    {productData?.dojo}
                                </Typography>
                            </Box>
                            <Stack direction="row" gap="1rem">

                            <Button variant="outlined" size="large" onClick={goToFav}>
                                <VisibilityIcon />
                            </Button>
                            <Button variant="outlined" size="large" onClick={deleteFav}>
                                <CloseRoundedIcon />
                                Eliminar
                            </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack gap="1rem" alignItems="center">
                        <Typography variant="h3" fontWeight="bold">
                            $ {formatNumber(productData?.price)}
                        </Typography>
                        <Button variant="contained" size="large" onClick={addToCart}>
                            Agregar al Carrito
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </Container>
    );
};
