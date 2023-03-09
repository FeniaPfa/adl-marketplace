import { AppBar, Button, Container, Link, Stack, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { logOut } from '../config/firebase';
import { useUserContext } from '../context/userContext';
import logo from '/logo.svg'

export const Navbar = () => {
    const { user } = useUserContext();

    const routes = [
        { to: '/', text: 'Inicio', private: false },
        { to: '/login', text: 'Ingresar', private: false, publicOnly: true },
        { to: '/register', text: 'Registrarse', private: false, publicOnly: true },
        // { to: '/user/profile', text: 'Mi Perfil', private: true },
        { to: '/cart', text: 'Carrito', private: true },
        { to: '/dashboard', text: 'Dashboard', private: true },
        // { to: "/products", text: "Products", private: false },
    ];

    const handleLogout = () => {
        logOut();
    };

    const activeStyle = {
        fontWeight: 'bold',
    };

    const activeLink = ({ isActive }) => (isActive ? activeStyle : { color: 'white' });

    return (
        <AppBar position="sticky" component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack direction="row" sx={{ alignItems: 'center', gap: '.8rem' }}>
                        <img src={logo} width="35px" />
                        <Typography variant="h5" component="h1" fontWeight="bold" fontFamily="Kanit, sans-serif">
                            TATAMI
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        gap="1.2rem"
                        sx={{ '> a': { color: '#fff' }, alignItems: 'center' }}>
                        {routes.map((item) => {
                            if (item.private && !user) return null;
                            if (item.publicOnly && user) return null;
                            return (
                                <Link
                                    key={item.text}
                                    sx={{ fontSize: '1.2rem' }}
                                    variant="h5"
                                    style={activeLink}
                                    to={item.to}
                                    component={NavLink}>
                                    {item.text}
                                </Link>
                            );
                        })}
                        {user && (
                            <Button
                                variant="outlined"
                                size="large"
                                color="secondary"
                                onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
