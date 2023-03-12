import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useGetProducts } from '../hooks/useGetProducts';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/userContext';
import { Main } from '../containers/Main';
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

export const ProductPage = () => {
    const { user } = useUserContext();
    const { id } = useParams();
    const [img, setImg] = useState();
    const [userInfo, setUserInfo] = useState();

    const { products, setLoading, loading } = useGetProducts();
    const { addProduct } = useCartContext();

    const productData = products.find((item) => item.id === id);

    const getUserInfo = async () => {
        try {
            if (productData) {
                const userRef = doc(db, 'users', productData?.userId);
                const docSnap = await getDoc(userRef);
                const data = docSnap.data();
                setUserInfo(data);
            }
        } catch (err) {
            console.log({ err });
        }
    };

    const getImg = async () => {
        const imgRef = ref(storage, `products-img/${id}`);

        try {
            const url = await getDownloadURL(imgRef);
            setImg(url);
        } catch (err) {
            console.log('Error al descagar la imagen', err);
        }
    };
    useEffect(() => {
        getImg();

        getUserInfo();
    }, [productData]);

    const listStyle = {
        display: 'flex',
        gap: { xs: '1rem', md: '5rem' },
        color: '#455a64',
        fontWeight: 'bold',
        flexWrap: { xs: 'wrap', md: 'noWrap' },
    };

    if (!productData) {
        return <p>Loading</p>;
    }

    return (
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
                            gap: '.6rem',
                            flexGrow: 1,
                        }}>
                        {/* Sport | City */}
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ color: '#455a64' }}>
                            <Typography variant="overline" fontWeight="bold">
                                Clases de {productData?.sport}
                            </Typography>
                            <Typography variant="overline" fontWeight="bold">
                                {productData?.city}
                            </Typography>
                        </Stack>
                        <Typography
                            variant="h4"
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
                        <Box display="flex" gap="1rem" flexDirection="row" alignItems="baseline">
                            <Typography
                                variant="h4"
                                fontWeight="bold"
                                color="primary"
                                letterSpacing=".3rem"
                                lineHeight="1.5">
                                $ {formatNumber(productData?.price)}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                letterSpacing=".1rem"
                                textTransform="uppercase">
                                x mes
                            </Typography>
                        </Box>
                        {/* Añadir | Fav */}
                        <Stack direction="row" justifyContent="space-around">
                            {user?.uid !== productData?.userId ? (
                                <Button variant="outlined">Guardar en favoritos</Button>
                            ) : (
                                <Button variant="outlined"><EditIcon sx={{mr:".5rem"}} />Editar</Button>
                            )}
                            {/* <Button  variant="outlined">Guardar en favoritos</Button> */}
                            <Button
                                disabled={user?.uid === productData?.userId}
                                variant="contained"
                                onClick={() => addProduct(productData)}>
                                Añadir al carrito
                            </Button>
                        </Stack>
                    </CardContent>
                </Box>
                {/* User | Descripcion | Horarios */}
                <Stack gap=".5rem">
                    <Typography variant="overline" sx={{ lineHeight: '1' }}>
                        Por:
                        <b>
                            {userInfo?.name} {userInfo?.apellido}
                        </b>
                    </Typography>
                    <Typography>
                        <b>Horarios:</b> {productData?.days}
                    </Typography>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta inventore
                        provident velit totam nihil sequi fugiat quia qui dolorem impedit maxime,
                        modi quos maiores rerum repellat numquam dolore libero suscipit!
                    </Typography>
                </Stack>
            </Card>
        </Main>
    );
};
