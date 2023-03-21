import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { Loading } from '../components/Loading';
import { auth } from '../config/firebase';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);

    // Check si user está activo
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('UserContext', user);
            setUser(user);
        });

        return unsubscribe;
        // unsubscribe()
    }, []);

    if (user === false) return <Loading />;

    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);
