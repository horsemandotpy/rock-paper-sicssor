const selections = ['rock', 'paper', 'scissor']
let playerScore = 0;
let computerScore = 0;
//Intialize computer choice
function computerPlay() {
    return selections[Math.floor(Math.random()*selections.length)];
}

//Compare computer selection with player
function playRound(playerSelection, computerSelection) {
    if (playerSelection != computerSelection) {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissor') {
                playerScore += 1;
                return 'player win!';
            } else { 
                computerScore += 1;
                return 'computer win!';
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'rock') {
                playerScore += 1;
                return 'player win!';
            } else {
                computerScore += 1;
                return 'computer win!';
            }
        }
        else if (playerSelection == 'scissor') {
            if (computerSelection == 'paper') {
                playerScore += 1;
                return 'player win';
            } else {
                computerScore += 1;
                return 'computer win!'
            }
        }
        } else {
            computerScore += 1;
            playerScore += 1;
            return 'draw!';
        }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('What is your choice?');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    } 
    scoreboard();
} 

function scoreboard() {
    if (computerScore < playerScore) {console.log('Player win 5!')}
    else if (computerScore > playerScore) {console.log('Computer win 5 !')}
    else {console.log('It\' a tie!')}
}

game();
