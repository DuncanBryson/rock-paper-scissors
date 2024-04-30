let playerScore = 0,
    computerScore = 0 ;

if (confirm("Would you like to play?")) start(); 

function start(keepPlaying) {
    let playerInput = prompt("rock, paper, or scissors?");
     playerInput = playerInput.toLowerCase();
    let computerInput = getComputerInput();
    if (playerInput =='rock' || playerInput == 'paper' || playerInput == 'scissors'){
        alert('Computer rolls ' + computerInput);
        findWinner(playerInput, computerInput);
        alert(`Player Score ${playerScore} \nComputer Score ${computerScore}`);
        playAgain();
    } else {
        alert("invalid input");
        playAgain();
    }
}
function playAgain(){
     if (confirm("Do you want to play again?")){
        start();
     } else alert("Thanks for playing");
}
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
        alert(`${computer} beats ${player}, you lose :()`);
        computerScore++;
    } else if (winner === 'player'){
        alert(`${player} beats ${computer}, you win !!`);
        playerScore++;
    } else alert("Draw");
}