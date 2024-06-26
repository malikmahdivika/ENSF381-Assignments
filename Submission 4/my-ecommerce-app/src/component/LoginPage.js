import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {   
    const navigate = useNavigate();

    const switchForm = () => {
        navigate('/signup');
    };

    return (
        <div>
            <Header />
            <LoginForm />
            <button onClick={switchForm}>Switch to Signup</button>
            <Footer />
        </div>
    );
};

export default LoginPage;