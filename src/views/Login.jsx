import { Alert, Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../config/firebase';
import { useUserContext } from '../context/userContext';

export const Login = () => {
    const navigate = useNavigate();
    const { user } = useUserContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ status: false, message: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        setError({status: false, message:""})
        try {
            await login({ email, password });
            navigate('/user/profile');
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
        <>
            <Container maxWidth="xs" component="form" onSubmit={handleLogin}>
                <Stack gap="2rem">
                    <Typography fontWeight="bold" variant="h4" textAlign="center">
                        Bienvenido a Tatami
                    </Typography>
                    {error.status && <Alert severity='error'>{error.message}</Alert>}
                    <TextField
                        required
                        label="Correo Electronico"
                        type="email"
                        placeholder="tatami@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        label="Contraseña"
                        type="password"
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        inputProps={{ minLength: 6 }}
                    />
                    <Button variant="contained" type="submit">
                        Ingresar
                    </Button>
                    <Stack direction="row" gap=".6rem" justifyContent="center">
                        <Typography>¿No tienes una cuenta?</Typography>
                        <Link to="/register">Registrarse</Link>
                    </Stack>
                </Stack>
            </Container>
            {user ? user.email : 'none'}
        </>
    );
};
