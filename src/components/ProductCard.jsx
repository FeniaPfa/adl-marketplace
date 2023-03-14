import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase';
import { formatNumber } from '../utils/utils.js';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);


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
        } 
    };

    useEffect(() => {
        getImg();
    }, []);

    return (
        <>
            <Card
                className="product-card"
                sx={{
                    width: 350,
                    cursor: 'pointer',
                }}
                onClick={handleClick}>
                <CardMedia
                    component="img"
                    sx={{ maxHeight: '250px', minWidth: '200px' }}
                    image={image}
                    alt={product.dojo}
                />

                <CardContent>
                    <Stack gap=".3rem" alignItems="center">
                        <Typography
                            variant="overline"
                            fontSize="1rem"
                            fontWeight="bold"
                            sx={{ textTransform: 'uppercase', lineHeight: '1.5' }}>
                            Clases de {product.sport}
                        </Typography>
                        <Typography
                            variant="overline"
                            fontSize="1rem"
                            sx={{ textTransform: 'uppercase', lineHeight: '1.5' }}>
                            {product.age} - {product.level}
                        </Typography>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            textAlign="center"
                            fontFamily="Kanit,sans-serif"
                            sx={{ letterSpacing: '.3rem' }}>
                            {product.dojo}
                        </Typography>

                        <Typography variant="subtitle2" fontSize="1.2rem">
                            {product.city}
                        </Typography>
                        <Typography
                            variant="h4"
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
