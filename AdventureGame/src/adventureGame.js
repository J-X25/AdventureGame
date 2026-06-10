// ===========================================
// The Dragon's Quest - Text Adventure Game
// A progression-based learning project
// ===========================================

// Include readline for player input
const readline = require("readline-sync");

// Game state variables
let gameRunning = true;
let playerName = "";
let playerHealth = 100;
let playerGold = 20; // Starting gold
let currentLocation = "village";

// Weapon damage (starts at 0 until player buys a sword)
let weaponDamage = 0; // Base weapon damage
let monsterDefense = 5; // Monster's defense value
let healingPotionValue = 30; // How much health is restored

// Item templates with properties
const healthPotion = {
  name: "Health Potion",
  type: "potion",
  value: 5, // Cost in gold
  effect: 30, // Healing amount
  description: "Restores 30 health points",
};

const sword = {
  name: "Sword",
  type: "weapon",
  value: 10, // Cost in gold
  effect: 10, // Damage amount
  description: "A sturdy blade for combat",
};

const shield = {
  name: "Wooden Shield",
  type: "armor",
  value: 8, // Cost in gold
  effect: 5, // Protection amount
  description: "Reduces damage taken in combat",
};
const steelSword = {
  name: "Steel Sword",
  type: "weapon",
  value: 20, // Cost in gold
  effect: 20, // Damage amount
  description: "An advanced blade for combat",
  };
const ironShield = {
  name: "Iron Shield",
  type: "armor",
  value: 16, // Cost in gold
  effect: 10, // Protection amount
  description: "Reduces more damage taken in combat",
}


// Create empty inventory array (from previous lab)
let inventory = []; // Will now store item objects instead of strings

function showLocation() {
  console.log("\n=== " + currentLocation.toUpperCase() + " ===");

  let options = [];
  if (currentLocation === "village") {
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    options = [
      "Go to blacksmith",
      "Go to market",
      "Enter forest",
      "Climb mountain",
      "Check status",
      "Use item",
      "Help",
      "Quit game",
    ];
  } else if (currentLocation === "blacksmith") {
    console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
    options = [
      "Buy weapons",
      "Buy armor",
      "Upgrade equipment",
      "Return to village",
    ];
  } else if (currentLocation === "market") {
    console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
    options = [
      "Buy potion",
      "Return to village",
    ];
  } else if (currentLocation === "forest") {
    console.log("The forest is dark and eerie. You can hear the sounds of creatures lurking in the shadows.");
    options = [
      "Return to village",
      "Check status",
      "Use item",
      "Help",
      "Quit game",
    ];
  }

  console.log("\nWhat would you like to do?");
  options.forEach((option, index) => {
    console.log(`${index + 1}: ${option}`);
  });

  return options;
}
function showStatus() {
  console.log("\n=== " + playerName + "'s Status ===");
  console.log("❤️  Health: " + playerHealth);
  console.log("💰 Gold: " + playerGold);
  console.log("📍 Location: " + currentLocation);

  // Enhanced inventory display with item details
  console.log("🎒 Inventory: ");
  if (inventory.length === 0) {
    console.log("   Nothing in inventory");
  } else {
    inventory.forEach((item, index) => {
      console.log(
        "   " + (index + 1) + ". " + item.name + " - " + item.description
      );
    });
  }
}

/**
 * Shows the current location's description and available choices
 */
 

// ===========================
// Combat Functions
// Functions that handle battles and health
// ===========================

/**
 * Checks if player has an item of specified type
 * @param {string} type The type of item to check for
 * @returns {boolean} True if player has the item type
 */
function hasItemType(type) {
  return inventory.some((item) => item.type === type);
}

/**
 * Handles monster battles
 * Checks if player has weapon and manages combat results
 * @returns {boolean} true if player wins, false if they retreat
 */
