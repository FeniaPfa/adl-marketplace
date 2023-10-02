import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImg } from '../../../config/firebase';
import { useUserContext, useCartContext } from '../../../context';
import { formatNumber } from '../../../common/utils';
import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material';
import Icons from '../../../common/Icons';
import { updateFavorites } from '../../../services/favorites';

export const FavCard = ({ setFavorites, productData, favorites }) => {
    const { user, userData, setUserData } = useUserContext();
    const { addProduct } = useCartContext();
    const [img, setImg] = useState();
    const navigate = useNavigate();
    const goToFav = () => {
        navigate(`/products/${productData.id}`);
    };

    const deleteFav = async () => {
        try {
            const newFavs = userData.favs.filter((item) => item !== productData.id);

            updateFavorites(userData.id, newFavs);

            setFavorites(favorites.filter((item) => item.id !== productData.id));
            setUserData({ ...userData, favs: newFavs });
            console.log('Favoritos modificados');
        } catch (err) {
            console.error(err);
        }
    };

    const addToCart = () => {
        addProduct(productData, user);
    };

    useEffect(() => {
        getImg(productData?.id, setImg);
    }, []);

    return (
        <Paper sx={{ padding: '2rem' }}>
            <Stack
                alignItems="center"
                justifyContent="space-between"
                gap="1rem"
                sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <Stack gap="2rem" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Avatar src={img} sx={{ width: '150px', height: '150px' }} variant="rounded" alt="alt" />
                    <Stack gap="1.2rem" sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
                        <Box>
                            <Typography
                                variant="overline"
                                fontSize="1.2rem"
                                sx={{
                                    lineHeight: '1.5',
                                    textAlign: { xs: 'center', md: 'inherit' },
                                }}>
                                {productData?.sport} - {productData?.level} - {productData?.age}
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                fontFamily="Kanit,sans-serif"
                                sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
                                {productData?.dojo}
                            </Typography>
                        </Box>
                        <Stack direction="row" gap="1rem">
                            <Button variant="outlined" size="large" onClick={goToFav}>
                                <Icons.VisibilityIcon />
                            </Button>
                            <Button variant="outlined" size="large" onClick={deleteFav}>
                                <Icons.CloseRoundedIcon />
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
    );
};
