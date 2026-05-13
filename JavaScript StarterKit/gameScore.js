// Game score display
let playerName = "Player1";
let score = 100;
let level = 5;
let bonusPoints = level * 10;
let totalScore = score + bonusPoints;

//Creating a game message
let gameMessage = `Congratulations, ${playerName}! Your total score is ${totalScore} points. You reached level ${level} and earned ${bonusPoints} bonus points!`;

// Display the game message
console.log(gameMessage);