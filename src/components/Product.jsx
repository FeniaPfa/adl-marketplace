import { Button, Card, CardContent, CardMedia, Skeleton, Stack, Typography } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../config/firebase';
import {formatNumber} from '../utils/utils.js'

export const Product = ({ product }) => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        console.log('click');
        // navigate(`/products/${product.id}`);
    };

    const getImg = async () => {
        const imgRef = ref(storage, `products-img/${product.id}`);
        // setLoading(true)
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
        // getDownloadURL(imgRef).then((url) => setImage(url));
        getImg();
    }, []);

    return (
        <>
            <Card
                sx={{
                    maxWidth: 350,
                    cursor: 'pointer',
                    '&:hover': { boxShadow: '2px 2px 7px #0000001A' },
                }}
                onClick={handleClick}>
                {loading ? (
                    <Skeleton variant="rectangular" width={200} height={150} />
                ) : (
                    <CardMedia
                        component="img"
                        sx={{ maxHeight: '150px', minWidth: '200px' }}
                        image={image}
                        alt={product.dojo}
                    />
                )}

                <CardContent>
                    <Stack gap=".6rem">
                        <Typography variant="subtitle2" sx={{ textTransform: 'uppercase' }}>
                            Clases de {product.sport}
                        </Typography>
                        <Typography variant="h5" component="h5" fontWeight="bold">
                            {product.dojo}
                        </Typography>
                        <Typography variant="h5">$ {formatNumber(product.price)}</Typography>
                        {/* <Typography
                            variant="subtitle2"
                            component="span"
                            >
                            {product?.level} - {product?.age}
                        </Typography> */}
                        {/* <Button variant="contained" size="small" onClick={handleClick}>
                            Ver mas
                        </Button> */}
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
};
