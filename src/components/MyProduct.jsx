import { Avatar, Button, Paper, Stack, Typography } from '@mui/material';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { db, deleteFile, storage } from '../config/firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const MyProduct = ({ product, myProducts, setMyProducts }) => {
    const [image, setImage] = useState(null);
    const imgRef = ref(storage, `products-img/${product.id}`);

    const navigate = useNavigate()

    const deleteProduct = async () => {
        const newList = myProducts.filter((item) => item.id !== product.id);
        setMyProducts(newList);
        const productDoc = doc(db, 'products', product.id);
        await deleteDoc(productDoc);
        deleteFile(imgRef);
        console.log('Producto Eliminado');
        console.log(newList);
    };

    const goToEdit = () => {
        console.log("edit")
        navigate(`${product.id}`)
    }

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
                        <Stack>
                            <Typography variant="overline">Clases de {product.sport}</Typography>
                            <Typography>{product.age}</Typography>
                            <Typography><b>Nivel:</b> {product.level}</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction="row" gap="1rem" alignItems="center">
                        <Button variant="outlined" onClick={goToEdit}><EditIcon /> Editar</Button>
                        <Button variant="contained" onClick={deleteProduct}>
                            <DeleteForeverIcon />
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
};
