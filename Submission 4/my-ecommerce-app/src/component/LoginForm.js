import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        const user = {
            'username': username,
            'password': password
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/login', user);
            console.log(response.data.message);
            if (response.data.isLogin) {
                alert('Login successful');
                navigate('/products');
            }
        } catch(error) {
            if (error.response) {
                alert(error.response.data.error);
            } else {
                console.log(error.message);
            }
        }
    };


    return (
        <div class="LoginForm">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" />
                <br />
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;