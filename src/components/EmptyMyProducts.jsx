import { Alert, AlertTitle, Container, Typography } from '@mui/material';

export const EmptyMyProducts = () => {
    return (
        <Container maxWidth="md">
            <Alert variant="outlined" severity="info" sx={{"& .MuiAlert-icon":{fontSize:"5rem"}}}>
                <AlertTitle>Crea una publicacion</AlertTitle>
                <Typography>
                    Al publicar tus clases, podrás conectarte con estudiantes que buscan mejorar sus
                    habilidades en artes marciales y compartir tu conocimiento en una plataforma
                    donde podrás llegar a una gran cantidad de personas interesadas en aprender.
                </Typography>
            </Alert>
        </Container>
    );
};
