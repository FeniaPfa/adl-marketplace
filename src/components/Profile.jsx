import DefaultImg from '/defaultavatar.svg';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';

export const Profile = ({userData, image}) => {


    return (
            <Paper variant='outlined' sx={{ padding: '3rem' }}>
                <Stack direction="row" gap="2rem">
                    <Avatar
                        src={image ? image : DefaultImg}
                        alt={userData.name}
                        sx={{ width: '300px', height: '300px' }}
                    />
                    <Stack gap="1rem">
                        <Typography variant="h1" fontFamily="Kanit,sans-serif" fontWeight="bold">
                            {userData.name} {userData.apellido}
                        </Typography>

                        <Typography variant='h5'><b>Email:</b> {userData.email}</Typography>

                    </Stack>
                </Stack>
            </Paper>
    );
};
