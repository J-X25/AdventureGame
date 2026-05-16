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

function showStatus() {
    console.log(`\n=== ${playerName}'s Status ===`);
    console.log(`❤️  Health: ${playerHealth}`);
    console.log(`💰 Gold: ${playerGold}`);
    console.log(`📍 Location: ${playerLocation}`);
    console.log(`🗡️  Weapon: ${hasWeapon ? "Sword" : "None"}`);
    console.log(`🍾 Potion: ${hasPotion ? "Healing Potion" : "None"}`);
    console.log(`🛡️  Armor: ${hasArmor ? "Shield" : "None"}`);
}

function showInventory() {
    console.log("\n=== Inventory ===");
    if (playerInventory.length === 0) {
        console.log("Your inventory is empty.");
    } else {
        playerInventory.forEach((item, index) => {
            console.log(`${index + 1}: ${item}`);
        });
    }
}

function enterForest() {
    console.log("\nYou venture into the forest. A wild goblin appears!");
    let inBattle = true;
    let monsterHealth = 10;

    while (inBattle) {
        console.log(`\nGoblin Health: ${monsterHealth}`);
        const attackPower = weaponDamage || 2;
        console.log(`You attack and deal ${attackPower} damage.`);
        monsterHealth -= attackPower;

        if (monsterHealth <= 0) {
            console.log("You defeated the goblin!");
            inBattle = false;
            break;
        }

        const goblinDamage = 5;
        const actualDamage = Math.max(1, goblinDamage - (hasArmor ? 2 : 0));
        playerHealth -= actualDamage;
        console.log(`The goblin strikes back and deals ${actualDamage} damage.`);

        if (playerHealth <= 0) {
            console.log("\nYou have been defeated. Game over.");
            gameRunning = false;
            return;
        }
    }

    console.log("\nYou return to the village after the battle.");
    playerLocation = "village";
}

let validChoice = false;
while (!validChoice) {
    try {
        let choice = readline.question("\nEnter choice (number): ");

        if (choice.trim() === "") {
            throw "Please enter a number!";
    }

        let choiceNum = parseInt(choice);
        if (isNaN(choiceNum )) {
            throw "That's not a number! Pleae enter a number!";
        }

        validChoice = true;

        if (choiceNum === 1) {
            playerLocation = "blacksmith";
            console.log("\nYou enter the blacksmith's shop.");
            
        } else if (choiceNum === 2) {
            playerLocation = "market";
            console.log("\nYou head to the market.");   


        } else if (choiceNum === 3) {
            playerLocation = "forest";
            console.log("\nYou venture into the forest.");
            
        } else if (choiceNum === 4) {
            console.log("\n=== " + playerName + "'s Status ===");
            console.log("❤️  Health: " + playerHealth);
            console.log("💰 Gold: " + playerGold);
            console.log("📍 Location: " + currentLocation);
        
        } else if (choiceNum === 5) {
            for (let slot = 1; slot <= 3; slot++) {
                console.log("Checking item slot " + slot + "...");
                if (slot === 1 && hasWeapon) {
                    console.log("Slot 1: Sword");
                } else if (slot === 2 && hasPotion) {
                    console.log("Slot 2: Healing Potion");
                } else if (slot === 3 && hasArmor) {
                    console.log("Slot 3: Shield");
                } else {
                    console.log("Slot " + slot + ": Empty");
                }
            }
        }   else if (choiceNum === 6) {
            gameRunning = false;
            console.log("\nThank you for playing!");
        }
else if (playerLocation === "blacksmith" || playerLocation === "market") {
    if (choiceNum < 1 || choiceNum > 4) {
        throw "Please enter a number between 1 and 4!";
    }
}

    validChoice = true;

    if (choiceNum === 1) {
        playerLocation = "village";
        console.log("\nYou return to the village center.");

    } else if (choiceNum === 2) {
        console.log("\n=== " + playerName + "'s Status ===");
        console.log("❤️  Health: " + playerHealth);
        console.log("💰 Gold: " + playerGold);
        console.log("📍 Location: " + currentLocation);

    } else if (choiceNum === 3) {
        for (let slot = 1; slot <= 3; slot++) {
            console.log("Checking item slot " + slot + "...");
            if (slot === 1 && hasWeapon) {
                console.log("Slot 1: Sword");
            } else if (slot === 2 && hasPotion) {
                console.log("Slot 2: Healing Potion");
            } else if (slot === 3 && hasArmor) {
                console.log("Slot 3: Shield");
            } else {
                console.log("Slot " + slot + ": Empty");
            }
        }
    }

else if (choiceNum === 4) {
    gameRunning = false;
    console.log("\nThank you for playing!");
    

} catch (error) {
    console.log("\nError: " + error);
    console.log("Please try again.");

};


 

function showLocationMenu() {
    if (playerLocation === "village") {
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
    } else if (playerLocation === "blacksmith") {
        console.log("\n=== BLACKSMITH ===");
        console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
        console.log("\nWhere would you like to go?");
        console.log("1: Return to village");
        console.log("2: Check status");
        console.log("3: Quit game");
    } else if (playerLocation === "market") {
        console.log("\n=== MARKET ===");
        console.log("Stalls filled with goods and merchants shouting their wares.");
        console.log("\nWhere would you like to go?");
        console.log("1: Return to village");
        console.log("2: Check status");
        console.log("3: Check inventory");
        console.log("4: Quit game");
    }
}

while (gameRunning) {
    showLocationMenu();
    const choiceText = readline.question("\nEnter choice (number): ");
    const choiceNum = parseInt(choiceText, 10);

    if (Number.isNaN(choiceNum)) {
        console.log("\nInvalid input! Please enter a number.");
        continue;
    }

    if (playerLocation === "village") {
        if (choiceNum === 1) {
            playerLocation = "blacksmith";
            console.log("\nYou enter the blacksmith's shop.");
        } else if (choiceNum === 2) {
            playerLocation = "market";
            console.log("\nYou head to the market.");
        } else if (choiceNum === 3) {
            enterForest();
        } else if (choiceNum === 4) {
            showStatus();
        } else if (choiceNum === 5) {
            gameRunning = false;
            console.log("\nGoodbye, brave adventurer!");
        } else {
            console.log("\nInvalid choice! Please enter a number between 1 and 5.");
        }
    } else if (playerLocation === "blacksmith") {
        if (choiceNum === 1) {
            playerLocation = "village";
            console.log("\nYou return to the village center.");
        } else if (choiceNum === 2) {
            showStatus();
        } else if (choiceNum === 3) {
            gameRunning = false;
            console.log("\nGoodbye, brave adventurer!");
        } else {
            console.log("\nInvalid choice! Please enter a number between 1 and 3.");
        }
    } else if (playerLocation === "market") {
        if (choiceNum === 1) {
            playerLocation = "village";
            console.log("\nYou return to the village center.");
        } else if (choiceNum === 2) {
            showStatus();
        } else if (choiceNum === 3) {
            showInventory();
        } else if (choiceNum === 4) {
            gameRunning = false;
            console.log("\nGoodbye, brave adventurer!");
        } else {
            console.log("\nInvalid choice! Please enter a number between 1 and 4.");
        }
    } else {
        console.log("\nUnknown location. Returning to the village.");
        playerLocation = "village";
    }

    if (playerHealth <= 0) {
        console.log("\nYou have been defeated. Game over.");
        gameRunning = false;
    }
}
