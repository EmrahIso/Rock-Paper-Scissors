// Rock Paper Scissors 
// Pseudocode 

// 1. Write a function getComputerChoice() that gets computer choice 
// 2. Prompt for user selection
// 3. Make choices case-insensitive 
// 4. Compare the values ​​of these two functions inside another function
// 5. If the choices are the same, restart the round and write a tie in the console
// 6. Else return a string that declares the winner of the round
// 7. Write a function game() and use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end

function getPlayerChoice() { 
    return  prompt('Enter rock or paper or scissors').toUpperCase();
}

const playerSelection = getPlayerChoice();

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

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        alert('Tie, try another one');
        let newPlayerSelection = getPlayerChoice();
        return playRound(newPlayerSelection, computerSelection);
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

console.log(playRound(playerSelection, computerSelection));