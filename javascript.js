
if (confirm("Would you like to play?")) start(); 

function start(keepPlaying) {
    let playerInput = prompt("rock, paper, or scissors?");
     playerInput = playerInput.toLowerCase();
    let computerInput = getComputerInput();
    if (playerInput =='rock' || playerInput == 'paper' || playerInput == 'scissors'){
        alert('Computer rolls ' + computerInput);
        alert(findWinner(playerInput, computerInput));
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

function findWinner(player,computer){
    if (player == 'rock' && computer == 'scissors') return "Rock beats scissors, you win!!" ;
    else if (player == 'rock' && computer == 'paper') return "Paper beats rock, you lose :(";
    else if (player == 'paper' && computer == 'scissors') return "Scissors beats paper, you lose :(";
    else if (player == 'paper' && computer == 'rock') return "Paper beats rock, you win!!";
    else if (player == 'scissors' && computer == 'paper') return "Scissors beats paper, you win!!";
    else if (player == 'scissors' && computer == 'rock') return "Rock beats scissors, you lose :(";
    else return "DRAW";
}