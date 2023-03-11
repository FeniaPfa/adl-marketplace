import { Avatar, IconButton, TableCell, TableRow } from '@mui/material';
import { formatNumber } from '../utils/utils.js';
import { useCartContext } from '../context/CartContext.jsx';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useEffect, useState } from 'react';
import { getImg } from '../config/firebase.js';

export const TableItem = ({ product }) => {
    const [img, setImg] = useState();
    const { addProduct, removeProduct, deleteProduct } = useCartContext();

    useEffect(() =>{
      getImg(product.id, setImg)
    },[])


    return (
        <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="right">
              <Avatar src={img} variant="rounded" sx={{ width: '50px', height: '50px' }} />
            </TableCell>
            <TableCell component="th" scope="row">
                {product?.sport}
            </TableCell>
            <TableCell align="right" component="th" scope="row">
                {product?.dojo}
            </TableCell>
            <TableCell align="right">$ {formatNumber(product?.price)}</TableCell>
            <TableCell align="right">
                <IconButton color="primary">
                    <RemoveRoundedIcon onClick={() => removeProduct(product)} />
                </IconButton>
                {product?.count}
                <IconButton color="primary" onClick={() => addProduct(product)}>
                    <AddRoundedIcon />
                </IconButton>
            </TableCell>
            <TableCell align="right">$ {formatNumber(product.count * product.price)}</TableCell>
            <TableCell align="right">
                <IconButton color="primary" onClick={() => deleteProduct(product)}>
                    <CloseRoundedIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};
