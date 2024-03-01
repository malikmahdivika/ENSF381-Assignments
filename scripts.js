
function addToCart(item_id) {
    var itemToAdd = document.getElementById(`product${item_id}`);
    var newItem = document.createElement("li");
    newItem.className = `product-${item_id}`;
    newItem.innerHTML = `${itemToAdd.querySelector("h2").textContent} - ${itemToAdd.querySelector(".price").textContent} - 1`;

    var listitem = document.getElementById("product-list");
    listitem.appendChild(newItem);
    alert("Bunny Hat has been added to the cart!")
    
}