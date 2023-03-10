import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase';
import { formatNumber } from '../utils/utils.js';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

export const Product = ({ product }) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };

    const getImg = async () => {
        const imgRef = ref(storage, `products-img/${product.id}`);

        try {
            const url = await getDownloadURL(imgRef);
            setImage(url);
        } catch (err) {
            console.log('Error al descagar la imagen', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getImg();
    }, []);

    return (
        <>
            <Card
                sx={{
                    width: 250,
                    cursor: 'pointer',
                    '&:hover': { boxShadow: '2px 2px 7px #0000001A' },
                }}
                onClick={handleClick}>
                <CardMedia
                    component="img"
                    sx={{ maxHeight: '150px', minWidth: '200px' }}
                    image={image}
                    alt={product.dojo}
                />

                <CardContent>
                    <Stack gap=".3rem" alignItems="center">
                        <Typography
                            variant="overline"
                            fontWeight="bold"
                            sx={{ textTransform: 'uppercase', lineHeight: '1.5' }}>
                            Clases de {product.sport}
                        </Typography>
                        <Typography
                            variant="overline"
                            sx={{ textTransform: 'uppercase', lineHeight: '1.5' }}>
                            {product.age} - {product.level}
                        </Typography>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            fontFamily="Kanit,sans-serif"
                            sx={{ letterSpacing: '.3rem' }}>
                            {product.dojo}
                        </Typography>
                        <Typography variant="subtitle2">{product.city}</Typography>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            color="primary"
                            sx={{ letterSpacing: '.3rem' }}>
                            $ {formatNumber(product.price)}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
};
