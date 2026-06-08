//=========================================
// Adventure Game - JavaScript Starter Kit
// This is a simple text-based adventure game that demonstrates basic JavaScript concepts such as variables, functions, and user input.
//=========================================

const readline = require("readline-sync");

console.log("Welcome to the Adventure Game!");
console.log("Prepare for an exciting journey.");

let playerHealth = 100;
let playerGold = 50;
let playerInventory = [];
let playerLocation = "village";
let weaponDamage = 0;
let monsterDefense = 5;
let healingPotionValue = 30;

console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("Your quest: Defeat the dragon in the mountains!");
console.log("Starting weapon damage: " + weaponDamage);
console.log("Monster defense: " + monsterDefense);
console.log("Healing Potion Value: " + healingPotionValue);
console.log(`You are currently in the ${playerLocation}. Your health is ${playerHealth}, you have ${playerGold} gold, and your inventory is empty.`);
console.log("You start your adventure in the peaceful village.");
console.log("You see a path leading to the forest and villagers going about their day.");

const playerName = readline.question("What is your name, adventurer? ");
console.log(`Welcome, ${playerName}! Your adventure begins now.`);

let firstVisit = true;
let hasWeapon = false;
let hasPotion = false;
let hasArmor = false;
let gameRunning = true;
let currentLocation = "village";

function showStauts() {
    console.log("\n=== " + playerName + " 's Status ===");
    console.log("Health: " + playerHealth);
    console.log("Gold: " + playerGold);
    console.log("Location: " + playerLocation);

}

function showLocation() {
    console.log("\n=== " + playerLocation.toUpperCase() + " ===");

    if (playerLocation === "village") {
        console.log("You're in a bustling village. The blacksmith and market are nearby.");
        console.log("\nWhat would you like to do?");
        console.log("1: Visit the blacksmith");
        console.log("2: Visit the market");
        console.log("3: Enter the forest");
        console.log("4: Check status");
        console.log("5: Check inventory");
        console.log("6: Quit game");

    }
else if (playerLocation === "blacksmith") {
    console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
    console.log("\nWhat would you like to do?");
    console.log("1: Return to village");
    console.log("2: Check status");
    console.log("3: Check inventory");
    console.log("4: Quit game");

}
else if (playerLocation === "market") {
    console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
    console.log("\nWhat would you like to do?");
    console.log("1: Return to village");
    console.log("2: Check status");
    console.log("3: Check inventory");
    console.log("4: Quit game");

}
function choice(choiceNum) {
    let validMove = false;

    if (playerLocation === "village") {
        if (choiceNum === "1") {
            playerLocation = "blacksmith";
            console.log("\nYou enter the blacksmith's shop.");
            validMove = true;
        }
    else if (choiceNum === "2") {
            playerLocation = "market";
            console.log("\nYou head to the market.");
            validMove = true;
        }
    else if (choiceNum === "3") {
            playerLocation = "forest";
            console.log("\nYou venture into the forest.");
            validMove = true;
        }
    else if (playerLocation === "blacksmith" || playerLocation === "market") {
        if (choiceNum === "1") {
            playerLocation = "village";
            console.log("\nYou return to the village.");
            validMove = true;
        }
    }
    }    
    }
}

return validMove;

function handleCombat() {
    if (hasWeapon) {
        console.log("You have a sword! You attack!");
        console.log("Victory! You found 10 gold!");
        playerGold += 10;
        return true;
    } else {
        console.log("You have no weapon, you must retreat!");
        updateHealth(-20);
        return false;
    }
}

function updateHealth(amount) {
    playerHealth += amount;

    if (playerHealth > 100) {
        playerHealth = 100;
        console.log("You are at full health!");
    }
    if (playerHealth < 0) {
        playerHealth = 0;
        console.log("You are gravely wounded!");
    }

    console.log("Your health is now: " + playerHealth);
    return playerHealth;

    function checkInventory() {
   console.log("\n=== INVENTORY ===");
   if (!hasWeapon && !hasPotion && !hasArmor) {
       console.log("Your inventory is empty!");
       return;
   }
   
   if (hasWeapon) console.log("- Sword");
   if (hasPotion) console.log("- Health Potion");
   if (hasArmor) console.log("- Shield");
}

while (gameRunning) {
   
   showLocation();
   
   
   let validChoice = false;
   while (!validChoice) {
       try {
           let choice = readline.question("\nEnter choice (number): ");
           
           // Check for empty input
           if (choice.trim() === "") {
               throw "Please enter a number!";
           }
           
           
           let choiceNum = parseInt(choice);
           if (isNaN(choiceNum)) {
               throw "That's not a number! Please enter a number.";
           }
           
           
           if (currentLocation === "village") {
               if (choiceNum < 1 || choiceNum > 6) {
                   throw "Please enter a number between 1 and 6.";
               }
               
               validChoice = true;
               
               if (choiceNum <= 3) {
                   if (!move(choiceNum)) {
                       console.log("\nYou can't go there!");
                   }
                   else if (choiceNum === 3) {
                       console.log("\nA monster appears!");
                       if (!handleCombat()) {
                           currentLocation = "village";
                       }
                   }
               }
               else if (choiceNum === 4) {
                   showStatus();
               }
               else if (choiceNum === 5) {
                   checkInventory();
               }
               else if (choiceNum === 6) {
                   gameRunning = false;
                   console.log("\nThanks for playing!");
               }
           }
           else if (currentLocation === "blacksmith" || currentLocation === "market") {
               if (choiceNum < 1 || choiceNum > 4) {
                   throw "Please enter a number between 1 and 4.";
               }
               
               validChoice = true;
               
               if (choiceNum === 1) {
                   move(choiceNum);
               }
               else if (choiceNum === 2) {
                   showStatus();
               }
               else if (choiceNum === 3) {
                   checkInventory();
               }
               else if (choiceNum === 4) {
                   gameRunning = false;
                   console.log("\nThanks for playing!");
               }
           }
           
       } catch (error) {
           console.log("\nError: " + error);
           console.log("Please try again!");
       }
   }

   // Check if player died
   if (playerHealth <= 0) {
       console.log("\nGame Over! Your health reached 0!");
       gameRunning = false;
   }
    }
}