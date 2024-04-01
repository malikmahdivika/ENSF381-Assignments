import React from 'react';

function SignupForm() {
    return (
        <div class="SignupForm">
            <h1>Signup</h1>
            <form>
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