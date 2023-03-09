import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    List,
    ListItem,
    Stack,
    Typography,
} from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../config/firebase';
import { Main } from '../containers/Main';
import { useGetData } from '../hooks/useGetData';
import { formatNumber } from '../utils/utils.js';

export const ProductPage = () => {
    const { id } = useParams();
    const [img, setImg] = useState();

    const { products, setLoading, loading } = useGetData();

    const productData = products.find((item) => item.id === id);
    console.log(productData);
    const getImg = async () => {
        const imgRef = ref(storage, `products-img/${id}`);
        try {
            const url = await getDownloadURL(imgRef);
            setImg(url);
        } catch (err) {
            console.log('Error al descagar la imagen', err);
        } finally {
        }
    };
    useEffect(() => {
        getImg();
    }, []);

    const listStyle = {
        display: 'flex',
        gap: {xs: "1rem",md :"5rem"},
        color: '#455a64',
        fontWeight: 'bold',
        flexWrap:{xs:"wrap",md:"noWrap"}
    };

    if (!productData) {
        return <p>Loading</p>;
    }

    return (
        <Main>
            <Container maxWidth="md">
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '.3rem 1.2rem 1.2rem',
                        gap: '1rem',
                    }}>
                    <Box sx={{ display: 'flex', gap:"1rem", alignItems:"center", flexWrap:"wrap" }}>
                        <CardMedia
                            component="img"
                            title={productData?.sport}
                            image={img}
                            sx={{ width: {xs:"100%",md:'40%'}, objectFit: 'cover', aspectRatio:{md:"1/1"} }}
                        />

                        <CardContent
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '.6rem',
                                flexGrow: 1,
                            }}>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{ color: '#455a64' }}>
                                <Typography variant="subtitle2" fontWeight="bold">
                                    Clases de {productData?.sport}
                                </Typography>
                                <Typography variant="subtitle2" fontWeight="bold">
                                    Viña del Mar
                                </Typography>
                            </Stack>
                            <Typography variant="h4" fontWeight="bold">
                                {productData?.dojo}
                            </Typography>
                            <List disablePadding>
                                <ListItem sx={listStyle}>
                                    <span style={{ flexGrow: '1' }}>Dirección:</span>
                                    <span>{productData.place}</span>
                                </ListItem>
                                <ListItem sx={listStyle}>
                                    <span style={{ flexGrow: '1' }}>Nivel:</span>
                                    <span>{productData.level}</span>
                                </ListItem>
                                <ListItem sx={listStyle}>
                                    <span style={{ flexGrow: '1' }}>Edad:</span>
                                    <span>{productData.age}</span>
                                </ListItem>
                            </List>
                            <Typography variant="h4" fontWeight="bold" color="primary">
                                $ {formatNumber(productData?.price)}
                            </Typography>
                            <Stack direction="row" justifyContent="space-around">
                                
                            <Button variant="contained">Añadir al carrito</Button>
                            <Button variant="contained">Guardar en favoritos</Button>
                            </Stack>
                        </CardContent>
                    </Box>
                    {/* <Typography>{productData?.desc}</Typography> */}
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta inventore
                        provident velit totam nihil sequi fugiat quia qui dolorem impedit maxime,
                        modi quos maiores rerum repellat numquam dolore libero suscipit!
                    </Typography>
                </Card>
            </Container>
        </Main>
    );
};
