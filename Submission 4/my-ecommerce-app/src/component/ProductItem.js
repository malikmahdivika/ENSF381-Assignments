import React, { useState } from 'react';

function ProductItem({ product, addToCart }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item" onMouseEnter={handleToggleDetails} onMouseLeave={handleToggleDetails}>
            <img src={product.image} alt={product.name} style={{ width: '150px' }} />
            <h3>{product.name}</h3>
            <p>{showDetails && product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;
