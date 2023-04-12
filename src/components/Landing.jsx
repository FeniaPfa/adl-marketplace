import { Box, Button, Container, Stack, Typography } from '@mui/material';
import landing1 from '../assets/landing1.jpg';
import dojo from '../assets/dojo.jpg';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <Stack margin="3rem auto" gap="5rem">
            <Container maxWidth="lg">
                {/* 1 */}

                <Stack gap="5rem" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box>
                        <img
                            src={landing1}
                            className="landing-img"
                            style={{
                                objectFit: 'cover',
                                maxHeight: '500px',
                                aspectRatio: '1 / 1',
                                width: '100%',
                            }}
                        />
                    </Box>

                    <Stack
                        gap="2rem"
                        sx={{
                            order: { xs: '-1', md: 'initial' },
                            width: { xs: '100%', md: '50%' },
                        }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontFamily="Kanit, sans-serif"
                            fontWeight="bold"
                            fontStyle="italic"
                            color="primary"
                            textTransform="uppercase"
                            sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
                            Deja de depender de algoritmos!
                        </Typography>
                        <Stack
                            gap="1rem"
                            sx={{ '> p': { fontSize: { xs: '1rem', sm: '1.3rem' } } }}>
                            <Typography fontWeight="bold">
                                ¿Estás cansado de que tus publicaciones pierdan su visibilidad en el mar de contenido de las redes sociales? ¡No te
                                preocupes!
                            </Typography>
                            <Typography>
                                Si eres un entusiasta de las artes marciales o buscas probar algo
                                nuevo puedes encontrar fácilmente clases de artes marciales cerca de
                                ti.
                            </Typography>
                            <Typography>
                                O si eres un instructor buscando nuevos estudiantes puedes publicar
                                tus propias clases para que los estudiantes interesados en aprender
                                de ti puedan encontrarte.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            {/* cta */}
            <Stack className="cta" alignItems="center" justifyContent="center">
                <Container maxWidth="md" sx={{ padding: '3rem' }}>
                    <Typography
                        fontFamily="Kanit,sans-serif"
                        variant="h5"
                        color="secondary"
                        textAlign="center"
                        sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' } }}>
                        Comienza a descubrir una nueva forma de mejorar tu salud y bienestar
                        mientras te diviertes y aprendes. ¡Te esperamos!
                    </Typography>
                    <Stack
                        direction="row"
                        gap="3rem"
                        justifyContent="center"
                        mt="2rem"
                        alignItems="center"
                        flexWrap="wrap">
                        <Button component={Link} to="/register" variant="contained" size="large">
                            Registrarse
                        </Button>
                        <Button component={Link} to="/products" variant="contained" size="large">
                            Buscar Clases
                        </Button>
                    </Stack>
                </Container>
            </Stack>
            <Container maxWidth="lg" sx={{ marginBottom: '3rem' }}>
                {/* 2 */}
                <Stack gap="5rem" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Stack gap="1rem" sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            fontFamily="Kanit, sans-serif"
                            fontWeight="bold"
                            fontStyle="italic"
                            color="primary"
                            textTransform="uppercase"
                            sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
                            Compara de manera fácil y rápida!
                        </Typography>
                        <Stack
                            gap="1rem"
                            sx={{ '> p': { fontSize: { xs: '1rem', sm: '1.2rem' } } }}>
                            <Typography fontWeight="bold">
                                Con nuestra aplicación, puedes buscar fácilmente clases de artes
                                marciales en tu área según tu nivel de experiencia, preferencia de
                                disciplina y edad.
                            </Typography>
                            <Typography>
                                Ya sea que estés buscando una forma de mantenerte en forma, mejorar
                                tu equilibrio y flexibilidad, o simplemente aprender nuevas
                                habilidades y técnicas, nuestra aplicación te ayudará a encontrar
                                las clases perfectas para ti.
                            </Typography>
                        </Stack>
                    </Stack>
                    <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                        <img
                            className="landing-img"
                            src={dojo}
                            style={{ objectFit: 'cover', width: '100%' }}
                        />
                    </Box>
                </Stack>
            </Container>
        </Stack>
    );
};
