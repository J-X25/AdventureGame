// Load the realine-sync library
let readline = require('readline-sync');
// Get input from the user
let color = readline.question("What is your favorite color?");
// Show the input
console.log("Hello, " + color + "!");

// Try to multiply text (this will cause an error)
try {
    let result = "5" * 5;
    console.log("Result:", result);
} catch (error) {
    console.log("Oops! Something went wrong:", error.message);
}
console.log("The program continues running!");

let readling = require('readline-sync');
// Create a number for the user to guess
let secretNumber = 7;
// Get the user's guess
let userGuess = readline.question("Guess a number between 1 and 10");

// Convert string to number
let numberGuess = Number(userGuess);
if (isNaN(numberGuess)) {
    throw "That's not a number!";
}

// Check if number is in range
if (numberGuess < 1 || numberGuess > 10) {
    throw "Number must be between 1 and 10";
}

// Check if guess is correct
if (numberGuess === secretNumber) {
    console.log("Congratulations! You guessed correctly!");
} else {
    console.log("Sorry, the number was " + secretNumber);
}
catch (error) {
    console.log("Error: " + error);
}
// Age validation example:

let readline = require('readline-sync');

// Get the age
let age = readline.question("What is your age? ");

try {
    // Convert to number
    let ageNumber = Number(age);
    
    // Check if it's a valid number
    if (isNaN(ageNumber)) {
        throw "That's not a valid age!";
    }
    
    // Check if age is in valid range
    if (ageNumber < 0 || ageNumber > 120) {
        throw "Age must be between 0 and 120!";
    }
    
    // Tell them about driving
    if (ageNumber >= 16) {
        console.log("You are old enough to drive!");
    } else {
        console.log("You are not old enough to drive yet.");
    }
    
} catch (error) {
    console.log("Error: " + error);
}