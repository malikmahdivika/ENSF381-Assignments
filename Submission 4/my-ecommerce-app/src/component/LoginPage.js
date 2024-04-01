import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import LoginForm from './LoginForm.js';
import SignupForm from './SignupForm.js';
import { useState } from 'react';


const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            <Header />
            {isLogin ? <LoginForm /> : <SignupForm />}
            <button onClick={switchForm}>{isLogin ? 'Switch to Signup' : 'Switch to Login'}</button>
            <Footer />
        </div>
    );
};

export default LoginPage;