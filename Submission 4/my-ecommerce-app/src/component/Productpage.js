import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';

function Productpage() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (product) => {
        const existingCartItem = cartItems.find(item => item.id === product.id);

        if (existingCartItem) {
            const updatedCartItems = cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = (id) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);

        setCartItems(updatedCartItems);
    };

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList addToCart={handleAddToCart} /></td>
                    <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} removeFromCart={handleRemoveFromCart} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default Productpage;
