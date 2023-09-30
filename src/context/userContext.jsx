import { useState, useEffect, useContext, createContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, disconnect } from '../config/firebase';
import { Loading } from '../common/components';
import { getUser } from '../services/user';

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [userData, setUserData] = useState(false);

    const getUserData = async (id) => {
        const userRes = await getUser(id);
        setUserData(userRes);
        console.log(userRes);
    };

    const logOut = () => {
        setUser(false);
        setUserData(false);
        disconnect();
    };

    // Check si user está activo
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (auth) => {
            if (auth) {
                setUser({ uid: auth.uid });
                getUserData(auth.uid);
            }
        });

        return unsubscribe;
        // unsubscribe()
    }, []);

    // if (user === false) return <Loading />;

    return <UserContext.Provider value={{ user, userData, setUserData, logOut }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
