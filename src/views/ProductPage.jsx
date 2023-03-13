import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db, getImg } from '../config/firebase';
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
import { Loading } from '../components/Loading';

export const ProductPage = () => {
    const { user } = useUserContext();
    const { id } = useParams();
    const navigate = useNavigate();
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

    useEffect(() => {
        getImg(id, setImg);

        getUserInfo();
    }, [productData]);

    const listStyle = {
        display: 'flex',
        gap: { xs: '1rem', md: '5rem' },
        color: '#455a64',
        fontWeight: 'bold',
        flexWrap: { xs: 'wrap', md: 'noWrap' },
        fontSize:"1.3rem"
    };

    if (!productData) {
        return <Loading />;
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
                        <Box display="flex" gap="1rem" flexDirection="row" alignItems="baseline">
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color="primary"
                                letterSpacing=".3rem"
                                lineHeight="1.5">
                                $ {formatNumber(productData?.price)}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                fontSize="1.2rem"
                                letterSpacing=".1rem"
                                textTransform="uppercase">
                                x mes
                            </Typography>
                        </Box>
                        {/* Añadir | Fav */}
                        <Stack direction="row" justifyContent="space-around" gap=".8rem">
                            {user?.uid !== productData?.userId ? (
                                <Button variant="outlined" size="large" sx={{ fontSize: '1.3rem' }}>
                                    Guardar en favoritos
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
                                onClick={() => addProduct(productData)}>
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
                            {userInfo?.name} {userInfo?.apellido}
                        </b>
                    </Typography>
                    <Typography fontSize="1.5rem">
                        <b>Horarios:</b> {productData?.days}
                    </Typography>
                    <Typography fontSize="1.5rem">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta inventore
                        provident velit totam nihil sequi fugiat quia qui dolorem impedit maxime,
                        modi quos maiores rerum repellat numquam dolore libero suscipit!
                    </Typography>
                </Stack>
            </Card>
        </Main>
    );
};
