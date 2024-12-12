// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".product-card");

// Select the cart count element
const cartCount = document.getElementById("cart-count");

// Variable to track the number of items in the cart
let itemCount = 0;

// Add an event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Increment the cart count when a button is clicked
        itemCount++;
        cartCount.textContent = itemCount; // Update the cart count on the page
        alert("Product added to cart!"); // Optional: show an alert
    });
});
