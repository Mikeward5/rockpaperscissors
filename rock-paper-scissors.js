// get computer choice (DONE)
// get user choice
// keep track of human score and computer score
// play a round
// end a round when a player gets to 5
let humanScore = 0;
let computerScore = 0;
let round = 0

/* let getHumanChoice = () => {
   let humanChoice = prompt("rock, paper, or scissors?").toLowerCase();

    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("please choose either rock, paper or scissors!!!").toLowerCase();
    }
        return humanChoice;
    } */
let human = document.querySelector("#results");
let computer = document.querySelector("#computerResults");
let runningScore = document.querySelector("#runningScore");

document.querySelectorAll("button").forEach(button => {
            button.addEventListener("click", (event) => {
                if(round >= 5) {
                    if(humanScore > computerScore) {
                        alert("You won")
                    } else if(computerScore > humanScore) {
                        alert("Computer won")
                    } else {
                        alert("game was a draw")
                    }
                    let button = document.createElement("button");
                    button.textContent = "Reset";
                    runningScore.appendChild(button)
                    button.addEventListener("click", () => {round = 0 ;runningScore.textContent = 0})
                    return
                }
                let humanChoice = event.target.className;
                let computerChoice = getComputerChoice();
                 human.textContent = "The human chose " + humanChoice;
                 playRound(humanChoice, computerChoice);
                runningScore.textContent = round;
        })
    })


let getComputerChoice = () => {
    let number = Math.floor(Math.random()  * 3)
    switch(number) {
        case 0:
            computer.textContent = "The Computer chose rock";
            return 'rock';
            break;
        case 1:
            computer.textContent = "The Computer chose paper";
            return 'paper';
            break;
        case 2:
            computer.textContent = "The Computer chose scissors";
            return 'scissors';
            break;
    }
}

const playRound = (humanChoice, computerChoice) => {
  if(humanChoice === computerChoice) {
    console.log("This round is a draw");
    round++
    console.log("Round " + round)
    return;
  }
  if(humanChoice === "rock") {
    if(computerChoice === "paper") {
        computerScore++
        console.log("The computer has won")
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
        round++
        console.log("Round " + round)
    }
    if(computerChoice === "scissors") {
        humanScore++
        console.log("You have won this round");
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
        round++
        console.log("Round " + round)
    }
  }
  if(humanChoice === "paper") {
    if(computerChoice === "scissors") {
        computerScore++
        console.log("The computer has won");
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
        round++
        console.log("Round " + round)
    }
    if(computerChoice === "rock") {
        humanScore++
        console.log("You have won this round");
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
        round++
        console.log("Round " + round)
    }
  }
  if(humanChoice === "scissors") {
    if(computerChoice === "rock") {
        computerScore++
        console.log("The computer has won");
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
        round++
        console.log("Round " + round)
    }
    if(computerChoice === "paper") {
        humanScore++
        console.log("You have won this round");
        console.log("Computer score: " + computerScore);
        console.log("Human score: " + humanScore);
        round++
        console.log("Round " + round)
    }
  }
}