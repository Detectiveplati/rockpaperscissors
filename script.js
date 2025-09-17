
// Make a function that gets a 
function computerChoice() {
    
let number = Math.floor(Math.random() * 3) + 1;
if (number === 1)
    return "scissors";
else if (number === 2)
    return "rock";
else (number === 3)
    return "paper";
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Play round function
// 
function playround() {
    const cpuChoice = computerChoice();
    const choice = prompt("Scissors, Papers or Rock?");
    
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    }
    console.log(`Computer chose: ${cpuChoice}`);
    console.log(`You chose: ${choice}`);

    if (choice === cpuChoice){
        console.log("Its a tie")
    }
    else if (rules[choice] === cpuChoice){
        console.log("You Win this round!")
        humanScore ++;
        console.log(`Your Score is ${humanScore}!`);
        console.log(`Computer Score is ${computerScore}!`);
    }
    else {
        console.log("You lose this round!");
        computerScore ++;
        console.log(`Your Score is ${humanScore}!`);
        console.log(`Computer Score is ${computerScore}!`);
    }
} 

//Start game 5 rounds and print who wins
function startGame() {
for (let i = 0; i < 5; i++) {
    
        playround()
        
    }
    if (humanScore > computerScore ) {
        console.log(`You win!`)
    }
    else {
        console.log(`CPU win!`)
    } 
}

startGame();

