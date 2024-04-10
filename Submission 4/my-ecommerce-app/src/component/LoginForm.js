import React, { useContext } from 'react';
import { AuthContext } from './LoginContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const styles = {
    alertmessage: {
        background: '#D3D3D3'
    }
}



function LoginForm() {
    const { setIsLoggedIn } = useContext(AuthContext);
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
                setIsLoggedIn(true);
                alert('Login successful');
                navigate('/products');
            }
        } catch(error) {
            if (error.response) {
                let alert = error.response.data.error;
                document.getElementById('message').innerHTML = alert;
            } else {
                console.log(error.message);
            }
        }
    };


    return (
        <div class="LoginForm">
            <h1>Login</h1>
            <span id="message" style={styles.alertmessage}></span>
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