
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
    var form = document.getElementById("webForm")

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        for (let i = 0; i < users.length; i++) {
            if (users[i].username = username && users[i].email == password) {
                message.innerHTML = "Login Successful";
                break;
            } else {
                message.innerHTML = "Invalid username or password";
            }
        }
    } 
    catch(error) {
        console.log(error);
    }
}