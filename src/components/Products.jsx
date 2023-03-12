import { useGetProducts } from '../hooks/useGetProducts';
import { ProductCard } from './ProductCard';
import { CardSkeleton } from './CardSkeleton';
import { Stack } from '@mui/material';

export const Products = () => {
    const { products, loading } = useGetProducts();
    return (
        <Stack direction="row" gap="2rem" flexWrap="wrap">
            {loading
                ? Array.from(new Array(6)).map((item, index) => <CardSkeleton key={index} />)
                : products.map((item) => <ProductCard key={item.id} product={item} />)}
        </Stack>
    );
};
