import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import { Main } from '../containers/Main';
import { useCartContext } from '../context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CartItem } from '../components/CartItem';
import { formatNumber } from '../utils/utils.js';

export const Cart = () => {
    const { cart, total } = useCartContext();
    console.log(cart);
    if (cart.length === 0) return <p>carrito vacio</p>;
    return (
        <Main>
            
            {/* Tabla */}
            <Typography mb="2rem" variant='h3' fontWeight="bold" fontFamily="Kanit,sans-serif">Mi Carrito</Typography>
            <Stack gap="1.5rem" alignItems="center">
                <TableContainer component={Paper} variant="outlined">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right"></TableCell>
                                <TableCell>Clases</TableCell>
                                <TableCell align="right">Dojo </TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Meses</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((item) => (
                                <CartItem key={item.id} product={item} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* </Paper> */}
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
                <Button variant="contained" size="large" sx={{ alignSelf: 'flex-end' }}>
                    Comprar
                </Button>
            </Stack>
        </Main>
    );
};
