import { Stack } from '@mui/material';
import { useGetData } from '../hooks/useGetData';
import { CardSkeleton } from './CardSkeleton';
import { Product } from './Product';

export const Products = () => {
    const { products, loading } = useGetData();
    return (
        <Stack direction="row" gap="2rem" flexWrap="wrap">
            {loading
                ? Array.from(new Array(6)).map((item, index) => <CardSkeleton key={index} />)
                : products.map((item) => <Product key={item.id} product={item} />)}
        </Stack>
    );
};
