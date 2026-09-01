let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getHumanChoice() {
 let humanPrompt = prompt('Please choose Rock, Paper or Scissors').toLowerCase()
 return humanPrompt;
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    switch(number) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log('This round is a draw')
    }
    if(humanChoice === 'rock') {
        if(computerChoice === 'paper') {
            console.log('Paper beats Rock, computer wins')
            computerScore++
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
        if(computerChoice === 'scissors') {
            console.log('Rock beats scissors, Human wins')
            humanScore++
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
    }
    if(humanChoice === 'paper') {
        if(computerChoice === 'scissors') {
            console.log('Scissors beats Paper, computer wins')
            computerScore++
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
        if(computerChoice === 'rock') {
            console.log('Paper beats Rock, Human wins')
            humanScore++
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
    }
    if(humanChoice === 'scissors') {
        if(computerChoice === 'rock') {
            console.log('Rock beats Scissors, computer wins')
            computerScore++
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
        if(computerChoice === 'paper') {
            console.log('Scissors beats Paper, Human wins')
            humanScore++
            console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        }
    }
}

function startGame() {
    while (roundNumber < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        roundNumber++
    }
}

startGame()