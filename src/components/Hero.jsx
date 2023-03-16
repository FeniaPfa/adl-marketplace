import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import heroimg from '../assets/hero.png';

export const Hero = () => {
    return (
        <Box
            className="hero"
            sx={{
                position: 'relative',
                display: 'flex',
                gap:"2rem",
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexDirection: { xs: 'column', md: 'row' },
                height: '80vh',
                '> img': {
                    display: { xs: 'none', md: 'initial' },
                    height: { md: '60%', lg: '100%' },
                    alignSelf: 'flex-end',
                },
            }}>
            <Box
                className="hero__text"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    gap: '1rem',
                    width: { xs: '80%', sm: '70%', md: '50%', lg: '40%' },
                }}>
                <Typography
                    fontWeight="bold"
                    lineHeight="1.2"
                    fontFamily="Kanit,sans-serif"
                    fontStyle="italic"
                    className="hero__cta"
                    sx={{
                        textTransform: 'uppercase',
                        color: '#fff',
                        fontSize: { xs: '2rem', sm: '3rem', md: '2.5rem', lg: '3.2rem' },
                    }}>
                    Supera los desafíos y alcanza <span className="red">tu máximo potencial</span>{' '}
                    físico y mental
                </Typography>
                <div>
                    <Stack
                        gap="1.2rem"
                        alignItems="flex-start"
                        sx={{ '> p': { fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' } } }}>
                        <Typography fontWeight="bold" className="hero__subtitle">
                            ¡Descubre la fuerza interior y la disciplina de las artes marciales con
                            TATAMI!
                        </Typography>
                        <Typography fontWeight="bold" className="hero__subtitle">
                            Encuentra y publica clases de artes marciales en un solo lugar.
                        </Typography>
                        <Button
                            component={Link}
                            to="/products"
                            variant="contained"
                            size="large"
                            sx={{ padding: '1rem 2rem' }}>
                            Buscar Clases
                        </Button>
                    </Stack>
                </div>
            </Box>

            <img className="hero__img" src={heroimg} />
        </Box>
    );
};
