import { Box, Stack, Typography } from '@mui/material';
import landing1 from '../assets/landing1.jpg';
import dojo from '../assets/dojo.jpg';
import { Main } from '../containers/Main';

export const Landing = () => {
    return (
        <>
            {/* cta beneficios */}

            <Main>
                {/* 1 */}
                <Stack direction="row" gap="5rem">
                    <Box width="50%">
                        <img src={landing1} height="500px" style={{ objectFit: 'contain' }} />
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
                {/* cta */}
                {/* 2 */}
                <Stack direction="row" gap="3rem">
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
                            Ya sea que estés buscando una forma de mantenerte en forma, mejorar tu equilibrio y flexibilidad, o simplemente aprender nuevas habilidades y técnicas, nuestra aplicación te ayudará a encontrar las clases perfectas para ti.
                            </Typography>
                            {/* <Typography fontSize="1.3rem">
                            Y lo mejor de todo, ¡nuestra aplicación es completamente gratis! No hay costos ocultos ni suscripciones necesarias para acceder a nuestra plataforma.
                            </Typography> */}
                        </Stack>
                    </Stack>
                    <img src={dojo} width="50%"/>
                </Stack>
            </Main>
            <Stack className="pros">
                <Typography color="secondary">AAAAAAAA</Typography>
            </Stack>
        </>
    );
};
