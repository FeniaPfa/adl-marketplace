import { Container } from '@mui/material';

export const Main = ({ children }) => {
    return (
        <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
            {children}
        </Container>
    );
};
