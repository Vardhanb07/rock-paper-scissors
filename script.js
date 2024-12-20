
function getComputerChoice () {
    let i = Math.floor(Math.random() * 3);
    if(i == 0){
        object = "rock";
    }else if(i == 1){
         object = "paper";
    }else {
        object = "scissors";
    }
    return object;
}

let choice;

function getHumanChoice(){
    choice = prompt("Enter your choice : ");
    choice = choice.toLowerCase();
    return choice;
}

function playGame(){

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection){

    //Human score calculation

    //Win

    if(humanSelection == 'rock' && computerSelection == 'scissors'){
        console.log(`You win! $(humanSelection) beats $(computerSelection)`);
        humanScore++;
    }else if(humanSelection == 'paper' && computerSelection == 'rock'){
        console.log(`You win! $(humanSelection) beats $(computerSelection)`);
        humanScore++;
    }else if(humanSelection == 'scissors' && computerSelection == 'paper'){
        console.log(`You win! $(humanSelection) beats $(computerSelection)`);
        humanScore++;
    }

    //Lose

    if(humanSelection == 'rock' && computerSelection == 'paper'){
        console.log(`You lose! $(humanSelection) beats $(computerSelection)`);
        computerScore++;
    }else if(humanSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You lose! $(humanSelection) beats $(computerSelection)`);
        computerScore++;
    }else if(humanSelection == 'scissors' && computerSelection == 'rock'){
        console.log(`You lose! $(humanSelection) beats $(computerSelection)`);
        computerScore++;
    }

}

}

for(let i = 0; i < 5; i++){
    playGame();
}