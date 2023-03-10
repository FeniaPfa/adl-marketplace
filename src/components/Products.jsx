import { useGetProducts } from '../hooks/useGetProducts';
import { Product } from './Product';
import { CardSkeleton } from './CardSkeleton';
import { Stack } from '@mui/material';

export const Products = () => {
    const { products, loading } = useGetProducts();
    return (
        <Stack direction="row" gap="2rem" flexWrap="wrap">
            {loading
                ? Array.from(new Array(6)).map((item, index) => <CardSkeleton key={index} />)
                : products.map((item) => <Product key={item.id} product={item} />)}
        </Stack>
    );
};
