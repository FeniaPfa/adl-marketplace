import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Sidebar } from '../components/Sidebar';
import { DashboardNavigation } from '../components/DashboardNavigation';

export const Dashboard = () => {
    return (
        <>
            <DashboardNavigation />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Container maxWidth="lg">
                    <Box margin="2rem auto">
                        <Outlet />
                    </Box>
                </Container>
            </Box>
        </>
    );
};
