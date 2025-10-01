
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
function playround(choice) {
    const cpuChoice = computerChoice();
    
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    }
    document.getElementById("cpu-choice").textContent = `Computer Chose: ${cpuChoice}`;
    document.getElementById("human-choice").textContent = `You Chose: ${choice}`;
    console.log(`Computer chose: ${cpuChoice}`);
    console.log(`You chose: ${choice}`);

    if (choice === cpuChoice){
        document.getElementById("results").textContent = "Its a tie!"
        console.log("Its a tie")
    }
    else if (rules[choice] === cpuChoice){
        document.getElementById("results").textContent = "You win this round!";
        console.log("You Win this round!")
        humanScore ++;
        updateScore();
        checkWinner();
        console.log(`Your Score is ${humanScore}!`);
        console.log(`Computer Score is ${computerScore}!`);
    }
    else {
        document.getElementById("results").textContent = "You lose this round!";
        console.log("You lose this round!");
        computerScore ++;
        updateScorec();
        checkWinner();
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


// Updates Scores on UI
function updateScore() {
    document.getElementById("human-score").textContent = humanScore;

};
function updateScorec() {
    document.getElementById("cpu-score").textContent = computerScore;

};


function checkWinner() {
    if (computerScore > 4) {
        resetScore();
        alert("CPU Wins");
    }
    else if (humanScore > 4) {
        resetScore();
        alert("You Win!");
        
    }
    return;

}

function resetScore() {
humanScore = 0;
computerScore = 0;
updateScorec();
updateScore();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playround(button.textContent.toLowerCase());
    });
});
// startGame();