function handleCombat(isDragon = false) {
  // Updated to check for item type instead of specific string
  // Get the best weapon and armor from the inventory
  let weapon = getBestItem("weapon");
  let armor = getBestItem("armor");


  if (!weapon) {
    console.log("You don't have a weapon to fight!");
    return false; // Player retreats if no weapon is available 
  }

  // Set monster health based on whether it's a dragon
  let monsterHealth = isDragon ? 50 : 20; // Dragon has more health
  let playerHealth = 100; // Player starts with full health
  console.log("A " + (isDragon ? "dragon" : "monster") + " appears!");
  console.log("You attack with your " + weapon.name + "!");

    // Find the weapon to get its properties

    // Make monster/dragon battles more difficult

    // Combat loop
    while (monsterHealth > 0 && playerHealth > 0) {
    // Player attacks the monster
      console.log("You deal " + weapon.effect + " damage!");
      monsterHealth -= weapon.effect;
  
      if (monsterHealth <= 0) {
        console.log("Victory! You defeated the " + (isDragon ? "dragon" : "monster") + "!");
        if (isDragon) {
          console.log("\n***** EPIC VICTORY *****");
          console.log("You have slain the dragon that terrorized the mountains.");
          console.log("The villagers cheer your name as peace returns to the land.");
          console.log("You are hailed as a hero and your tale will be sung for generations.");
          console.log("You receive 100 gold and a legendary weapon as a reward!");
          playerGold += 100;
          inventory.push({ type: "weapon", name: "Legendary Sword", effect: 50});
          console.log("\n--- THE END ---\n");
          gameRunning = false;
          return true;
        }
        console.log("You found 10 gold!");
        playerGold += 10;
        return true; // Player wins
      }
    // Monster attacks the player
  let monsterDamage = isDragon ? 20  : 10; // Dragons deal more damage
  if (armor) {
    console.log("Your " + armor.name + "reduces the damage!");
    monsterDamage -=armor.effect; // Armor reduces damage
    monsterDamage = Math.max(monsterDamage, 0); // Ensure damage is not negative
  }
  console.log("The " + (isDragon ? "dragon" : "monster") + " deals " + monsterDamage + " damage!");
  playerHealth -= monsterDamage;

  if (playerHealth <= 0) {
    console.log("You have been defeated by the " + (isDragon ? "dragon" : "monster") + "!");
    return false; // Player loses
  }
    }
}

/**
 * Updates player health, keeping it between 0 and 100
 * @param {number} amount Amount to change health by (positive for healing, negative for damage)
 * @returns {number} The new health value
 */
function updateHealth(amount) {
  playerHealth += amount;

  if (playerHealth > 100) {
    playerHealth = 100;
    console.log("You're at full health!");
  }
  if (playerHealth < 0) {
    playerHealth = 0;
    console.log("You're gravely wounded!");
  }

  console.log("Health is now: " + playerHealth);
  return playerHealth;
}

// ===========================
// Item Functions
// Functions that handle item usage and inventory
// ===========================

/**
 * Handles using items like potions
 * @returns {boolean} true if item was used successfully, false if not
 */
function getItemsByType(weapon) {
    let matchedItems = [];
    for (let item of inventory) {
        if (item.type === "weapon") {
            matchedItems.push(item.name);
        }
 
    }
  return matchedItems;
}

function getBestItem (weapon) {
    let bestItem = null;
    for (let item of inventory) {
        if (item.type === "weapon") {
            if (!bestItem || item.effect > bestItem.effect) {
                bestItem = item;
            }
        }
}
    return bestItem;
}

function useItem() {
  if (inventory.length === 0) {
    console.log("\nYou have no items!");
    return false;
  }

  console.log("\n=== Inventory ===");
  inventory.forEach((item, index) => {
    console.log(index + 1 + ". " + item.name);
  });

  let choice = readline.question("Use which item? (number or 'cancel'): ");
  if (choice === "cancel") return false;

  let index = parseInt(choice) - 1;
  if (index >= 0 && index < inventory.length) {
    let item = inventory[index];

    if (item.type === "potion") {
      console.log("\nYou drink the " + item.name + ".");
      updateHealth(item.effect);
      inventory.splice(index, 1);
      console.log("Health restored to: " + playerHealth);
      return true;
    } else if (item.type === "weapon") {
      console.log("\nYou ready your " + item.name + " for battle.");
      return true;
    }
  } else {
    console.log("\nInvalid item number!");
  }
  return false;
}

/**
 * Displays the player's inventory
 */
function checkInventory() {
  console.log("\n=== INVENTORY ===");
  if (inventory.length === 0) {
    console.log("Your inventory is empty!");
    return;
  }
 

  // Display all inventory items with numbers and descriptions
  inventory.forEach((item, index) => {
    console.log(index + 1 + ". " + item.name + " - " + item.description);
  });
}

