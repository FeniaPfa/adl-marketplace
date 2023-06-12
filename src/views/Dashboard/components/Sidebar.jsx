import { NavLink } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
import Icons from '../../../common/Icons';

export const Sidebar = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: '#c62828',
    };
    const activeLink = ({ isActive }) => (isActive ? activeStyle : { color: '#000' });

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 200,
                marginRight: '1rem',
                display: { xs: 'none', md: 'inherit' },
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 250, boxSizing: 'border-box' },
            }}>
            <Toolbar></Toolbar>
            <Box>
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        fontSize: '1.5rem',
                    }}>
                    <ListItem to="/dashboard" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <Icons.DashboardIcon fontSize="large" />
                        </ListItemIcon>
                        Dashboard
                    </ListItem>
                    <ListItem to="editprofile" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <Icons.AccountCircleIcon fontSize="large" />
                        </ListItemIcon>
                        Editar Perfil
                    </ListItem>
                    <ListItem to="favs" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <Icons.FavoriteIcon />
                        </ListItemIcon>
                        Favoritos
                    </ListItem>
                    <ListItem to="addproduct" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <Icons.AddCircleRoundedIcon fontSize="large" />
                        </ListItemIcon>
                        Crear Publicación
                    </ListItem>
                    <ListItem to="products" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <Icons.DynamicFeedIcon fontSize="large" />
                        </ListItemIcon>
                        Mis Publicaciones
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};
