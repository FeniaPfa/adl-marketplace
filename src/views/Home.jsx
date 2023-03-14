import React from 'react';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Landing } from '../components/Landing';
import { Products } from './Products';
import { Main } from '../containers/Main';

export const Home = () => {
    return (
        <>
            <Hero />

            {/* <Products /> */}
            <Landing />

        <Footer />
        </>
    );
};
