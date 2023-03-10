import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../config/firebase';
import { useUserContext } from '../context/userContext';
import { Main } from '../containers/Main';
import DefaultImg from '/defaultavatar.svg';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';

export const Profile = () => {
    const { user } = useUserContext();
    const [userData, setUserData] = useState();
    const [image, setImage] = useState(null);

    const userRef = doc(db, 'users', user.uid);

    const getUser = async () => {
        try {
            const docSnap = await getDoc(userRef);
            const data = docSnap.data();
            const imgRef = ref(storage, `users-avatar/${user.uid}`);
            if (data.hasAvatar) {
                const url = await getDownloadURL(imgRef);
                setImage(url);
            }
            setUserData(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    if (!userData) {
        return <p>Cargando...</p>;
    }

    return (
        <Main>
            <Paper sx={{ padding: '2rem' }}>
                <Stack direction="row" gap="2rem">
                    <Avatar
                        src={image ? image : DefaultImg}
                        alt={userData.name}
                        sx={{ width: '200px', height: '200px' }}
                    />
                    <Box>
                        <Typography variant="h2" fontFamily="Kanit,sans-serif" fontWeight="bold">
                            {userData.name} {userData.apellido}
                        </Typography>

                        <p>email: {userData.email}</p>
                    </Box>
                </Stack>
            </Paper>
        </Main>
    );
};
