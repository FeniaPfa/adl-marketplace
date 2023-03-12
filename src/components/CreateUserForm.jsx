import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../config/firebase';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';

export const CreateUserForm = ({ setStep }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setError(false);

        if (e.target.value.length < 6) {
            setError(true);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register({ email, password });
            setStep(1);
        } catch (err) {
            console.log(err.code, err.message);
        }
    };
    return (
        <Container component="form" onSubmit={handleRegister} maxWidth="xs">
            <Stack gap="2rem">
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
    );
};
