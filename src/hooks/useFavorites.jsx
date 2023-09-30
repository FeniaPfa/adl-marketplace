import { useEffect, useState } from 'react';
import { getFavorites } from '../services/favorites';
import { useUserContext } from '../context';

export const useFavorites = () => {
    const { userData } = useUserContext();
    const [favoritesData, setFavoritesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getFavoritesData = async () => {
        try {
            const favs = await getFavorites(userData.favs);

            setFavoritesData(favs);
            console.log(favs);
        } catch (err) {
            console.log(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (userData) {
            getFavoritesData();
        }
    }, [userData]);

    return {
        favoritesData,
        loading,
        error,
    };
};
