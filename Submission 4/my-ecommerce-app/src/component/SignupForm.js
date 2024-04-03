import React from 'react';
import axios from 'axios';

function SignupForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;
        const confirmPassword = event.target['confirm-password'].value;
        const email = event.target.email.value;

        const user = {
            'username': username,
            'password': password,
            'confirm-password': confirmPassword,
            'email': email
        };

        try {
            const response = await axios.post('http://127.0.0.1:5000/signup', user);
            alert(response.data.message);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.error);
            } else {
                console.log(error.message);
            }
        }
    };
    return (
        <div class="SignupForm">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username" />
                <br />
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" />
                <br />
                <label for="confirm-password">Confirm Password: </label>
                <input type="password" id="confirm-password" name="confirm-password" />
                <br />
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" />
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;