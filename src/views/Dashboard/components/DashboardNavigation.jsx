import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../../common/Icons';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

export const DashboardNavigation = () => {
    const [value, setValue] = useState('dashboard');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigation
            sx={{
                width: '100%',
                paddingTop: '1rem',
                height: '100%',
                display: { md: 'none' },
                flexWrap: 'wrap',
            }}
            value={value}
            onChange={handleChange}>
            <BottomNavigationAction
                to="/dashboard"
                component={NavLink}
                label="Dashboard"
                value="dashboard"
                icon={<Icons.DashboardIcon />}
            />
            <BottomNavigationAction
                to="editprofile"
                sx={{ textAlign: 'center' }}
                component={NavLink}
                label="Editar Perfil"
                value="editprofile"
                icon={<Icons.AccountCircleIcon />}
            />
            <BottomNavigationAction
                to="favs"
                component={NavLink}
                label="Favoritos"
                value="favorites"
                icon={<Icons.FavoriteIcon />}
            />
            <BottomNavigationAction
                to="addproduct"
                component={NavLink}
                label="Crear"
                value="create"
                icon={<Icons.AddCircleRoundedIcon />}
            />
            <BottomNavigationAction
                to="products"
                component={NavLink}
                label="Publicaciones"
                value="myproducts"
                icon={<Icons.DynamicFeedIcon />}
            />
        </BottomNavigation>
    );
};
