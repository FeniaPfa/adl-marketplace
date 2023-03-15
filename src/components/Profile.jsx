import DefaultImg from '/defaultavatar.svg';
import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';

export const Profile = ({userData, image}) => {


    return (


            <Container component={Paper} maxWidth="md" variant='outlined'  sx={{ padding: '3rem'}}>
                <Stack direction="row" gap="5rem" alignItems="center" justifyContent="center" flexWrap="wrap">
                    <Avatar
                        src={image ? image : DefaultImg}
                        alt={userData.name}
                        sx={{ width: '200px', height: '200px' }}
                        />
                    <Stack gap="1rem">
                        <Typography variant="h2" fontFamily="Kanit,sans-serif" fontWeight="bold">
                            {userData.name} {userData.apellido}
                        </Typography>

                        <Typography variant='h5'><b>Email:</b> {userData.email}</Typography>

                    </Stack>
                </Stack>
            </Container>

    );
};
