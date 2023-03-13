import { SvgIcon, Typography } from '@mui/material';
import heroimg from '../assets/kimono.png';

import logo from '/logo.svg';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__text">
                <h1 className="hero__title">TATAMI</h1>
                <h2 className="hero__cta">
                    Supera los desafíos y alcanza <span className='red'>tu máximo potencial</span> físico y mental
                </h2>
                <p className="hero__subtitle">
                Encuentra y publica tus clases de artes marciales en un solo lugar.
                </p>
                <p className="hero__subtitle">
                    ¡Descubre la fuerza interior y la disciplina de las artes marciales con TATAMI!
                </p>
            </div>
            <img className="hero__img" src={heroimg} />
        </div>
    );
};
