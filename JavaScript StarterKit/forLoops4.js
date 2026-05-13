// Even number checker
let evenCount = 0;
for (let num = 1; num <= 12; num++) {
    if (num % 2 === 0) {
console.log(num + " is even!");
evenCount++;
}
}
console.log("Found " + evenCount + " even numbers");