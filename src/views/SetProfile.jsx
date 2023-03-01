import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config/firebase';

export const SetProfile = () => {
    const [userInfo, setUserInfo] = useState({ name: '', avatar: '' });

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        await updateProfile(auth.currentUser, {
            displayName: userInfo.name,
            photoURL: userInfo.avatar,
        });
    };

    return (
        <>
            <h1>Actualiza tus datos</h1>
            <form onSubmit={handleUpdateUser}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
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
