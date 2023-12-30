// Rock Paper Scissors 
// Pseudocode 

// 1. Write a function getComputerChoice() that gets computer choice 
// 2. Prompt for user selection
// 3. Make choices case-insensitive 
// 4. Compare the values ​​of these two functions inside another function playRound
// 5. If the choices are the same, restart the round and write a tie in the console
// 6. Else return a string that declares the winner of the round
// 7. Write a function game() and use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end

function getPlayerChoice() { 
    return  prompt('Enter rock or paper or scissors').toUpperCase();
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber <= 3) {
        return 'ROCK';
    } else if(randomNumber <= 6) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        console.log('Tie, try another one');
        const newPlayerSelection = getPlayerChoice();
        const newComputerSelection = getComputerChoice();
        return playRound(newPlayerSelection, newComputerSelection);
    } else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return 'You Won! Rock beats Scissors';
    } else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return 'You Won! Paper beats Rock';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return 'You Won! Scissors beats Paper';
    } else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return 'You Lose! Paper beats Rock';
    } else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return 'You Lose! Scissors beats Paper';
    } else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return 'You Lose! Rock beats Scissors';
    }
}



function game() {
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
       let playerSelection = getPlayerChoice();
       let computerSelection = getComputerChoice();
       const message = playRound(playerSelection, computerSelection);
       console.log(message);
       if(message.includes('Won')) {
        userScore++;
       } else if(message.includes('Lose')) {
        computerScore++;
       }
       console.log('User score: ' + userScore);
       console.log('Computer score: ' + computerScore);
    }
    if(userScore > computerScore) {
        return 'You won the game';
    } else if(userScore < computerScore) {
        return 'You lose the game';
    } else {
        return 'Draw';
    }
}

console.log(game());
