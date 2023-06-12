import { Route, Routes } from 'react-router-dom';
import { UserContextProvider, CartProvider } from './context';
import {
    Login,
    EditProfile,
    Dashboard,
    ProductsManager,
    Favorites,
    EditProduct,
    Cart,
    Register,
    ProductPage,
    Profile,
    NotFound,
    Products,
    Home,
    AddProduct,
} from './views';
import { Navbar, PrivateRoute } from './common/components';

function App() {
    return (
        <>
            <UserContextProvider>
                <CartProvider>
                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
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
                            <Route index element={<Profile />} />
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
