import { Box, Button, Container, Stack, Typography } from '@mui/material';
import landing1 from '../assets/landing1.jpg';
import dojo from '../assets/dojo.jpg';
import { Main } from '../containers/Main';

export const Landing = () => {
    return (
        <Stack margin="3rem auto" gap="5rem">
            <Container maxWidth="lg">
                {/* 1 */}

                <Stack  direction="row" gap="5rem">
                    <Box width="50%">
                        <img src={landing1} height="500px" className='landing-img' style={{ objectFit: 'contain' }} />
                    </Box>

                    <Stack gap="2rem">
                        <Typography
                            variant="h3"
                            fontFamily="Kanit, sans-serif"
                            fontWeight="bold"
                            fontStyle="italic"
                            color="primary"
                            textTransform="uppercase">
                            Deja de depender de algoritmos!
                        </Typography>
                        <Stack gap="1rem">
                            <Typography fontWeight="bold" fontSize="1.3rem">
                                En Tatami no necesitas volverte viral para poder tener visibilidad
                                en tus publicaciones.
                            </Typography>
                            <Typography fontSize="1.3rem">
                                Si eres un entusiasta de las artes marciales o buscas probar algo
                                nuevo puedes encontrar fácilmente clases de artes marciales cerca de
                                ti.
                            </Typography>
                            <Typography fontSize="1.3rem">
                                O si eres un instructor buscando nuevos estudiantes puedes publicar
                                tus propias clases para que los estudiantes interesados en aprender
                                de ti puedan encontrarte.
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                </Container>
                {/* cta */}
                <Stack className="pros" alignItems="center" justifyContent="center"> 
                <Container maxWidth="md">

                <Typography fontFamily="Kanit,sans-serif" variant='h5' color="secondary" textAlign="center">Comienza a descubrir una nueva forma de mejorar tu salud y bienestar mientras te diviertes y aprendes. ¡Te esperamos!</Typography>
                <Stack direction="row" gap="3rem" justifyContent="center" mt="2rem">
                  <Button variant="contained" size='large' sx={{padding:"1rem 2rem"}}>Registrarse</Button>
                  <Button variant="contained" size='large' sx={{padding:"1rem 2rem"}}>Buscar Clases</Button>
                </Stack>
                </Container>
            </Stack>
            <Container maxWidth="lg">
                {/* 2 */}
                <Stack direction="row" gap="5rem">
                    <Stack gap="1rem">
                        <Typography
                            variant="h3"
                            fontFamily="Kanit, sans-serif"
                            fontWeight="bold"
                            fontStyle="italic"
                            color="primary"
                            textTransform="uppercase">
                            Compara de manera facil y rapida!
                        </Typography>
                        <Stack gap="1rem">
                            <Typography fontSize="1.2rem" fontWeight="bold">
                                Con nuestra aplicación, puedes buscar fácilmente clases de artes
                                marciales en tu área según tu nivel de experiencia, preferencia de
                                disciplina y edad.
                            </Typography>
                            <Typography fontSize="1.2rem">
                                Ya sea que estés buscando una forma de mantenerte en forma, mejorar
                                tu equilibrio y flexibilidad, o simplemente aprender nuevas
                                habilidades y técnicas, nuestra aplicación te ayudará a encontrar
                                las clases perfectas para ti.
                            </Typography>
                            {/* <Typography fontSize="1.3rem">
                            Y lo mejor de todo, ¡nuestra aplicación es completamente gratis! No hay costos ocultos ni suscripciones necesarias para acceder a nuestra plataforma.
                            </Typography> */}
                        </Stack>
                    </Stack>
                    <img className='landing-img' src={dojo} width="50%" style={{ objectFit: 'cover' }} />
                </Stack>
            </Container>

        </Stack>
    );
};
