import React from 'react';
import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { Main } from '../containers/Main';

export const Home = () => {
    return (
        <>
            <Hero />
        <Main>
            <Products />
        </Main>
        </>
    );
};
