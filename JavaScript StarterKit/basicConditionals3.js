let orderTotal = 45;
let destination = "domestic";
let shippingCost = 0;
if (destination === "domestic") {
if (orderTotal > 50) {
shippingCost = 0;
} else if (orderTotal >= 25) {
shippingCost = 5;
} else {
shippingCost = 10;
}
} else {
if (orderTotal > 100) {
shippingCost = 0;
} else if (orderTotal >= 50) {
shippingCost = 15;
} else {
shippingCost = 25;
}
}
console.log("Order Total: $" + orderTotal);
console.log("Shipping Cost: $" + shippingCost);
console.log("Final Total: $" + (orderTotal + shippingCost));