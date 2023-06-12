import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import Icons from '../Icons';
import logo from '/logo.svg';

export const Footer = () => {
    return (
        <Box className="footer" sx={{ background: '#c62828' }} component="footer">
            <Container maxWidth="lg">
                <Grid
                    container
                    p="2rem 0"
                    alignItems="center"
                    spacing={2}
                    sx={{
                        justifyContent: { xs: 'center', sm: 'space-between' },
                    }}>
                    {/* 1 */}
                    <Grid item md={4}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap="1rem"
                            sx={{ justifyContent: { xs: 'center', sm: 'initial' } }}>
                            <img src={logo} width="50px" alt="Logo Tatami" />
                            <Typography
                                fontFamily="Kanit, sans-serif"
                                fontWeight="bold"
                                sx={{ color: '#fff', fontSize: '2.5rem' }}>
                                TATAMI
                            </Typography>
                        </Stack>
                        <Typography color="secondary" mt=".5rem" sx={{ textAlign: { xs: 'center', sm: 'initial' } }}>
                            Únete a nuestra comunidad de entusiastas de las artes marciales y comienza a encontrar o publicar
                            clases hoy mismo
                        </Typography>
                    </Grid>
                    {/* 2 */}
                    <Grid item>
                        <Typography variant="overline" fontWeight="bold" fontSize="1.2rem" color="secondary">
                            Contactanos
                        </Typography>
                        <Typography color="secondary">hola@tatami.com</Typography>
                    </Grid>
                    {/* 3 */}
                    <Grid item>
                        <Typography variant="overline" fontWeight="bold" fontSize="1.2rem" color="secondary">
                            Siguenos
                        </Typography>
                        <Stack direction="row" sx={{ '> button': { color: '#fff' } }}>
                            <IconButton>
                                <Icons.InstagramIcon className="icon" />
                            </IconButton>
                            <IconButton>
                                <Icons.TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <Icons.LinkedInIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ borderColor: '#fff' }} />

            <Stack
                maxWidth="lg"
                p="1rem 0"
                justifyContent="space-between"
                alignItems="center"
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                component={Container}>
                <Typography color="secondary" sx={{ textAlign: { xs: 'center', sm: 'initial' } }}>
                    Todos los derechos reservados © Tatami
                </Typography>
                <Box>
                    <IconButton
                        component="a"
                        href="https://github.com/FeniaPfa"
                        sx={{ color: '#fff' }}
                        target="_blank"
                        aria-label="Enlace a Github">
                        <Icons.GitHubIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Enlace a Linkedin"
                        component="a"
                        href="https://www.linkedin.com/in/fernanda-aguilar-p/"
                        sx={{ color: '#fff' }}
                        target="_blank">
                        <Icons.LinkedInIcon />
                    </IconButton>
                </Box>
            </Stack>
        </Box>
    );
};
