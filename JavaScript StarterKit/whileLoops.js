// Basic "while" loop structure
/*
intialization;
while (condition) {
    // code to be executed for each iteration
    increment;
}
*/

// Task processing with a "while" loop:
console.log("Starting tasks with the while loop...");

let taskNumber = 1;
while (taskNumber <= 5) {
    console.log("Task " + taskNumber + " completed.");
    taskNumber++; // Don't forget to include this or you will have an infinite loop!
}

console.log("All tasks completed!");

// Concept understanding example
console.log("\n--- Learning with while loop ---");

let conceptUnderstanding = false;
let studyCount = 0;

while (!conceptUnderstanding) {
    console.log("Still studying...");
    studyCount++;
    
    if (studyCount >= 3) {
        conceptUnderstanding = true;
    }
}

console.log("Concept understood!");

