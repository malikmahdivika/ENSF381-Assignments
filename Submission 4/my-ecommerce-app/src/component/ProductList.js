import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';


function ProductList({ addToCart }) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/products')
                setProducts(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchProducts();
    }, []); 

    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export default ProductList;