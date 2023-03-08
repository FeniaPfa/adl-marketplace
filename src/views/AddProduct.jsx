import {
    Box,
    Button,
    Container,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { addDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { productsCollectionRef, storage, usersCollectionRef } from '../config/firebase';
import { useUserContext } from '../context/userContext';

export const AddProduct = () => {
    const { user } = useUserContext();

    const [productInfo, setProductInfo] = useState({
        sport: '',
        dojo: '',
        time: '',
        price: 0,
        level: '',
        age: '',
        userId: user.uid,
        days: '',
        place: '',
        desc: '',
    });

    const [img, setImg] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(productInfo, img);
        try {
            const productRef = await addDoc(productsCollectionRef, productInfo);
            const uid = productRef.id;
            const imgRef = ref(storage, `products-img/${uid}`);
            await uploadBytes(imgRef, img);
            console.log('Producto e imagen subidos correctamente');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <Container maxWidth="sm" component="form" onSubmit={handleSubmit}>
            <Stack gap="2rem">
                <Typography variant="h4">Agregar Publicación</Typography>
                <Stack direction="row" gap="1.2rem">
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
                        label="Dojo o institución"
                        placeholder="Seishin Dojo"
                        onChange={(e) => setProductInfo({ ...productInfo, dojo: e.target.value })}
                    />
                </Stack>

                <Stack direction="row" gap="1.2rem">
                    <TextField
                        required
                        select
                        fullWidth
                        label="Nivel"
                        helperText="Selecciona el nivel de dificultad de la clase"
                        value={productInfo.level}
                        // defaultValue="Universal"
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
                        // defaultValue="Todas las edades"
                        onChange={(e) => setProductInfo({ ...productInfo, age: e.target.value })}>
                        <MenuItem value="Todas las edades">Todas las edades</MenuItem>
                        <MenuItem value="Niños">Niños</MenuItem>
                        <MenuItem value="Adultos">Adultos</MenuItem>
                    </TextField>
                </Stack>

                <Stack direction="row" gap="1.2rem">
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Duración"
                        placeholder="2 Horas"
                        onChange={(e) => setProductInfo({ ...productInfo, time: e.target.value })}
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
                        type="file"
                        inputProps={{ accept: 'image/png, image/jpeg' }}
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                </Stack>
                <TextField
                    required
                    type="text"
                    label="Horarios"
                    placeholder="Lunes, Miercoles y Sabado de 19:00 a 21:00"
                    helperText="Ingresa que dias y a que hora son las clases"
                    onChange={(e) => setProductInfo({ ...productInfo, days: e.target.value })}
                />
                <TextField
                    required
                    type="text"
                    label="Dirección"
                    placeholder="Los Alamos 123, Viña del Mar"
                    helperText="Ingresa la calle y numero seguido de la ciudad"
                    onChange={(e) => setProductInfo({ ...productInfo, place: e.target.value })}
                />

                <TextField
                    required
                    multiline
                    label="Descripción"
                    rows={4}
                    placeholder="Clases de karate para nivel (principiante, todos los niveles o avanzado)
Para todas las edades o (niños de x hasta x años o adultos)
                        "
                    helperText="Ingresa información adicional como nivel requerido o edad requerida para la clase"
                    onChange={(e) => setProductInfo({ ...productInfo, desc: e.target.value })}
                />

                <Button variant="contained" type="submit">
                    Publicar
                </Button>
            </Stack>
        </Container>
    );
};
