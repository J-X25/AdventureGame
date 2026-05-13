// Basic Conditional Statements 

// Multiple conditions:
let userLoggedIn = true;
let numberOfItems = 3;

// if - else if - else statement
if (userLoggedIn) {
    console.log("Please log in to continue to checkout.");
} else if (numberOfItems === 0) {
    console.log("Your cart is empty. Please add items to your cart before check out.");
} else {
    console.log("Welcome back! Proceeding to checkout with " + numberOfItems + " items");


}



