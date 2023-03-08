import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../config/firebase';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setError(false);
        console.log(error);
        if (e.target.value.length < 6) {
            setError(true);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register({ email, password });
            navigate('/user/setprofile');
        } catch (err) {
            console.log(err.code, err.message);
        }
    };

    return (
        <>
            <Container component="form" onSubmit={handleRegister} maxWidth="xs">
                <Stack gap="2rem">
                    <Typography fontWeight="bold" variant="h4" textAlign="center">
                        Crea tu cuenta
                    </Typography>
                    <TextField
                        required
                        label="Correo Electrónico"
                        type="email"
                        placeholder="tatami@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        required
                        error={error}
                        inputProps={{ minLength: '6' }}
                        helperText={error ? 'El minimo de la constraseña son 6 caracteres' : ''}
                        label="Contraseña"
                        type="password"
                        placeholder="******"
                        value={password}
                        onChange={handlePassword}
                    />
                    <Button type="submit" variant="contained">
                        Registrarse
                    </Button>
                    <Stack direction="row" gap=".6rem" justifyContent="center">
                        <Typography>¿Ya tienes una cuenta?</Typography>
                        <Link to="/login">Ingresar</Link>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};
