import React from 'react';
import Header from './Header.js';
import Signup from './SignupForm.js';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();

    const switchForm = () => {
        navigate('/login');
    };

    return (
        <div>
            <Header />
            <Signup />
            <button onClick={switchForm}>Switch to Login</button>
            <Footer />
        </div>
    );
};

export default SignupPage;