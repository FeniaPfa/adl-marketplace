import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useUserContext } from '../context/userContext';
import { Button, Container, Stack, TextField } from '@mui/material';

export const SetProfile = () => {
    const navigate = useNavigate();
    const { user } = useUserContext();

    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState(false);

    const [userInfo, setUserInfo] = useState({
        name: '',
        apellido: '',
        id: user.uid,
        email: user.email,
        hasAvatar: false,
        favs: [],
    });

    const handleAvatar = (e) => {
        setError(false);
        const fileSize = e.target.files[0].size / 1024 / 1024;
        if (fileSize > 1) {
            setError(true);
            setAvatar(null);
            setUserInfo({ ...userInfo, hasAvatar: false });
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
        const userRef = doc(collection(db, 'users'), user.uid);
        try {
            await setDoc(userRef, userInfo);
            uploadAvatar();
            console.log('Datos Actualizados');
            navigate('/user/profile');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <h1>Actualiza tus datos</h1>
            <Container maxWidth="xs" component="form" onSubmit={handleUpdateUser}>
                <Stack gap="2rem">
                    <TextField
                        required
                        label="Nombre"
                        type="text"
                        placeholder="Nombre..."
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    />
                    <TextField
                        required
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

                    <Button variant="contained" type="submit">
                        Actualizar
                    </Button>
                </Stack>
            </Container>
        </>
    );
};
