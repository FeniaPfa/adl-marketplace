import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, deleteFile, storage } from '../config/firebase';
import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MyProduct = ({ product, myProducts, setMyProducts }) => {
    const [image, setImage] = useState(null);
    const imgRef = ref(storage, `products-img/${product.id}`);

    const navigate = useNavigate();

    const deleteProduct = async () => {
        const newList = myProducts.filter((item) => item.id !== product.id);
        setMyProducts(newList);
        const productDoc = doc(db, 'products', product.id);
        await deleteDoc(productDoc);
        deleteFile(imgRef);
        console.log('Producto Eliminado');
        console.log(newList);
    };

    const goToProduct = () => {
        navigate(`/products/${product.id}`);
    };

    const goToEdit = () => {
        console.log('edit');
        navigate(`${product.id}`);
    };

    useEffect(() => {
        getDownloadURL(imgRef).then((url) => setImage(url));
    }, []);
    return (
        <>
            <Paper sx={{ padding: '1rem' }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" gap="1rem">
                        <Avatar
                            src={image}
                            sx={{ width: '80px', height: '80px' }}
                            variant="rounded"
                            alt={product.sport}
                        />
                        <Stack justifyContent="center" gap=".2rem">
                            <Typography
                                variant="overline"
                                fontWeight="bold"
                                sx={{ lineHeight: '1.5' }}>
                                Clases de {product.sport}
                            </Typography>
                            <Typography variant="overline" sx={{ lineHeight: '1.5' }}>
                                {product.age} - {product.level}
                            </Typography>
                            <Typography fontWeight="bold" fontFamily="Kanit,sans-serif">
                                {product.dojo}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack direction="row" gap="1rem" alignItems="center">
                        <Button variant="outlined" onClick={goToProduct}>
                            <VisibilityIcon />
                        </Button>
                        <Button variant="outlined" onClick={goToEdit}>
                            <EditIcon />
                        </Button>
                        <Button variant="contained" onClick={deleteProduct}>
                            <DeleteForeverIcon />
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
};
