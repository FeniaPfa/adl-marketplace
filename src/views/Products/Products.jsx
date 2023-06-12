import { useEffect, useState } from 'react';
import { useGetProducts } from '../../hooks';
import { ProductCard, Filters, CardSkeleton } from './components';
import { Stack } from '@mui/material';
import { Footer, Layout } from '../../common/components';

export const Products = () => {
    const { products, loading } = useGetProducts();
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(products);
    }, [products]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Layout>
                <Filters products={products} setFilteredList={setFilteredList} filteredList={filteredList} />
                <Stack direction="row" gap="2rem" flexWrap="wrap" width="100%" justifyContent="center" mb="5rem">
                    {loading
                        ? Array.from(new Array(6)).map((item, index) => <CardSkeleton key={index} />)
                        : filteredList.map((item) => <ProductCard key={item.id} product={item} />)}
                </Stack>
            </Layout>
            <Footer />
        </>
    );
};
