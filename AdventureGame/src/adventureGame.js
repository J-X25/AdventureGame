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
};

// Create empty inventory array (from previous lab)
let inventory = []; // Will now store item objects instead of strings

function showLocation() {
  console.log("\n=== " + currentLocation.toUpperCase() + " ===");

  const groups = getOptionsForLocation(currentLocation);
  const { movementOptions, shopOptions, combatOptions, miscOptions, options } = groups;

  // Print categorized numbered menu
  console.log('\nWhat would you like to do?');
  let counter = 1;
  if (movementOptions.length) {
    console.log('\n-- Movement --');
    movementOptions.forEach((opt) => {
      console.log(`${counter++}: ${opt}`);
    });
  }
  if (shopOptions.length) {
    console.log('\n-- Shop --');
    shopOptions.forEach((opt) => {
      console.log(`${counter++}: ${opt}`);
    });
  }
  if (combatOptions.length) {
    console.log('\n-- Combat --');
    combatOptions.forEach((opt) => {
      console.log(`${counter++}: ${opt}`);
    });
  }
  if (miscOptions.length) {
    console.log('\n-- Other --');
    miscOptions.forEach((opt) => {
      console.log(`${counter++}: ${opt}`);
    });
  }

  return options;
}

function getOptionsForLocation(loc) {
  let movementOptions = [];
  let shopOptions = [];
  let combatOptions = [];
  let miscOptions = [];

  if (loc === "village") {
    console.log("You're in a bustling village. The blacksmith and market are nearby.");
    movementOptions = ["Go to blacksmith", "Go to market", "Enter forest", "Climb mountain"];
    miscOptions = ["Check status", "Use item", "Help", "Quit game"];
  } else if (loc === "blacksmith") {
    console.log("The heat from the forge fills the air. Weapons and armor line the walls.");
    shopOptions = ["Buy weapons", "Buy armor", "Upgrade equipment"];
    miscOptions = ["Return to village"];
  } else if (loc === "market") {
    console.log("Merchants sell their wares from colorful stalls. A potion seller catches your eye.");
    shopOptions = ["Buy potion"];
    miscOptions = ["Return to village"];
  } else if (loc === "forest") {
    console.log("The forest is dark and eerie. You can hear the sounds of creatures lurking in the shadows.");
    combatOptions = ["Enter forest"]; // keep label for compatibility
    miscOptions = ["Return to village", "Check status", "Use item", "Help", "Quit game"];
  }

  const options = [...movementOptions, ...shopOptions, ...combatOptions, ...miscOptions];
  return { movementOptions, shopOptions, combatOptions, miscOptions, options };
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
function getItemsByType(type) {
  let matchedItems = [];
  for (let item of inventory) {
    if (item.type === type) {
      matchedItems.push(item);
    }
  }
  return matchedItems;
}

function getBestItem(type) {
  let bestItem = null;
  for (let item of inventory) {
    if (item.type === type) {
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

/**
 * Checks if the player has good enough equipment to face the dragon.
 * Requires the advanced weapon (Steel Sword) and any armor.
 * @returns {boolean}
 */
function hasGoodEquipment() {
  const hasSteelSword = inventory.some(
    (item) => item.type === "weapon" && item.name === "Steel Sword"
  );
  const hasArmor = inventory.some((item) => item.type === "armor");
  return hasSteelSword && hasArmor;
}

// ===========================
// Shopping Functions
// Functions that handle buying items
// ===========================

/**
 * Handles purchasing items at the blacksmith
 */
function buyFromBlacksmith() {
  const shopItems = [
    { ...sword },
    { ...steelSword },
    { ...shield },
    { ...ironShield },
  ];

  console.log("\nBlacksmith: 'Welcome! Here's what I have:'");
  shopItems.forEach((it, idx) => {
    console.log(
      `${idx + 1}. ${it.name} - ${it.value} gold - ${it.description}`
    );
  });
  console.log(`${shopItems.length + 1}. Cancel`);

  let choice = readline.question("\nBuy which item? (number): ");
  let num = parseInt(choice);
  if (isNaN(num) || num < 1 || num > shopItems.length + 1) {
    console.log("\nInvalid choice. Returning to the village.");
    return;
  }
  if (num === shopItems.length + 1) {
    console.log("\nMaybe next time.");
    return;
  }

  const item = shopItems[num - 1];
  if (playerGold >= item.value) {
    playerGold -= item.value;
    inventory.push({ ...item });
    console.log(`\nYou bought a ${item.name} for ${item.value} gold.`);
    console.log(`Gold remaining: ${playerGold}`);
  } else {
    console.log("\nBlacksmith: 'You don't have enough gold for that.'");
  }
}

/**
 * Handles purchasing items at the market
 */
function buyFromMarket() {
  const marketItems = [{ ...healthPotion }];

  console.log("\nMarket: 'Fresh wares! Take a look:'");
  marketItems.forEach((it, idx) => {
    console.log(`${idx + 1}. ${it.name} - ${it.value} gold - ${it.description}`);
  });
  console.log(`${marketItems.length + 1}. Cancel`);

  let choice = readline.question("\nBuy which item? (number): ");
  let num = parseInt(choice);
  if (isNaN(num) || num < 1 || num > marketItems.length + 1) {
    console.log("\nInvalid choice. Returning to the village.");
    return;
  }
  if (num === marketItems.length + 1) {
    console.log("\nYou step away from the stall.");
    return;
  }

  const item = marketItems[num - 1];
  if (playerGold >= item.value) {
    playerGold -= item.value;
    inventory.push({ ...item });
    console.log(`\nYou bought a ${item.name} for ${item.value} gold.`);
    console.log(`Gold remaining: ${playerGold}`);
  } else {
    console.log("\nMerchant: 'You don't have enough gold.'");
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
  // New move function: interprets choice number based on the current
  // set of options returned by showLocation(). Returns true on success.
  const groups = getOptionsForLocation(currentLocation);
  const optionsList = groups.options;
  const selected = optionsList[choiceNum - 1];

  if (!selected) return false;

  // Movement handling
  if (selected === "Go to blacksmith") {
    currentLocation = "blacksmith";
    console.log("\nYou enter the blacksmith's shop.");
    return true;
  }
  if (selected === "Go to market") {
    currentLocation = "market";
    console.log("\nYou enter the market.");
    return true;
  }
  if (selected === "Enter forest") {
    // Check for basic weapon before allowing forest exploration
    if (!hasItemType("weapon")) {
      console.log("\nThe forest is dangerous. You should have a weapon before entering.");
      return false;
    }
    currentLocation = "forest";
    console.log("\nYou venture into the forest...");
    console.log("\nA monster appears!");
    if (!handleCombat()) {
      currentLocation = "village";
    }
    return true;
  }
  if (selected === "Climb mountain") {
    // Require good equipment to face the dragon
    if (!hasGoodEquipment()) {
      console.log("\nThe mountain path is too perilous without better gear (Steel Sword + armor).");
      return false;
    }
    console.log("\nYou begin the treacherous climb toward the mountain's peak...");
    console.log("\nAt the summit, a fearsome dragon awaits!");
    if (!handleCombat(true)) {
      console.log("\nYou were forced to retreat from the mountain.");
      currentLocation = "village";
    }
    return true;
  }

  if (selected === "Return to village") {
    currentLocation = "village";
    console.log("\nYou return to the village.");
    return true;
  }

  return false;
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
  // Delegate movement-related options to the move() helper
  const movementLabels = [
    "Go to blacksmith",
    "Go to market",
    "Enter forest",
    "Climb mountain",
    "Return to village",
  ];
  if (movementLabels.includes(selectedOption)) {
    move(choice, options);
    return;
  }

  switch (selectedOption) {
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
      // Return handled by move(), but keep fallback here for safety
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

        if (!isValidChoice(choice, options.length)) {
          throw new Error(
            `Invalid input. Enter a number between 1 and ${options.length}.`
          );
        }

        let choiceNum = parseInt(choice, 10);
        validChoice = true;
        handleChoice(choiceNum, options);
      } catch (error) {
        console.log("\nError: " + error.message);
        console.log("Please try again.");
      }
    }

    // Check if player died
    if (playerHealth <= 0) {
      console.log("\nGame Over! Your health reached 0!");
      gameRunning = false;
    }
  }
}
