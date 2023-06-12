import { useState, useEffect, useContext, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Loading } from '../common/components';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
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
};

export const useUserContext = () => useContext(UserContext);
