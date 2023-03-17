import { createContext, useContext, useState } from 'react';
import { addProductAlert, notUserCart, removeProductAlert, resetCartAlert } from '../utils/alerts';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState({ price: 0, quantity: 0 });

    const addProduct = (product,user) => {
        if(!user) {
            console.log(user)
            notUserCart()
            return
        }
        addProductAlert()
        setTotal({ price: total.price + product.price, quantity: total.quantity + 1 });
        const isInCart = cart.some((item) => item.id === product.id);
        if (isInCart) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                )
            );
        }
        if (!isInCart) {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };

    const removeProduct = (product) => {
        removeProductAlert()
        const productIndex = cart.findIndex((item) => item.id === product.id);
        if (cart[productIndex].count !== 0) {
            setTotal({ price: total.price - product.price, quantity: total.quantity - 1 });
            setCart(
                cart.map((item) =>
                    item.id === product.id && item.count !== 1
                        ? { ...item, count: item.count - 1 }
                        : item
                )
            );
        }
        if (cart[productIndex].count === 1) {
            deleteProduct(product);
        }
    };

    const deleteProduct = (product) => {
        removeProductAlert()
        const productIndex = cart.findIndex((item) => item.id === product.id);
        const productQuantity = cart[productIndex].count;
        const itemTotal = productQuantity * product.price;
        setTotal({ price: total.price - itemTotal, quantity: total.quantity - productQuantity });
        setCart(cart.filter((item) => item.id !== product.id));
    };
    
    const resetCart = () => {
        resetCartAlert()
        setTotal({ price: 0, quantity: 0 });
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{ cart, total, addProduct, deleteProduct, removeProduct, resetCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
