
function addToCart(item_id) {
    var item_check = document.getElementById(`product-${item_id}`);
    var itemToAdd = document.getElementById(`product${item_id}`);

    if (item_check !== null) {
        cnt = Number(item_check.getAttribute("data-itemCount"));
        cnt++;
        item_check.setAttribute("data-itemCount", cnt);
        item_check.innerHTML = `${itemToAdd.querySelector("h2").textContent} - ${itemToAdd.querySelector(".price").textContent} - ${item_check.getAttribute("data-itemCount")}  <button id="remove-btn" onclick="removeFromCart(${item_id})">Remove</button>`;
        alert(`${itemToAdd.querySelector("h2").textContent} has been added to the cart!`);
    } else {

        var newItem = document.createElement("li");
        newItem.id = `product-${item_id}`;
        newItem.setAttribute("data-itemCount", 1);
        newItem.innerHTML = `${itemToAdd.querySelector("h2").textContent} - ${itemToAdd.querySelector(".price").textContent} - ${newItem.getAttribute("data-itemCount")}  <button id="remove-btn" onclick="removeFromCart(${item_id})">Remove</button>`;

        var listitem = document.getElementById("product-list");
        listitem.appendChild(newItem);
        alert(`${itemToAdd.querySelector("h2").textContent} has been added to the cart!`);
    }
}

function removeFromCart(item_id) {
    var itemToAdd = document.getElementById(`product${item_id}`)
    var item_check = document.getElementById(`product-${item_id}`);
    if (item_check.getAttribute("data-itemCount") > 1) {
        cnt = Number(item_check.getAttribute("data-itemCount"));
        cnt--;
        item_check.setAttribute("data-itemCount", cnt);
        item_check.innerHTML = `${itemToAdd.querySelector("h2").textContent} - ${itemToAdd.querySelector(".price").textContent} - ${item_check.getAttribute("data-itemCount")}  <button id="remove-btn" onclick="removeFromCart(${item_id})">Remove</button>`;
    } else {
        list = document.getElementById("product-list");
        list.removeChild(item_check)
    }
}

async function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("login_message");
    var form = document.getElementById("webForm");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        for (let i = 0; i < users.length; i++) {
            if (users[i].username == username && users[i].email == password) {
                message.innerHTML = "Login Successful";
                break;
            } else {
                message.innerHTML = "Invalid username or password";
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}


function validateSignup() {
    // Asserts first character to be a letter
    // Followed by 2 - 19 characters of either letters, numbers, hyphen or underscores
    var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;

    // Checks that password contains atleast one lowercase letter
    // Checks that password contains atleast one uppercase letter
    // Checks that password contains atleast one number
    // Checks that password contains atleast one of the special characters mentioned
    // Checks that password does not contain any spaces
    // Checks that password is atleast 8 characters long
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~])(?!.*\s).{8,}$/;
    // Test Password: aA1%qwerty

    // Ensures that the local part of the email address starts with one or more characters that are not whitespace or '@'
    // Matches '@'
    // Ensures that the domain part of the email address starts with one or more characters that are not whitespace or '@'
    // Matches '.'
    // Ensures that the TLD part of the email address contains one or more characters that are not whitespace or @ and reaches the end of the string
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById("login_message");
    var form = document.getElementById("webForm");

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    // Clears the message first
    message.innerHTML = '';

    // Array to store error messages
    var errors = [];

    // Validate username
    if (!usernameRegex.test(username)) {
        errors.push('Invalid username');
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        errors.push('Invalid password');
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        errors.push('Passwords do not match');
    }

    // Validate email
    if (!emailRegex.test(email)) {
        errors.push('Invalid email address');
    }

    // If there are errors, display them
    if (errors.length > 0) {
        showMessage(errors.join('<br>'));
    } else {
        // If no errors, show success message
        showMessage('Signup successful!', 'success');
    }
}

function showMessage(msg, type = 'error') {
    var message = document.getElementById("login_message");
    message.innerHTML = msg;

    // Set color properties based on type
    if (type === 'error') {
        message.style.border = '2px solid #ffaaaa';
        message.style.backgroundColor = '#ffebee';
    } else {
        message.style.border = '2px solid #00ff00';
        message.style.backgroundColor = '#e8f5e9';
    }
}