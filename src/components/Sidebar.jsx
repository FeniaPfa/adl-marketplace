import { NavLink } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DashboardIcon from '@mui/icons-material/Dashboard';

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
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
            }}>
            <Toolbar></Toolbar>
            <Box>
                <List sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <ListItem to="/dashboard" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        Dashboard
                    </ListItem>
                    <ListItem to="editprofile" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        Editar Perfil
                    </ListItem>
                    <ListItem to="favs" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <FavoriteIcon />
                        </ListItemIcon>
                        Favoritos
                    </ListItem>
                    <ListItem to="addproduct" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <AddCircleRoundedIcon />
                        </ListItemIcon>
                        Crear Publicación
                    </ListItem>
                    <ListItem to="products" component={NavLink} style={activeLink}>
                        <ListItemIcon>
                            <DynamicFeedIcon />
                        </ListItemIcon>
                        Mis Publicaciones
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};
