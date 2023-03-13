import { Stack, SvgIcon, Typography } from '@mui/material';
import heroimg from '../assets/kimono.png';

import logo from '/logo.svg';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__text">
                <Typography
                    variant="h1"
                    fontFamily="Kanit,sans-serif"
                    fontWeight="bold"
                    fontSize="4rem"
                    className="hero__title">
                    TATAMI
                </Typography>
                <Typography
                    fontSize="3.2rem"
                    fontWeight="bold"
                    lineHeight="1.2"
                    fontFamily="Kanit,sans-serif"
                    fontStyle="italic"
                    className="hero__cta">
                    Supera los desafíos y alcanza <span className="red">tu máximo potencial</span>{' '}
                    físico y mental
                </Typography>
                <div>
                    <Stack gap="1rem">
                        <Typography fontSize="1.5rem" fontWeight="bold" className="hero__subtitle">
                            ¡Descubre la fuerza interior y la disciplina de las artes marciales con
                            TATAMI!
                        </Typography>
                        <Typography fontSize="1.5rem" fontWeight="bold" className="hero__subtitle">
                            Encuentra y publica tus clases de artes marciales en un solo lugar.
                        </Typography>
                    </Stack>
                </div>
            </div>
            <img className="hero__img" src={heroimg} />
        </div>
    );
};
