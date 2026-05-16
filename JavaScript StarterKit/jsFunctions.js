// Function Anatomy Diagram

// 1. Function Declaration
function greet(name) {          // Function name: 'greet', Parameter: 'name'
    
    // 2. Function Body
    const message = "Hello, " + name + "!";   /// Logic: creates a greeting
    // 3. Return Statement
    return message;            // Returns the result to wherever the function was called
}

// Example usage:
console.log(greet("Alice")); // Output: Hello, Alice!