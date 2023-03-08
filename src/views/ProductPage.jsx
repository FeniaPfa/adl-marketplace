import {
    Avatar,
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
        gap: '5rem',
        color: '#455a64',
        fontWeight: 'bold',
    };

    if (!productData) {
        return <p>Loading</p>;
    }

    return (
        <>
            <Container maxWidth="md">
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '.1rem 1rem 1rem',
                        gap: '1rem',
                    }}>
                    <Box sx={{ display: 'flex', gap:"1rem", alignItems:"center" }}>
                        <CardMedia
                            component="img"
                            title={productData?.sport}
                            image={img}
                            sx={{ width: '40%', objectFit: 'cover', aspectRatio:"1/1" }}
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

                            <Button variant="contained">Añadir</Button>
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
        </>
    );
};
