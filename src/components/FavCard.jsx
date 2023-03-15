import { Avatar, Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useEffect, useState } from 'react';
import { db, getImg } from '../config/firebase';
import { formatNumber } from '../utils/utils.js';
import { useCartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { doc, updateDoc } from 'firebase/firestore';
import { useUserContext } from '../context/userContext';

export const FavCard = ({ setFavorites, userData, productData, favorites }) => {
    const { user } = useUserContext();
    const { addProduct } = useCartContext();
    const [img, setImg] = useState();
    const navigate = useNavigate();
    const goToFav = () => {
        navigate(`/products/${productData.id}`);
    };

    const userRef = doc(db, 'users', user?.uid);

    const newFavs = userData.favs.filter((item) => item !== productData.id);
    const deleteFav = async () => {
        try {
            await updateDoc(userRef, { ...userData, favs: newFavs });

            setFavorites(favorites.filter((item) => item.id !== productData.id));
            console.log('Favoritos modificados');
        } catch (err) {
            console.error(err);
        }
    };

    const addToCart = () => {
        addProduct(productData);
    };

    useEffect(() => {
        getImg(productData?.id, setImg);
    });

    return (
        // <Container maxWidth="lg">
            <Paper sx={{ padding: '2rem' }}>
                <Stack alignItems="center" justifyContent="space-between" gap="1rem" sx={{flexDirection:{xs:"column",md:"row"}}}>
                    <Stack gap="2rem" alignItems="center" sx={{flexDirection:{xs:"column",sm:"row"}}}>
                        <Avatar
                            src={img}
                            sx={{ width: '150px', height: '150px' }}
                            variant="rounded"
                            alt="alt"
                        />
                        <Stack gap="1.2rem" sx={{alignItems:{xs:"center", md:"flex-start"}}}>
                            <Box>
                                <Typography
                                    variant="overline"
                                    fontSize="1.2rem"
                                    sx={{ lineHeight: '1.5',textAlign:{xs:"center",md:"inherit"}}}>
                                    {productData?.sport} - {productData?.level} - {productData?.age}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                    fontFamily="Kanit,sans-serif"
                                    sx={{textAlign:{xs:"center",md:"inherit"}}}
                                    >
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
        // </Container>
    );
};
