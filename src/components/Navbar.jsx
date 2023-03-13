import { NavLink } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { logOut } from '../config/firebase';
import { useUserContext } from '../context/userContext';
import { useCartContext } from '../context/CartContext';
import logo from '/logo.svg';
import {
    AppBar,
    Badge,
    Button,
    Container,
    Divider,
    Link,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
    const { user } = useUserContext();
    const { total } = useCartContext()

    const routes = [
        { to: '/', text: 'Inicio', private: false },
        { to: '/login', text: 'Ingresar', private: false, publicOnly: true },
        { to: '/register', text: 'Registrarse', private: false, publicOnly: true },
        { to: '/dashboard', text: 'Dashboard', private: true },
        // { to: '/cart', text: 'Carrito', private: true },
        // { to: "/products", text: "Products", private: false },
    ];

    const handleLogout = () => {
        logOut();
    };

    const linkStyle = {
        fontSize: '1.2rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textDecoration: 'none',
    };

    const activeStyle = {
        fontWeight: 'bold',
    };

    const activeLink = ({ isActive }) => (isActive ? activeStyle : { color: 'white' });

    return (
        <AppBar
            position="sticky"
            component="nav"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Stack
                        direction="row"
                        sx={{
                            alignItems: 'center',
                            gap: '.8rem',
                            textDecoration: 'none',
                            color: '#fff',
                        }}
                        to="/"
                        component={RouterLink}>
                        <img src={logo} width="35px" />
                        <Typography
                            variant="h5"
                            component="h1"
                            fontWeight="bold"
                            fontFamily="Kanit, sans-serif">
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
                                <>
                                    <Link
                                        className="nav-link"
                                        key={item.text}
                                        sx={linkStyle}
                                        variant="h5"
                                        style={activeLink}
                                        to={item.to}
                                        component={NavLink}>
                                        {item.text}
                                    </Link>
                                    <Divider orientation="vertical" variant="middle" flexItem />
                                </>
                            );
                        })}
                        {user && (
                            <>
                                <Link
                                className='nav-link'
                                    sx={linkStyle}
                                    variant="h5"
                                    style={activeLink}
                                    to="/cart"
                                    component={NavLink}>
                                        Carrito
                                </Link>
                                <Link
                                    sx={linkStyle}
                                    variant="h5"
                                    style={activeLink}
                                    to="/cart"
                                    component={NavLink}>
                                    <Badge badgeContent={total.quantity} color="warning">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Link>
                                <Button variant="outlined" color="secondary" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </>
                        )}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
