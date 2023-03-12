import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { Profile } from '../components/Profile';
import { db, storage } from '../config/firebase';
import { Main } from '../containers/Main';
import { useUserContext } from '../context/userContext';

export const DashboardHome = () => {
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
        <>
            <Main>
                <Profile userData={userData} image={image} />
            </Main>
        </>
    );
};
