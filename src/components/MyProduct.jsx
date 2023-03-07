import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { db, deleteFile, storage } from '../config/firebase';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { deleteDoc, doc } from 'firebase/firestore';

export const MyProduct = ({ product, myProducts, setMyProducts }) => {
    const [image, setImage] = useState(null);
    const imgRef = ref(storage, `products-img/${product.id}`);

    const deleteProduct = async () => {
        const newList = myProducts.filter((item) => item.id !== product.id);
        setMyProducts(newList);
        const productDoc = doc(db, 'products', product.id);
        await deleteDoc(productDoc);
        deleteFile(imgRef);
        console.log('Producto Eliminado');
        console.log(newList);
    };

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
                        <Button variant="contained" onClick={deleteProduct}>
                            <CloseRoundedIcon />
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
};
