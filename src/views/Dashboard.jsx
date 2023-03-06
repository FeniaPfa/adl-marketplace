import { Box, Button, Container, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export const Dashboard = () => {
    const dashboardLinks = [
        // { text: 'Mi Perfil', to: '/' },
        { text: 'Favoritos', to: 'favs' },
        { text: 'Mis Publicaciones', to: '/dashboard' },
        { text: 'Agregar Publicaciones', to: 'addproduct' },
    ];
    return (
        <>
            <Box>
                <Stack direction="row" gap="1rem">
                    {dashboardLinks.map((item) => (
                        <Button key={item.text} variant="contained" to={item.to} component={Link}>
                            {item.text}
                        </Button>
                    ))}
                </Stack>
            </Box>

            <Box margin="2rem auto">
                <Outlet />
            </Box>
        </>
    );
};
