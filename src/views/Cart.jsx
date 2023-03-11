import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material"
import { Main } from "../containers/Main"
import { useCartContext } from "../context/CartContext"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableItem } from "../components/TableItem";
import { formatNumber } from '../utils/utils.js';




export const Cart = () => {
  const {cart, total} = useCartContext()
  console.log(cart)
  if(cart.length === 0) return <p>carrito vacio</p>
  return (
    <Main>
      {/* <Paper variant="outlined" sx={{background:"#fff"}}> */}
        {/* Tabla */}
        <Stack gap="1.5rem" alignItems="center">

      <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell>Clases</TableCell>
            <TableCell align="right">Dojo </TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {cart.map((item) => <TableItem product={item} />)}
        </TableBody>
      </Table>
      </TableContainer>
      {/* </Paper> */}
      <Paper variant="outlined" sx={{alignSelf:"flex-end", padding:"1rem 2rem"}}>
      <Typography p={1}>Total: ${formatNumber(total.price)}</Typography>
      <Divider />
      <Typography p={1}>Unidades: {total.quantity}</Typography>
      </Paper>
      <Button variant="contained" sx={{alignSelf:"flex-end"}}>Comprar</Button>
        </Stack>
    </Main>
  )
}
