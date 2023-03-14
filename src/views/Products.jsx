import { useGetProducts } from '../hooks/useGetProducts';
import { ProductCard } from '../components/ProductCard';
import { CardSkeleton } from '../components/CardSkeleton';
import { Stack } from '@mui/material';
import { Main } from '../containers/Main';

export const Products = () => {
    const { products, loading } = useGetProducts();
    return (
        <Main>

        <Stack direction="row" gap="2rem" flexWrap="wrap">
            {loading
                ? Array.from(new Array(6)).map((item, index) => <CardSkeleton key={index} />)
                : products.map((item) => <ProductCard key={item.id} product={item} />)}
        </Stack>
                </Main>
    );
};
