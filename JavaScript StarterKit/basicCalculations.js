// Basic Calculations

// Addition
let sum = 5 + 3;
console.log("5 + 3 =", sum);

// Subtraction
let difference = 10 - 4;
console.log("10 - 4 =", difference);

// Multiplication
let product = 6 * 7;
console.log("6 * 7 =", product);

// Division
let quotient = 20 / 5;
console.log("20 / 5 =", quotient);

// Modulus
let remainder = 10 % 3;
console.log("10 % 3 =", remainder);


// Task 3:
// Product information
let productName = "Wireless Mouse";
let price = 29.99;
let quantity = 2;
let cartTotal = price * quantity;

// Format and display the receipt
console.log("=== Product Receipt ===");
console.log("Product Name:  ", productName);
console.log("Price:         $" + price.toFixed(2));
console.log("Quantity:      " + quantity);
console.log("Subtotal:      $" + cartTotal.toFixed(2));

// Task 2: 
let shirtPrice = 25;
let discountPercent = 20;

// Calculate discount
let discountDecimal = discountPercent / 100;
let discountAmount = shirtPrice * discountDecimal;
let finalPrice = shirtPrice - discountAmount;

console.log("=== Discount Calculator ===");
console.log("Original Price: $" + shirtPrice);
console.log("Discount Percentage: " + discountPercent + "%");
console.log("You Save: $" + discountAmount);
console.log("Final Price: $" + finalPrice);

//Task 4:
let basePrice = 49.99;
let quantity = 2;
let discountPercent = 15;
let taxRate = 8;
// Calculate subtotal
let subtotal = basePrice * quantity;
// Calculate discount
let discountDecimal = discountPercent / 100;
let discountAmount = subtotal * discountDecimal;
let priceAfterDiscount = subtotal - discountAmount;
// Calculate tax
let taxDecimal = taxRate / 100;
let taxAmount = priceAfterDiscount * taxDecimal;
let finalPrice = priceAfterDiscount + taxAmount;
console.log("=== Order Details ===");
console.log("Subtotal: $" + subtotal);
console.log("Discount (" + discountPercent + "%): -$" + discountAmount);
console.log("Price After Discount: $" + priceAfterDiscount);
console.log("Tax (" + taxRate + "%): $" + taxAmount);
console.log("-----------------------");
console.log("Final Price: $" + finalPrice);


