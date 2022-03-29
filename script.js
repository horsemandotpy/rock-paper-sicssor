const selections = ['rock', 'paper', 'scissor'] 

let playerScore = 0;
let computerScore = 0;

//Intialize computer choice
function computerPlay() {
    return selections[Math.floor(Math.random()*selections.length)];
}

//Compare computer selection with player
function playRound(playerSelection, computerSelection) {
    if (playerScore == 5)  { return 'Player win 5!'}
    if (computerScore == 5) { return 'Computer win 5!'}
    
    if (playerSelection != computerSelection) {
        if (playerSelection == 'rock') {
            if (computerSelection == 'scissor') {
                playerScore += 1;
                return  'player win!';
            } else { 
                computerScore += 1;
                return  'computer win!';
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
                return  'player win';
            } else {
                computerScore += 1;
                return 'computer win!'
            }
        }
        } else {
            computerScore += 1;
            playerScore += 1;
            return  'draw!';
        }
}

const div = document.createElement('div')
const buttons = document.querySelectorAll('button')
const resetgame = document.createElement('button')
const body = document.body

resetgame.textContent = 'play again?'
resetgame.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    div.textContent = '';
})

buttons.forEach((button) => {
    button.addEventListener('click', () =>{ 
        div.textContent = playRound(button.id, computerPlay());
    })
});   

body.append(div)
body.append(resetgame)
