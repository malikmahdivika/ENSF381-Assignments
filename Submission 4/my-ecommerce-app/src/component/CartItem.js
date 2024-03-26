import React from 'react';

function CartItem({ item, removeFromCart }) {
    const handleRemove = () => {
        removeFromCart(item.id);
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;