let playerScore = 0,
    computerScore = 0;
const button = document.querySelectorAll('button');
const computerRoll = document.querySelector('.computerRoll');
const score = document.querySelector('.score');
const whoWins = document.querySelector('.whoWins');

document.addEventListener('click', (event) =>{
    let playerInput = event.target.className;
    if (event.target.nodeName == 'BUTTON') playRound(playerInput);
});

function playRound(playerInput) {
    let computerInput = getComputerInput();
    // alert('Computer rolls ' + computerInput);
    computerRoll.textContent = `Computer rolls ${computerInput}`;
    findWinner(playerInput, computerInput);
    score.textContent = `Player Score ${playerScore} \nComputer Score ${computerScore}`;
};

function getComputerInput() {
   let random =  Math.floor(Math.random()*3);
   if (random == 0) return 'rock';
   else if (random == 1) return 'paper';
   else if (random == 2) return 'scissors';
}

function findWinner(player,computer) {
    if (player == 'rock' && computer == 'scissors') winAnnounce('player',player,computer);
    else if (player == 'rock' && computer == 'paper') winAnnounce('computer',player,computer);
    else if (player == 'paper' && computer == 'scissors') winAnnounce('computer',player,computer);
    else if (player == 'paper' && computer == 'rock') winAnnounce('player',player,computer);
    else if (player == 'scissors' && computer == 'paper') winAnnounce('player',player,computer);
    else if (player == 'scissors' && computer == 'rock') winAnnounce('computer',player,computer);
    else winAnnounce(0,player,computer);
}
function winAnnounce(winner, player, computer) {
    if (winner === 'computer'){
        whoWins.textContent = `${computer} beats ${player}, you lose :(`;
        computerScore++;
    } else if (winner === 'player'){
        whoWins.textContent = `${player} beats ${computer}, you win !!`;
        playerScore++;
    } else whoWins.textContent = "Draw";
}