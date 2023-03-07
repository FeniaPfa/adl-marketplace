import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const MyProduct = ({ product }) => {
    const [image, setImage] = useState(null);
    const imgRef = ref(storage, `products-img/${product.id}`);

    console.log(product);

    useEffect(() => {
        getDownloadURL(imgRef).then((url) => setImage(url));
    }, []);
    return (
        <>
            <Paper sx={{ padding: '1rem' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Avatar
                        src={image}
                        sx={{ width: '80px', height: '80px' }}
                        variant="rounded"
                        alt={product.sport}
                    />

                    <Typography>Clases de {product.sport}</Typography>
                    <Stack direction="row" gap="1rem">
                        <Button variant="contained">Editar</Button>
                        <Button variant="contained">
                            <CloseRoundedIcon />
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
};
