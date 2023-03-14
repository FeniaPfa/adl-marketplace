import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { useUserContext } from '../context/userContext';

export const useGetUser = () => {
    const [userData, setUserData] = useState();
    const { user } = useUserContext();

    const getUserData = async () => {
        try {
            const userRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(userRef);
            const data = docSnap.data();
            setUserData(data);
        } catch (err) {
            console.error({ err });
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return { userData };
};
