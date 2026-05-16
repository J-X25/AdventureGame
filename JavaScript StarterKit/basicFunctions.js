// Square number function:
function squareNumber(num) {
console.log("The square of " + num + " is: " + (num * num));
}
squareNumber(4);
squareNumber(5);
squareNumber(10);
squareNumber(0);
squareNumber(1);

// Tempeture conversion function:
function convertToCelsius(fahrenheit) {
let celsius = (fahrenheit - 32) * 5/9;
celsius = Math.round(celsius);
console.log(fahrenheit + "°F equals " + celsius + "°C");
}
convertToCelsius(32);
convertToCelsius(212);
convertToCelsius(0);
convertToCelsius(-40);

// Area calculation function:
function calculateArea(length, width) {
if (length <= 0 || width <= 0) {
return "Dimensions must be positive numbers";
}
return length * width;
}
let area1 = calculateArea(5, 3);
console.log("Area of 5x3 rectangle: " + area1);
let area2 = calculateArea(4, 4);
console.log("Area of 4x4 square: " + area2);

// Price calculation function:
function calculateTax(price) {
return price * 0.1;  // 10% tax
}
function calculateTotal(price) {
let tax = calculateTax(price);
let total = price + tax;
return total;
}
let price = 50;
let tax = calculateTax(price);
let total = calculateTotal(price);
console.log("Price: $" + price);
console.log("Tax: $" + tax);
console.log("Total: $" + total);