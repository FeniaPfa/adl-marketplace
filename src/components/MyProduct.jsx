import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteDoc, doc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import { db, deleteFile, getImg, storage } from '../config/firebase';
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
    };

    const goToProduct = () => {
        navigate(`/products/${product.id}`);
    };

    const goToEdit = () => {
        console.log('edit');
        navigate(`${product.id}`);
    };

    useEffect(() => {
        getImg(product.id, setImage);
    }, []);
    return (
        <>
            <Paper sx={{ padding: '1.5rem 2rem' }}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    gap="1rem"
                    sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Stack
                        gap="2rem"
                        alignItems="center"
                        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Avatar
                            src={image}
                            sx={{ width: '150px', height: '150px' }}
                            variant="rounded"
                            alt={product.sport}
                        />
                        <Stack justifyContent="center" gap=".5rem">
                            <Typography
                                variant="overline"
                                fontSize="1.2rem"
                                fontWeight="bold"
                                sx={{
                                    lineHeight: '1.5',
                                    textAlign: { xs: 'center', sm: 'initial' },
                                }}>
                                Clases de {product.sport}
                            </Typography>
                            <Typography
                                fontSize="1.2rem"
                                variant="overline"
                                sx={{
                                    lineHeight: '1.5',
                                    textAlign: { xs: 'center', sm: 'initial' },
                                }}>
                                {product.age} - {product.level}
                            </Typography>
                            <Typography
                                fontWeight="bold"
                                variant="h4"
                                fontFamily="Kanit,sans-serif">
                                {product.dojo}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack
                        direction="row"
                        gap="1rem"
                        alignItems="center"
                        justifyContent="center"
                        flexWrap="wrap">
                        <Button variant="outlined" size="large" onClick={goToProduct}>
                            <VisibilityIcon fontSize="large" />
                        </Button>
                        <Button variant="outlined" size="large" onClick={goToEdit}>
                            <EditIcon fontSize="large" />
                        </Button>
                        <Button variant="contained" size="large" onClick={deleteProduct}>
                            <DeleteForeverIcon fontSize="large" />
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
};
