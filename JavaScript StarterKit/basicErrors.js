// Errors in JavaScript can be categorized into three main types: Syntax Errors, Runtime Errors, and Logical Errors.

// 1. Syntax Errors: These occur when the code violates the syntax rules of JavaScript. They are detected by the JavaScript engine during the parsing phase, before the code is executed. For example:
// Missing closing parenthesis
function greet(name) {
    console.log("Hello, " + name;
}
// In this example, there is a syntax error due to the missing closing parenthesis in the console.log statement.

// 2. Runtime Errors: These occur during the execution of the code when the JavaScript engine encounters an issue that it cannot handle. For example:
// ReferenceError: x is not defined
console.log(x);
// In this example, there is a runtime error because the variable 'x' has not been declared or defined before it is used.

// 3. Logical Errors: These occur when the code runs without throwing an error, but the output is not what was expected. For example:
// A function that is supposed to add two numbers but instead concatenates them
function addNumbers(a, b) {
    return a + b;
}
// In this example, if you pass strings instead of numbers, the function will concatenate them instead of adding them.      
console.log(addNumbers("5", "10")); // Output: "510" instead of 15

// To handle errors in JavaScript, you can use try...catch blocks to catch and handle exceptions gracefully. For example:   
try {
    // Code that might throw an error
} catch (error) {
    // Handle the error
}   
// In this structure, the code inside the try block is executed, and if any error occurs, it is caught in the catch block where you can handle it appropriately.

// Validate User Email Example:

// Define user input:
let userEmail

if (!userEmail) {
    console.log("An email address is required to continue.");
} else if (!userEmail.includes("@")) {
    console.log("Email address must contain an '@' symbol.");
}

// 4. User Input Validation Errors: These occur when the user provides input that does not meet the expected format or criteria. For example, if a user is asked to enter an email address but enters a string without an '@' symbol, it would be considered a validation error.  


