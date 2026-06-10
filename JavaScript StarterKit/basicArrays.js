// Basic Arrays

// Basic array creation
console.log("Array Basics:");

// Empty array
let emptyArray = [];
console.log("Empty Array:", emptyArray);

// Arrays with items
let fruits = ["apple", "bannana", "orange"];
console.log("Fruits Array:", fruits);

// Array with mixed data types
let mixedArray = [42, "hello", true, null];
console.log("Mixed Array:", mixedArray);

// Array length property
console.log("Fruits array length:", fruits.length);

// Using toString method
console.log("Fruits array as string:", fruits.toString());

// Arrasys are zero-indexed
console.log("First fruit:", fruits[0]); // Output: "apple"
console.log("Second fruit:", fruits[1]); // Output: "bannana"
console.log("Third fruit:", fruits[2]); // Output: "orange" 

// Test Scores
let testScores = [85, 92, 78, 95, 88];
console.log("Number of scores: " + testScores.length);
console.log("First score: " + testScores[0]);
console.log("Last score: " + testScores[testScores.length - 1]);
testScores.push(90);
console.log("Score Summary:");
console.log("All scores:", testScores);
console.log("Number of scores:", testScores.length);
console.log("Middle score:", testScores[Math.floor(testScores.length / 2)]);

// Processing a list
let prices = [10.99, 5.99, 3.99, 8.99];
let total = 0;
let affordableCount = 0;
console.log("All Prices:");
for (let i = 0; i < prices.length; i++) {
    console.log("Item " + (i + 1) + ": $" + prices[i]);
    total += prices[i];
    
    if (prices[i] < 7.00) {
        affordableCount++;
    }
}
console.log("\nSummary:");
console.log("Total: $" + total.toFixed(2));
console.log("Affordable items (under $7.00):", affordableCount);

// Todo List
let todoList = ["Study JavaScript", "Go shopping", "Call mom"];
todoList.push("Clean room");
todoList.push("Do laundry");
todoList[2] = "Call mom tomorrow";
console.log("Updated Todo List:");
console.log(todoList);
let removedTask = todoList.pop();
console.log("Removed task: " + removedTask);
console.log("Final list:", todoList);

// Shopping List
let shoppingList = ["milk", "bread", "eggs", "apples", "bananas"];
console.log("My Shopping List:");
console.log(shoppingList);
console.log("Second item: " + shoppingList[1]);
console.log("Third item: " + shoppingList[2]);
console.log("Number of items: " + shoppingList.length);

// Practice with arrays
let songs = [" Come As You Are", "Drain You", "Polly"];
console.log("My Favorite Nirvana Songs:");
songs.push("In Bloom");
console.log(songs);

let videoGames = ["Grand Theft Auto V", "Coral Island", "Forza Horizon 6"];
console.log("Steam Library:");
videoGames.push("Ready or Not");
console.log(videoGames);
videoGames[1] = "Stardew Valley";
console.log("Updated Steam Library:");
console.log(videoGames);
