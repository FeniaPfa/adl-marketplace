import React from 'react';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { Main } from '../containers/Main';

export const Home = () => {
    return (
        <>
            <Hero />
        <Main>
            {/* <Products /> */}
        </Main>
        <Footer />
        </>
    );
};