// Checks if player has good enough equipment to fight the dragon
  function hasGoodEquipment() {
    return inventory.some((item) => item.type === "weapon" && item.effect >= 20);
  }
    let bestWeapon = getBestItem("weapon");
    if (bestWeapon && bestWeapon.effect >= 20) {
        console.log("You have a powerful weapon: " + bestWeapon.name + " with " + bestWeapon.effect + " damage!");
    } else {
        console.log("Your weapons may not be strong enough to defeat the dragon. Consider buying better equipment.");
    }   

// ===========================
// Shopping Functions
// Functions that handle buying items
// ===========================

/**
 * Handles purchasing items at the blacksmith
 */
function buyFromBlacksmith() {
  if (playerGold >= sword.value) {
    console.log("\nBlacksmith: 'A fine blade for a brave adventurer!'");
    playerGold -= sword.value;

    // Add sword object to inventory instead of just the name
    inventory.push({ ...sword }); // Create a copy of the sword object

    console.log(
      "You bought a " + sword.name + " for " + sword.value + " gold!"
    );
    console.log("Gold remaining: " + playerGold);
  } else {
    console.log("\nBlacksmith: 'Come back when you have more gold!'");
  }
}

/**
 * Handles purchasing items at the market
 */
function buyFromMarket() {
  if (playerGold >= healthPotion.value) {
    console.log("\nMerchant: 'This potion will heal your wounds!'");
    playerGold -= healthPotion.value;

    // Add potion object to inventory instead of just the name
    inventory.push({ ...healthPotion }); // Create a copy of the potion object

    console.log(
      "You bought a " +
        healthPotion.name +
        " for " +
        healthPotion.value +
        " gold!"
    );
    console.log("Gold remaining: " + playerGold);
  } else {
    console.log("\nMerchant: 'No gold, no potion!'");
  }
}

// ===========================
// Help System
// Provides information about available commands
// ===========================

/**
 * Shows all available game commands and how to use them
 */
function showHelp() {
  console.log("\n=== AVAILABLE COMMANDS ===");

  console.log("\nMovement Commands:");
  console.log("- In the village, choose 1-3 to travel to different locations");
  console.log(
    "- In other locations, choose the return option to go back to the village"
  );

  console.log("\nBattle Information:");
  console.log("- You need a weapon to win battles");
  console.log("- Weapons have different damage values");
  console.log("- Monsters appear in the forest");
  console.log("- Without a weapon, you'll lose health when retreating");

  console.log("\nItem Usage:");
  console.log("- Health potions restore health based on their effect value");
  console.log(
    "- You can buy potions at the market for " + healthPotion.value + " gold"
  );
  console.log(
    "- You can buy a sword at the blacksmith for " + sword.value + " gold"
  );

  console.log("\nOther Commands:");
  console.log("- Choose the status option to see your health and gold");
  console.log("- Choose the help option to see this message again");
  console.log("- Choose the quit option to end the game");

  console.log("\nTips:");
  console.log("- Keep healing potions for dangerous areas");
  console.log("- Defeat monsters to earn gold");
  console.log("- Health can't go above 100");
}

// ===========================
// Movement Functions
// Functions that handle player movement
// ===========================

/**
 * Handles movement between locations
 * @param {number} choiceNum The chosen option number
 * @returns {boolean} True if movement was successful
 */
function move(choiceNum) {
  let validMove = false;

  if (currentLocation === "village") {
    if (choiceNum === 1) {
      currentLocation = "blacksmith";
      console.log("\nYou enter the blacksmith's shop.");
      validMove = true;
    } else if (choiceNum === 2) {
      currentLocation = "market";
      console.log("\nYou enter the market.");
      validMove = true;
    } else if (choiceNum === 3) {
      currentLocation = "forest";
      console.log("\nYou venture into the forest...");
      validMove = true;

      // Trigger combat when entering forest
      console.log("\nA monster appears!");
      if (!handleCombat()) {
        currentLocation = "village";
      }
    }
  } else if (currentLocation === "blacksmith") {
    if (choiceNum === 2) {
      currentLocation = "village";
      console.log("\nYou return to the village center.");
      validMove = true;
    }
  } else if (currentLocation === "market") {
    if (choiceNum === 2) {
      currentLocation = "village";
      console.log("\nYou return to the village center.");
      validMove = true;
    }
  } else if (currentLocation === "forest") {
    if (choiceNum === 1) {
      currentLocation = "village";
      console.log("\nYou hurry back to the safety of the village.");
      validMove = true;
    }
  }

  return validMove;
}

