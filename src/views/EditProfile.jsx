import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useUserContext } from '../context/userContext';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';

export const EditProfile = () => {
    const navigate = useNavigate();
    const { user } = useUserContext();

    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState(false);

    const [userInfo, setUserInfo] = useState({});
    const userRef = doc(db, 'users', user.uid);

    const getUser = async () => {
        try {
            const docSnap = await getDoc(userRef);
            const data = docSnap.data();
            setUserInfo(data);
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleAvatar = (e) => {
        setError(false);
        const fileSize = e.target.files[0].size / 1024 / 1024;
        if (fileSize > 1) {
            setError(true);
            setAvatar(null);
            return;
        }
        setUserInfo({ ...userInfo, hasAvatar: true });
        setAvatar(e.target.files[0]);
    };

    const uploadAvatar = async () => {
        if (!avatar) {
            return;
        }
        const filesFolderRef = ref(storage, `users-avatar/${user.uid}`);
        try {
            await uploadBytes(filesFolderRef, avatar);
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(userRef, userInfo);
            uploadAvatar();
            console.log('Datos Actualizados');
            navigate('/dashboard');
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Container maxWidth="sm" component="form" onSubmit={handleUpdateUser}>
            <Stack gap="2rem">
                <Typography variant="h2" fontWeight="bold" fontFamily="Kanit,sans-serif" mb="2rem">
                    Actualiza tus datos
                </Typography>
                <TextField
                    value={userInfo?.name || ''}
                    label="Nombre"
                    type="text"
                    placeholder="Nombre..."
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                />
                <TextField
                    value={userInfo?.apellido || ''}
                    label="Apellido"
                    type="text"
                    placeholder="Apellido..."
                    onChange={(e) => setUserInfo({ ...userInfo, apellido: e.target.value })}
                />
                <TextField
                    helperText={
                        error
                            ? 'El tamaño maximo de la imagen es 1MB'
                            : 'Sube una imagen de perfil menor a 1mb'
                    }
                    error={error}
                    type="file"
                    inputProps={{ accept: 'image/png, image/jpeg' }}
                    onChange={handleAvatar}
                />

                <Button variant="contained" size="large" type="submit">
                    Actualizar
                </Button>
            </Stack>
        </Container>
    );
};
