import { Alert, AlertTitle, Container } from '@mui/material';

export const EmptyFavs = () => {
    return (
        <Container maxWidth="sm">
            <Alert variant='outlined' severity="info" sx={{"& .MuiAlert-icon":{fontSize:"5rem"}}}>
                <AlertTitle>No has guardado ningun favorito</AlertTitle>
                Si has encontrado una clase que te interesa, guarda la publicación en tus favoritos
                para tenerla siempre a mano y no perderla de vista.
            </Alert>
        </Container>
    );
};
