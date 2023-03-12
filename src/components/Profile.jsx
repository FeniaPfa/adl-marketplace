import DefaultImg from '/defaultavatar.svg';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';

export const Profile = ({userData, image}) => {


    return (
            <Paper variant='outlined' sx={{ padding: '2rem' }}>
                <Stack direction="row" gap="2rem">
                    <Avatar
                        src={image ? image : DefaultImg}
                        alt={userData.name}
                        sx={{ width: '200px', height: '200px' }}
                    />
                    <Box>
                        <Typography variant="h2" fontFamily="Kanit,sans-serif" fontWeight="bold">
                            {userData.name} {userData.apellido}
                        </Typography>

                        <p>email: {userData.email}</p>
                    </Box>
                </Stack>
            </Paper>
    );
};
