import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Sidebar } from '../components/Sidebar';

export const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Container maxWidth="md">
                <Box margin="2rem auto">
                    <Outlet />
                </Box>
            </Container>
        </Box>
    );
};
