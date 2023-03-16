import { Alert, AlertTitle, Container } from '@mui/material';

export const EmptyCart = () => {
    return (
        <Container maxWidth="sm">
            <Alert variant="outlined" severity="info" sx={{"& .MuiAlert-icon":{fontSize:"5rem"}}}>
                <AlertTitle>Actualmente, tu carrito de compras se encuentra vacío.</AlertTitle>
                Cuando encuentres la clase que más te guste, simplemente añádela a tu carrito de
                compras y sigue los sencillos pasos para finalizar tu compra.
            </Alert>
        </Container>
    );
};
