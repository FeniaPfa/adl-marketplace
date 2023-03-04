import { updateProfile } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { auth, db, usersCollectionRef } from '../config/firebase';
import { useUserContext } from '../context/userContext';

export const SetProfile = () => {
    const { user } = useUserContext()
    
    const [userInfo, setUserInfo] = useState({ name: '', avatar: null, id: user.uid, email: user.email });

    // crear con setDoc un user en su colleccion

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const userRef = doc(collection(db, "users"), user.uid)
        try {
            await setDoc(userRef, userInfo)
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <>
            <h1>Actualiza tus datos</h1>
            <form onSubmit={handleUpdateUser}>
                <input
                    type="text"
                    placeholder="Nombre y Apellido"
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Foto de perfil"
                    onChange={(e) => setUserInfo({ ...userInfo, avatar: e.target.value })}
                />

                <button type="submit">Actualizar</button>
            </form>
        </>
    );
};
