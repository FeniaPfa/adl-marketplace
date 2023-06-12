import { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { productsCollectionRef, storage } from '../../config/firebase';
import { useUserContext } from '../../context';
import { Button, Container, MenuItem, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    const [fileError, setFileError] = useState(false);

    const [productInfo, setProductInfo] = useState({
        sport: '',
        dojo: '',
        city: '',
        price: 0,
        level: '',
        age: '',
        userId: user.uid,
        days: '',
        adress: '',
        desc: '',
        comments: [],
    });

    const [img, setImg] = useState(null);

    const handleFile = (e) => {
        setFileError(false);
        const fileSize = e.target?.files[0].size / 1024 / 1024;
        if (fileSize > 1) {
            setFileError(true);
            e.target.value = null;
            setImg(null);
            return;
        }
        setImg(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(productInfo, img);
        try {
            const productRef = await addDoc(productsCollectionRef, productInfo);
            const uid = productRef.id;
            const imgRef = ref(storage, `products-img/${uid}`);
            await uploadBytes(imgRef, img);
            console.log('Producto e imagen subidos correctamente');
            navigate(`/products/${uid}`);
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <Container maxWidth="md" component="form" onSubmit={handleSubmit}>
            <Stack gap="2rem">
                <Typography variant="h2" fontFamily="Kanit,sans-serif" fontWeight="bold">
                    Crear Publicación
                </Typography>
                <Stack gap="1.2rem" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Disciplina"
                        placeholder="Karate"
                        onChange={(e) => setProductInfo({ ...productInfo, sport: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Dojo o gym"
                        placeholder="Seishin Dojo"
                        onChange={(e) => setProductInfo({ ...productInfo, dojo: e.target.value })}
                    />
                </Stack>

                <Stack gap="1.2rem" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <TextField
                        required
                        select
                        fullWidth
                        label="Nivel"
                        helperText="Selecciona el nivel de dificultad de la clase"
                        value={productInfo.level}
                        onChange={(e) => setProductInfo({ ...productInfo, level: e.target.value })}>
                        <MenuItem value="Universal">Universal</MenuItem>
                        <MenuItem value="Principiantes">Principiante</MenuItem>
                        <MenuItem value="Intermedio">Intermedio</MenuItem>
                        <MenuItem value="Avanzado">Avanzado</MenuItem>
                    </TextField>
                    <TextField
                        required
                        select
                        fullWidth
                        label="Edad"
                        helperText="Selecciona para que edad son las clases"
                        value={productInfo.age}
                        onChange={(e) => setProductInfo({ ...productInfo, age: e.target.value })}>
                        <MenuItem value="Todas las edades">Todas las edades</MenuItem>
                        <MenuItem value="Niños">Niños</MenuItem>
                        <MenuItem value="Adultos">Adultos</MenuItem>
                    </TextField>
                </Stack>

                <Stack gap="1.2rem" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Ciudad"
                        placeholder="Viña del Mar"
                        onChange={(e) => setProductInfo({ ...productInfo, city: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        required
                        type="number"
                        label="Precio Mensual"
                        placeholder="$"
                        onChange={(e) => setProductInfo({ ...productInfo, price: e.target.valueAsNumber })}
                    />
                </Stack>
                <Stack direction="row" gap="1.2rem">
                    <TextField
                        fullWidth
                        required
                        helperText={
                            fileError ? 'El tamaño maximo de la imagen es 1MB' : 'Sube una imagen acorde a la clase que ofreces'
                        }
                        error={fileError}
                        type="file"
                        inputProps={{ accept: 'image/png, image/jpeg' }}
                        onChange={handleFile}
                    />
                </Stack>
                <TextField
                    required
                    type="text"
                    label="Horarios"
                    placeholder="Lunes, Miercoles y Sabado de 19:00 a 21:00"
                    helperText="Ingresa que días y a que hora son las clases"
                    onChange={(e) => setProductInfo({ ...productInfo, days: e.target.value })}
                />
                <TextField
                    required
                    type="text"
                    label="Dirección Completa"
                    placeholder="Los Alamos 123, Viña del Mar"
                    helperText="Ingresa la calle y numero seguido de la ciudad"
                    onChange={(e) => setProductInfo({ ...productInfo, adress: e.target.value })}
                />

                <TextField
                    required
                    multiline
                    label="Descripción"
                    rows={4}
                    helperText="Ingresa información adicional como duración de las clases, redes sociales u otras formas de contacto"
                    onChange={(e) => setProductInfo({ ...productInfo, desc: e.target.value })}
                />

                <Button variant="contained" type="submit">
                    Publicar
                </Button>
            </Stack>
        </Container>
    );
};
