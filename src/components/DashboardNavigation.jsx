import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { NavLink } from 'react-router-dom';

export const DashboardNavigation = () => {
    const [value, setValue] = useState('dashboard');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            sx={{ width: '100%', paddingTop: '1rem', height: '100%',display:{md:"none"}, flexWrap:"wrap" }}
            value={value}
            onChange={handleChange}>
            <BottomNavigationAction
                to="/dashboard"
                component={NavLink}
                label="Dashboard"
                value="dashboard"
                icon={<DashboardIcon />}
            />
            <BottomNavigationAction
                to="editprofile"
                component={NavLink}
                label="Editar Perfil"
                value="editprofile"
                icon={<AccountCircleIcon />}
            />
            <BottomNavigationAction
                to="favs"
                component={NavLink}
                label="Favoritos"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                to="addproduct"
                component={NavLink}
                label="Crear"
                value="create"
                icon={<AddCircleRoundedIcon />}
            />
            <BottomNavigationAction
                to="products"
                component={NavLink}
                label="Publicaciones"
                value="myproducts"
                icon={<DynamicFeedIcon />}
            />
        </BottomNavigation>
    );
};