// ===========================
// Input Validation
// Functions that validate player input
// ===========================

/**
 * Validates if a choice number is within valid range
 * @param {string} input The user input to validate
 * @param {number} max The maximum valid choice number
 * @returns {boolean} True if choice is valid
 */
function isValidChoice(input, max) {
  if (input === "") return false;
  let num = parseInt(input);
  return num >= 1 && num <= max;
}

/**
 * Handles a player's choice given the displayed options
 * @param {number} choice - 1-based index of chosen option
 * @param {string[]} options - list of option labels for the current location
 */
function handleChoice(choice, options) {
  const selectedOption = options[choice - 1];

  switch (selectedOption) {
    case "Go to blacksmith":
      currentLocation = "blacksmith";
      console.log("\nYou head to the blacksmith.");
      break;
    case "Go to market":
      currentLocation = "market";
      console.log("\nYou walk into the market.");
      break;
    case "Enter forest":
      currentLocation = "forest";
      console.log("\nYou venture into the forest...");
      console.log("\nA monster appears!");
      if (!handleCombat()) {
        currentLocation = "village";
      }
      break;
    case "Climb mountain":
      console.log("\nYou begin the treacherous climb toward the mountain's peak...");
      console.log("\nAt the summit, a fearsome dragon awaits!");
      if (!handleCombat(true)) {
        console.log("\nYou were forced to retreat from the mountain.");
        currentLocation = "village";
      }
      break;
    case "Check status":
      showStatus();
      break;
    case "Use item":
      useItem();
      break;
    case "Help":
      showHelp();
      break;
    case "Quit game":
      console.log("\nThanks for playing!");
      gameRunning = false;
      break;
    case "Buy weapons":
      buyFromBlacksmith();
      break;
    case "Buy armor":
      if (playerGold >= shield.value) {
        playerGold -= shield.value;
        inventory.push({ ...shield });
        console.log(`\nYou bought a ${shield.name} for ${shield.value} gold.`);
      } else {
        console.log("\nNot enough gold for armor.");
      }
      break;
    case "Upgrade equipment":
      // Simple upgrade: replace basic sword with steel sword if possible
      const weaponIndex = inventory.findIndex((it) => it.type === "weapon");
      if (weaponIndex >= 0 && playerGold >= steelSword.value) {
        inventory.splice(weaponIndex, 1, { ...steelSword });
        playerGold -= steelSword.value;
        console.log(`\nYour weapon has been upgraded to ${steelSword.name}!`);
      } else if (weaponIndex < 0) {
        console.log("\nYou don't have a weapon to upgrade.");
      } else {
        console.log("\nNot enough gold to upgrade equipment.");
      }
      break;
    case "Return to village":
      currentLocation = "village";
      console.log("\nYou return to the village.");
      break;
    case "Buy potion":
      buyFromMarket();
      break;
    default:
      console.log("\nUnknown action.");
  }
}

// ===========================
// Main Game Loop
// Controls the flow of the game
// ===========================

if (require.main === module) {
  console.log("=================================");
  console.log("       The Dragon's Quest        ");
  console.log("=================================");
  console.log("\nYour quest: Defeat the dragon in the mountains!");

  // Get player's name
  playerName = readline.question("\nWhat is your name, brave adventurer? ");
  console.log("\nWelcome, " + playerName + "!");
  console.log("You start with " + playerGold + " gold.");

  while (gameRunning) {
    // Show current location and get the options
    const options = showLocation();

    // Get and validate player choice
    let validChoice = false;
    while (!validChoice) {
      try {
        let choice = readline.question("\nEnter choice (number): ");

        if (choice.trim() === "") {
          throw "Please enter a number!";
        }

        let choiceNum = parseInt(choice);
        if (isNaN(choiceNum)) {
          throw "That's not a number! Please enter a number.";
        }

        if (choiceNum < 1 || choiceNum > options.length) {
          throw `Please enter a number between 1 and ${options.length}.`;
        }

        validChoice = true;
        handleChoice(choiceNum, options);
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
