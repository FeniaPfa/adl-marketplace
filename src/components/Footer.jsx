import { Box, Container, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '/logo.svg';

export const Footer = () => {
    return (
        <Box className="footer" sx={{ background: '#c62828' }} component="footer">
            <Container maxWidth="lg">
                <Grid
                    container
                    p="2rem 0"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    {/* 1 */}
                    <Grid item md={4}>
                        <Stack direction="row" alignItems="center" gap="1rem">
                            <img src={logo} width="50px" />
                            <Typography
                                fontFamily="Kanit, sans-serif"
                                fontWeight="bold"
                                sx={{ color: '#fff', fontSize: '2.5rem' }}>
                                TATAMI
                            </Typography>
                        </Stack>
                        <Typography color="secondary">
                            Encuentra y publica clases de artes marciales en un solo lugar.
                        </Typography>
                    </Grid>
                    {/* 2 */}
                    <Grid item>
                        <Typography
                            variant="overline"
                            fontWeight="bold"
                            fontSize="1.2rem"
                            color="secondary">
                            Contactanos
                        </Typography>
                        <Typography color="secondary">hola@tatami.com</Typography>
                    </Grid>
                    {/* 3 */}
                    <Grid item>
                        <Typography
                            variant="overline"
                            fontWeight="bold"
                            fontSize="1.2rem"
                            color="secondary">
                            Siguenos
                        </Typography>
                        <Stack direction="row" sx={{ '> button': { color: '#fff' } }}>
                            <IconButton>
                                <InstagramIcon className="icon" />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

                </Container>
                <Divider sx={{ borderColor: '#fff' }} />

                <Stack
                    maxWidth="lg"
                    p="1rem 0"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    component={Container}>
                    <Typography color="secondary">
                        Todos los derechos reservados © Tatami
                    </Typography>
                    <IconButton
                        component="a"
                        href="https://github.com/FeniaPfa"
                        sx={{ color: '#fff' }}
                        target="_blank">
                        <GitHubIcon />
                    </IconButton>
                </Stack>
        </Box>
    );
};
