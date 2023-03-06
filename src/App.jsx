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
import { Dashboard } from './views/Dashboard';
import { ProductsManager } from './views/ProductsManager';
import { Favorites } from './views/Favorites';
import { AddProduct } from './views/AddProduct';
import { EditProduct } from './views/EditProduct';

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
                        
                        <Route
                        path="/dashboard"
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                    >
                        <Route index element={<ProductsManager />} />
                        <Route path='favs' element={<Favorites />} />
                        <Route path="addproduct" element={<AddProduct />} />
                        <Route path=":id" element={<EditProduct />} />
                        {/* + rutas */}

                    </Route>
                    </Routes>
                </Container>
            </UserContextProvider>
        </>
    );
}

export default App;
