//=========================================
// Adventure Game - JavaScript Starter Kit
// This is a simple text-based adventure game that demonstrates basic JavaScript concepts such as variables, functions, and user input. The player can explore different locations, engage in combat, and manage their inventory and stats. The game is designed to be expanded with additional features and mechanics as you learn more about JavaScript programming.
//=========================================

// Include readline for player input
const readline = require("readline-sync");

// Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare for an exciting journey.");

// Create player variables for player stats
let playerHealth = 100;
let playerGold = 50;
let playerInventory = [];
let playerLocation = "village";

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("Your quest: Defeat the dragon in the mountains!");

//==========================================================
// Start Battle Calculator
//==========================================================
// Weapon damage (starts at 0 until player buys a weapon)
let weaponDamage = 0;       // Will increase to 10 when player gets a sword
console.log("Starting weapon damage: " + weaponDamage);
console.log("When you buy a sword, weapon damage will increase to 10!");

// Monster defense (affects combat outcomes)
let monsterDefense = 5;     // Monster's defense value
console.log("Monster defense: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration (matches final implementation)
let healingPotionValue = 30;        // How much health is restored
console.log("Healing Potion Value: " + healingPotionValue);
console.log("A potion will restore 30 health!");
//===========================================================
//End Battle Calculator
//===========================================================

// Display welcome message and player stats
console.log(`You are currently in the ${playerLocation}. Your health is ${playerHealth}, you have ${playerGold} gold, and your inventory is empty.`);
console.log("You start your adventure in the peaceful village.");
console.log("You see a path leading to the forest and villagers going about their day.");
// Ask the player for their name
let playerName = readline.question("What is your name, adventurer? ");
console.log("Welcome, " + playerName + "! Your adventure begins now.");

// Location tracking
let currentLocation = "village";
let firstVisit = true;

// Location check and display
if (currentLocation === "village") {
    console.log("\n=== VILLAGE ===");
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    console.log("\nWhere would you like to go?");
    console.log("1: Go to blacksmith");
    console.log("2: Go to market");
    console.log("3: Enter forest");
    console.log("4: Check status");
    console.log("5: Quit game");
    
    if (firstVisit) {
        console.log("\nVillager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains...'");
        firstVisit = false;
    }
}
else if (currentLocation === "blacksmith") {
    console.log("\n=== BLACKSMITH ===");
    console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
    console.log("\nWhere would you like to go?");
    console.log("1: Return to village");
    console.log("2: Check status");
    console.log("3: Quit game");
}

// Get player choice
let choice = readline.question("\nEnter choice (number): ");
let choiceNum = parseInt(choice);

// Choice handling
if (currentLocation === "village") {
    if (choiceNum === 1) {
        currentLocation = "blacksmith";
        console.log("\nYou enter the blacksmith's shop.");
    }
    else if (choiceNum === 2) {
        console.log("\nMerchants call out their wares.");
    }
    else if (choiceNum === 3) {
        console.log("\nA dark path leads into the forest. Strange noises echo from within.");
    }
    else if (choiceNum === 4) {
        // Show status
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);
    }
    else if (choiceNum === 5) {
        console.log("\nGoodbye, brave adventurer!");
    }
    else {
        console.log("\nInvalid choice! Please enter a number between 1 and 5.");
    }
}
else if (currentLocation === "blacksmith") {
    if (choiceNum === 1) {
        currentLocation = "village";
        console.log("\nYou return to the village center.");
    }
    else if (choiceNum === 2) {
        // Show status
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);
    }
    else if (choiceNum === 3) {
        console.log("\nGoodbye, brave adventurer!");
    }
    else {
        console.log("\nInvalid choice! Please enter a number between 1 and 3.");
    }
}
// Additional locations and choices can be added here following the same structure

// Create main game loop that runs until player quits
let gameRunning = true;
while (gameRunning) {

    // Location check and display 
    if (currentLocation === "village") {
        console.log("\n=== VILLAGE ===");
        console.log("You're in a bustling village. The blacksmith and market are nearby.");
        console.log("\nWhere would you like to go?");
        console.log("1: Go to blacksmith");
        console.log("2: Go to market");
        console.log("3: Enter forest");
        console.log("4: Check status");
        console.log("5: Quit game");
        
        if (firstVisit) {
            console.log("\nVillager: 'Welcome, adventurer! Rumor has it there's a dragon in the mountains...'");
            firstVisit = false;
        }
    }
    else if (currentLocation === "blacksmith") {
        console.log("\n=== BLACKSMITH ===");
        console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
        console.log("\nWhere would you like to go?");
        console.log("1: Return to village");
        console.log("2: Check status");
        console.log("3: Quit game");
    }
    
    // Get player choice
    let choice = readline.question("\nEnter choice (number): ");
    let choiceNum = parseInt(choice);






}

    // Game logic and player choices would go here
    // For example, you could add more locations, combat encounters, and inventory management

    
    





