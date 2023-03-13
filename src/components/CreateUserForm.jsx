import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../config/firebase';
import { Alert, Button, Container, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

export const CreateUserForm = ({ setStep }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [registerError, setRegisterError] = useState({status:false,message:""})

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
            console.log({err});
            if(err.code === "auth/email-already-in-use"){
                setRegisterError({status:true, message:"Esta cuenta ya existe"})
            }
        }
    };
    return (
        <Container component="form" onSubmit={handleRegister} maxWidth="xs">
            <Stack gap="2rem">
            {registerError.status && <Alert severity="error">{registerError.message}</Alert>}
                <TextField
                    required
                    label="Correo Electrónico"
                    type="email"
                    placeholder="tatami@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
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
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button type="submit" variant="contained" size="large">
                    Siguente
                </Button>
                <Stack gap=".6rem" alignItems="center">
                        <Typography fontSize="1.2rem">¿Ya tienes una cuenta?</Typography>
                        <Typography
                            component={Link}
                            to="/login"
                            color="primary"
                            fontWeight="bold"
                            sx={{textDecoration:"none"}}
                            fontSize="1.2rem">
                            Ingresar
                        </Typography>
                    </Stack>
            </Stack>
        </Container>
    );
};
