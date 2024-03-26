import React from 'react';

function Cart({ cartItems, removeFromCart }) {
    return (
        <div className="cart" style={{ textAlign: 'right' }}>
            <h2>Cart</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {cartItems.map(item => (
                    <li key={item.id} style={{ marginBottom: '10px' }}>
                        <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                        <span>{item.name}</span><br />
                        <span>Quantity: {item.quantity}</span><br />
                        <span>Price: ${item.price}</span><br />
                        <span>Total: ${item.price * item.quantity}</span><br />
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </div>
        </div>
    );
}

export default Cart;