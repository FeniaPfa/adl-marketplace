import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../config/firebase';
import { Alert, Button, Container, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import Icons from '../../common/Icons';
import { PublicOnly } from '../../common/components/PublicOnly';

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ status: false, message: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        setError({ status: false, message: '' });
        try {
            await login({ email, password });
            navigate('/dashboard');
        } catch (err) {
            // console.log({ err });
            if (err.code == 'auth/user-not-found') {
                setError({ status: true, message: 'Correo invalido' });
            }
            if (err.code == 'auth/wrong-password') {
                setError({ status: true, message: 'Contraseña incorrecta' });
            }
        }
    };
    return (
        <PublicOnly>
            <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
                <Container maxWidth="xs" component="form" onSubmit={handleLogin}>
                    <Stack gap="2rem">
                        <Typography fontWeight="bold" variant="h4" textAlign="center">
                            Bienvenido a Tatami
                        </Typography>
                        {error.status && <Alert severity="error">{error.message}</Alert>}
                        <TextField
                            required
                            label="Correo Electronico"
                            type="email"
                            placeholder="tatami@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icons.EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            required
                            label="Contraseña"
                            type="password"
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            inputProps={{ minLength: 6 }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icons.LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" type="submit">
                            Ingresar
                        </Button>
                        <Stack gap=".6rem" alignItems="center">
                            <Typography fontSize="1.2rem">¿No tienes una cuenta?</Typography>
                            <Typography
                                component={Link}
                                to="/register"
                                color="primary"
                                fontWeight="bold"
                                sx={{ textDecoration: 'none' }}
                                fontSize="1.2rem">
                                Registrarse
                            </Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
        </PublicOnly>
    );
};
