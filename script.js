
let cart = [];
let cartCountElement = document.getElementById('cart-count');


function updateCartCount() {
    cartCountElement.textContent = cart.length;
}


function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCount();
    alert(`${productName} has been added to the cart.`);
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        let productElement = this.parentElement;
        let productName = productElement.getAttribute('data-name');
        let productPrice = productElement.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});
