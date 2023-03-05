import { Box, Button, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../config/firebase';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)

    const navigate = useNavigate();


    const handlePassword = (e) => {
      setPassword(e.target.value)
      setError(false)
      console.log(error)
      if(e.target.value.length < 6){
        setError(true)
      } 
    }

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
            <h1>Crea tu usuario</h1>
            <Container component="form" onSubmit={handleRegister} maxWidth="sm">
                <Stack gap="2rem">
                    <TextField
                        required
                        label="Correo Electrónico"
                        type="email"
                        placeholder="Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        required
                        error={error}
                        inputProps={{minLength:"6"}}
                        helperText={error ? "El minimo de la constraseña son 6 caracteres" : ""}
                        label="Contraseña"
                        type="password"
                        placeholder="Password..."
                        value={password}
                        onChange={handlePassword}
                    />
                    <Button type="submit" variant="contained">
                        Registrarse
                    </Button>
                </Stack>
            </Container>
        </>
    );
};
