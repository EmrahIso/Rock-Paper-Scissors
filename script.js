// Rock Paper Scissors 
// Pseudocode 

// 1. Write a function getComputerChoice() that gets computer choice 
// 2. Prompt for user selection
// 3. Make choices case-insensitive 
// 4. Compare the values ​​of these two functions inside another function
// 5. If the choices are the same, restart the round and write a tie in the console
// 6. Else return a string that declares the winner of the round
// 7. Write a function game() and use the previous function inside of this one to play a best-of-five game that keeps score and reports a winner or loser at the end


const playerSelection = prompt('Enter rock or paper or scissors').toUpperCase();
console.log(playerSelection);

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber < 4) {
        return 'ROCK';
    } else if(randomNumber <= 7) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

const computerSelection = getComputerChoice();


console.log(computerSelection);

