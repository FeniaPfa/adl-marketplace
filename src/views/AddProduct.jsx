import { Button, Container, Stack, TextField, Typography } from '@mui/material';

export const AddProduct = () => {
    return (
        <Container maxWidth="sm" component="form">
            <Stack gap="2rem">
                <Typography variant="h4">Agregar Publicación</Typography>
                <Stack direction="row" gap="1.2rem">
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Disciplina"
                        placeholder="Karate"
                    />
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Dojo o institución"
                        placeholder="Seishin Dojo"
                    />
                </Stack>

                <Stack direction="row" gap="1.2rem">
                    <TextField
                        fullWidth
                        required
                        type="text"
                        label="Duración"
                        placeholder="2 Horas"
                    />
                    <TextField
                        fullWidth
                        required
                        type="number"
                        label="Precio Mensual"
                        placeholder="$"
                    />
                </Stack>
                <Stack direction="row" gap="1.2rem">
                    <TextField
                        fullWidth
                        required
                        type="file"
                        inputProps={{ accept: 'image/png, image/jpeg' }}
                    />
                </Stack>
                <TextField
                    required
                    type="text"
                    label="Horarios"
                    placeholder="Lunes, Miercoles y Sabado de 19:00 a 21:00"
                    helperText="Ingresa que dias y a que hora son las clases"
                />
                <TextField
                    required
                    type="text"
                    label="Dirección"
                    placeholder="Los Alamos 123, Viña del Mar"
                    helperText="Ingresa la calle y numero seguido de la ciudad"
                />

                <TextField
                    required
                    multiline
                    label="Descripción"
                    rows={4}
                    placeholder="Clases de karate para nivel (principiante, todos los niveles o avanzado)
Para todas las edades o (niños de x hasta x años o adultos)
                        "
                    helperText="Ingresa información adicional como nivel requerido o edad requerida para la clase"
                    // onChange={(e) => setDesc(e.target.value)}
                />

                <Button variant="contained" type="submit">
                    Publicar
                </Button>
            </Stack>
        </Container>
    );
};
