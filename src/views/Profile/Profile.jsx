import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import { Loading } from '../../common/components';
import { useUserContext } from '../../context';
import { ProfileCard } from './components';

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
        return <Loading />;
    }
    return (
        <>
            <ProfileCard userData={userData} image={image} />
        </>
    );
};
