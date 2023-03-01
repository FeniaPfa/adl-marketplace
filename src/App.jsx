import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import UserContextProvider from './context/userContext';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Profile } from './views/Profile';
import { Register } from './views/Register';
import { SetProfile } from './views/SetProfile';

function App() {
    return (
        <>
            <UserContextProvider>
                <Navbar />
                <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        <Route
                            path="user/profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="user/setprofile"
                            element={
                                <PrivateRoute>
                                    <SetProfile />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Container>
            </UserContextProvider>
        </>
    );
}

export default App;
