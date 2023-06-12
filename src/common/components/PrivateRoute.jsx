import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../context';

export const PrivateRoute = ({ children }) => {
    const { user } = useUserContext();

    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};
