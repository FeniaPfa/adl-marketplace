import { Alert, AlertTitle, Container, Typography } from '@mui/material';

export const EmptyAlert = ({width, type}) => {

    const alerts = {
        products: {
            title: 'Crea una publicacion',
            text: 'Al publicar tus clases, podrás conectarte con estudiantes que buscan mejorar sus habilidades en artes marciales y compartir tu conocimiento en una plataforma   donde podrás llegar a una gran cantidad de personas interesadas en aprender.',
        },
        favs: {
            title: 'No has guardado ningun favorito',
            text: 'Si has encontrado una clase que te interesa, guarda la publicación en tus favoritos para tenerla siempre a mano y no perderla de vista.',
        },
        cart: {
            title: 'Actualmente, tu carrito de compras se encuentra vacío.',
            text: 'Cuando encuentres una clase que te guste, simplemente añádela a tu carrito de compras y sigue los sencillos pasos para finalizar tu compra.',
        },
        comments: {
            title: 'Aun no hay comentarios.',
            text: '¿Has tomado esta clase? ¡Comparte tu opinión y ayuda a otros usuarios a tomar una decisión informada!',
        },
    };

    return (
        <Container maxWidth={width}>
            <Alert
                variant="outlined"
                severity="info"
                sx={{ '& .MuiAlert-icon': { fontSize: '5rem' } }}>
                <AlertTitle>{alerts[type].title}</AlertTitle>
                <Typography>{alerts[type].text}</Typography>
            </Alert>
        </Container>
    );
};
