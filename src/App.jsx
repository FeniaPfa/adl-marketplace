import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import UserContextProvider from './context/userContext';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { EditProfile } from './views/EditProfile';
import { Dashboard } from './views/Dashboard';
import { ProductsManager } from './views/ProductsManager';
import { Favorites } from './views/Favorites';
import { AddProduct } from './views/AddProduct';
import { EditProduct } from './views/EditProduct';
import { Cart } from './views/Cart';
import { Register } from './views/Register';
import { ProductPage } from './views/ProductPage';
import { CartProvider } from './context/CartContext';
import { DashboardHome } from './views/DashboardHome';
import { NotFound } from './views/NotFound';
import { Products } from './views/Products';

function App() {
    return (
        <>
            <UserContextProvider>
                <CartProvider>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={
                                    <Login />
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                    <Register />
                            }
                        />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductPage />} />
                        <Route path="*" element={<NotFound />} />

                        <Route
                            path="cart"
                            element={
                                <PrivateRoute>
                                    <Cart />
                                </PrivateRoute>
                            }
                        />

                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }>
                            <Route index element={<DashboardHome />} />
                            <Route path="editprofile" element={<EditProfile />} />
                            <Route path="products" element={<ProductsManager />} />
                            <Route path="favs" element={<Favorites />} />
                            <Route path="addproduct" element={<AddProduct />} />
                            <Route path="products/:id" element={<EditProduct />} />
                        </Route>
                    </Routes>
                </CartProvider>
            </UserContextProvider>
        </>
    );
}

export default App;
