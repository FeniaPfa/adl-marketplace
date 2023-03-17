import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, getImg } from '../config/firebase';
import { useGetProducts } from '../hooks/useGetProducts';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/userContext';
import { Main } from '../containers/Main';
import { Footer } from '../components/Footer';
import { formatNumber } from '../utils/utils.js';
import EditIcon from '@mui/icons-material/Edit';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    List,
    ListItem,
    Stack,
    Typography,
} from '@mui/material';
import { Loading } from '../components/Loading';

export const ProductPage = () => {
    const { user } = useUserContext();
    const { products } = useGetProducts();
    const { addProduct } = useCartContext();

    const { id } = useParams();
    const navigate = useNavigate();

    const [img, setImg] = useState();
    const [productUserInfo, setProductUserInfo] = useState();

    const [myUserInfo, setMyUserInfo] = useState();
    const [isFav, setIsFav] = useState(false);

    const productData = products.find((item) => item.id === id);

    const getUserInfo = async (id, setInfo) => {
        try {
            if (productData) {
                const userRef = doc(db, 'users', id);
                const docSnap = await getDoc(userRef);
                const data = docSnap.data();
                setInfo(data);
            }
        } catch (err) {
            console.log({ err });
        }
    };

    let myUserRef;
    if (user) {
        myUserRef = doc(db, 'users', user?.uid);
    }

    let favorites = [];
    const handleFav = () => {
        if (myUserInfo.favs) {
            if (!isFav) {
                favorites = [...myUserInfo.favs, productData.id];
                uploadFav();
                getUserInfo(user?.uid, setMyUserInfo);
                console.log('Guardo en favoritos con exito');
            }
            if (isFav) {
                const newFavs = myUserInfo.favs.filter((item) => item !== productData.id);
                favorites = [...newFavs];
                uploadFav();
                getUserInfo(user?.uid, setMyUserInfo);
                console.log('Eliminado con exito de favoritos');
            }
        } else {
            favorites = [productData.id];
            uploadFav();
            getUserInfo(user?.uid, setMyUserInfo);
        }
    };
    const uploadFav = async () => {
        try {
            await updateDoc(myUserRef, { ...myUserInfo, favs: favorites });
            console.log('Favoritos modificados');
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getImg(id, setImg);
        getUserInfo(productData?.userId, setProductUserInfo);

        if (user) {
            getUserInfo(user?.uid, setMyUserInfo);
        }
    }, [productData]);

    useEffect(() => {
        setIsFav(myUserInfo?.favs?.some((item) => item === productData.id));
    }, [myUserInfo]);

    const listStyle = {
        display: 'flex',
        gap: { xs: '1rem', md: '5rem' },
        color: '#455a64',
        fontWeight: 'bold',
        flexWrap: { xs: 'wrap', md: 'noWrap' },
        fontSize: '1.3rem',
    };

    if (!productData) {
        return <Loading />;
    }

    return (
        <>
            <Main>
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '.3rem 1.2rem 1.2rem',
                    }}>
                    {/* card body */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', sm: 'row' },
                        }}>
                        <CardMedia
                            component="img"
                            title={productData?.sport}
                            image={img}
                            sx={{
                                width: { xs: '100%', sm: '40%' },
                                objectFit: 'cover',
                                aspectRatio: { sm: '1/1' },
                            }}
                        />
                        {/* Card right info */}
                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                flexGrow: 1,
                            }}>
                            {/* Sport | City */}
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{ color: '#455a64' }}>
                                <Typography variant="overline" fontWeight="bold" fontSize="1.2rem">
                                    Clases de {productData?.sport}
                                </Typography>
                                <Typography variant="overline" fontSize="1.2rem" fontWeight="bold">
                                    {productData?.city}
                                </Typography>
                            </Stack>
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                fontFamily="Kanit,sans-serif"
                                letterSpacing=".3rem">
                                {productData?.dojo}
                            </Typography>
                            {/* List Direccion | Nivel | Edad */}
                            <List disablePadding>
                                <ListItem sx={listStyle}>
                                    <span style={{ flexGrow: '1' }}>Nivel:</span>
                                    <span>{productData.level}</span>
                                </ListItem>
                                <ListItem sx={listStyle}>
                                    <span style={{ flexGrow: '1' }}>Edad:</span>
                                    <span>{productData.age}</span>
                                </ListItem>
                                <ListItem sx={listStyle}>
                                    <span style={{ flexGrow: '1' }}>Dirección:</span>
                                    <span>{productData.adress}</span>
                                </ListItem>
                            </List>
                            {/* Precio x mes */}
                            <Box
                                display="flex"
                                gap="1rem"
                                flexDirection="row"
                                alignItems="baseline">
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    color="primary"
                                    letterSpacing=".3rem"
                                    lineHeight="1.5">
                                    {productData.price === 0
                                        ? 'Gratis'
                                        : `$ ${formatNumber(productData?.price)}`}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontSize="1.2rem"
                                    letterSpacing=".1rem"
                                    textTransform="uppercase">
                                    {productData?.price !== 0 && 'x mes'}
                                </Typography>
                            </Box>
                            {/* Añadir | Fav */}
                            <Stack direction="row" justifyContent="space-around" gap=".8rem">
                                {user?.uid !== productData?.userId ? (
                                    <Button
                                        disabled={!user}
                                        onClick={handleFav}
                                        variant="outlined"
                                        size="large"
                                        sx={{ fontSize: '1.3rem' }}>
                                        {!isFav ? 'Guardar en favoritos' : 'Eliminar Favorito'}
                                    </Button>
                                ) : (
                                    <Button
                                        size="large"
                                        sx={{ fontSize: '1.3rem' }}
                                        variant="outlined"
                                        onClick={() =>
                                            navigate(`/dashboard/products/${productData?.id}`)
                                        }>
                                        <EditIcon fontSize="large" sx={{ mr: '.5rem' }} />
                                        Editar
                                    </Button>
                                )}
                                <Button
                                    size="large"
                                    sx={{ fontSize: '1.3rem' }}
                                    disabled={user?.uid === productData?.userId}
                                    variant="contained"
                                    onClick={() => addProduct(productData, user)}>
                                    Añadir al carrito
                                </Button>
                            </Stack>
                        </CardContent>
                    </Box>
                    {/* User | Descripcion | Horarios */}
                    <Stack mt="1rem" gap="1rem">
                        <Typography variant="overline" fontSize="1.2rem" sx={{ lineHeight: '1' }}>
                            Por:
                            <b>
                                {productUserInfo?.name} {productUserInfo?.apellido}
                            </b>
                        </Typography>
                        <Typography fontSize="1.5rem">
                            <b>Horarios:</b> {productData?.days}
                        </Typography>
                        <Typography fontSize="1.5rem">{productData?.desc}</Typography>
                    </Stack>
                </Card>
            </Main>
            <Footer />
        </>
    );
};
