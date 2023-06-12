import { useEffect, useState } from 'react';
import { formatNumber } from '../../../common/utils';
import { getImg } from '../../../config/firebase.js';
import { useCartContext } from '../../../context';
import { Avatar, IconButton, Stack, TableCell, TableRow, Typography } from '@mui/material';
import Icons from '../../../common/Icons.js';

export const CartItem = ({ product, user }) => {
    const [img, setImg] = useState();
    const { addProduct, removeProduct, deleteProduct } = useCartContext();

    useEffect(() => {
        getImg(product.id, setImg);
    }, []);

    return (
        <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">
                <Avatar src={img} variant="rounded" sx={{ width: '50px', height: '50px' }} />
            </TableCell>
            <TableCell component="th" scope="row">
                <Stack>
                    <Typography variant="overline">{product?.dojo}</Typography>
                    {product?.sport}
                </Stack>
            </TableCell>
            <TableCell align="right">$ {formatNumber(product?.price)}</TableCell>
            <TableCell align="right">
                <IconButton color="primary" onClick={() => removeProduct(product)}>
                    <Icons.RemoveRoundedIcon />
                </IconButton>
                {product?.count}
                <IconButton color="primary" onClick={() => addProduct(product, user)}>
                    <Icons.AddRoundedIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">$ {formatNumber(product.count * product.price)}</TableCell>
            <TableCell align="right">
                <IconButton color="primary" onClick={() => deleteProduct(product)}>
                    <Icons.CloseRoundedIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};
