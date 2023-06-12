import {
    Button,
    Divider,
    Paper,
    Stack,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useCartContext, useUserContext } from '../../context';
import { CartItem } from './components';
import { EmptyAlert, Footer, Layout } from '../../common/components';
import { formatNumber, payAlert } from '../../common/utils';

export const Cart = () => {
    const { cart, total, resetCart } = useCartContext();

    const { user } = useUserContext();

    return (
        <>
            <Layout>
                {/* Tabla */}
                <Typography mb="2rem" variant="h3" fontWeight="bold" fontFamily="Kanit,sans-serif">
                    Mi Carrito
                </Typography>
                <Stack gap="1.5rem" alignItems="center">
                    <TableContainer component={Paper} variant="outlined">
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right"></TableCell>
                                    <TableCell>Clases</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">Meses</TableCell>
                                    <TableCell align="right">Subtotal</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((item) => (
                                    <CartItem key={item.id} product={item} user={user} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {cart.length === 0 && <EmptyAlert width="sm" type="cart" />}
                    {/* </Paper> */}
                    <Stack direction="row" justifyContent="flex-end" width="100%" alignItems="center" gap="2rem">
                        <Button variant="outlined" onClick={resetCart} sx={{ alignSelf: 'flex-start' }}>
                            Eliminar todos
                        </Button>
                        <Paper variant="outlined" sx={{ alignSelf: 'flex-end', padding: '1rem 2rem' }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography p={1} fontWeight="bold">
                                    Total:
                                </Typography>
                                <Typography p={1}>${formatNumber(total.price)}</Typography>
                            </Stack>
                            <Divider />
                            <Stack direction="row" justifyContent="space-between">
                                <Typography p={1} fontWeight="bold">
                                    Unidades:
                                </Typography>
                                <Typography p={1}>{total.quantity}</Typography>
                            </Stack>
                        </Paper>
                    </Stack>
                    <Button onClick={payAlert} variant="contained" size="large" sx={{ alignSelf: 'flex-end' }}>
                        Comprar
                    </Button>
                </Stack>
            </Layout>
            <Footer />
        </>
    );
};
