import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    imagelogo: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    },
}

function Header() {
    return (
        <div class="Header">
        <div style={styles.imagelogo}>
            <div class="logo">
                <img width="100px" src="../images/logo.png" alt="logo" />
            </div>
            <div class="CompanyName">
                VarietyCommerce
            </div>
        </div>
        
        <div style={styles.nav}>
            <div className="link">
                <Link to="/">Home</Link>
            </div>
            <div className="link">
                <Link to="/products">Products</Link>
            </div>
            <div className="link">
                <Link to="/about">About</Link>
            </div>
        </div>
        </div>
    );
};

export default Header;