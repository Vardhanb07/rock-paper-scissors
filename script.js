function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return 'rock';
    }else if(num == 1){
        return 'paper';
    }else if(num == 2){
        return 'scissors';
    }
}

// function getHumanChoice(){
//     let choice = prompt('Enter your choice : ');
//     choice = choice.toLowerCase();
//     return choice;
// }

let computerScore = 0;
let humanScore = 0;

function playGame(x,y){
    //win
    if (x === 'rock' && y === 'scissors'){
        // console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }else if(x === 'paper' && y === 'rock'){
        // console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }else if(x === 'scissors' && y === 'paper'){
        // console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }
    //lose
    else if(x === 'rock' && y === 'paper'){
        //console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }else if(x === 'paper' && y === 'scissors'){
        //console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }else if(x === 'scissors' && y === 'rock'){
        //console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }
    //tie
    // else if(x === y){
    //     //console.log("It's a tie!");
    // }
}

// function playRound(){
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     return playGame(humanChoice,computerChoice);
// }

// for(let i = 0; i < 5; i++){
//     playRound();
// }

// console.log("Your score : " + humanScore);
// console.log("Computer score : " + computerScore);

const hScore = document.querySelector('.humanScore');
const cScore = document.querySelector('.computerScore');
//Shows human choice onto the screen 
const  hChoice = document.querySelector('.humanChoice');
//Rock 
const cChoice = document.querySelector('.computerChoice');
const rock = document.querySelector('.rock');
let cc = getComputerChoice();
rock.addEventListener('click', () => {
    hChoice.textContent = 'Your choice : Rock';
    playGame('rock',cc);
    hScore.textContent = `Your score : ${humanScore}`;
    // cScore.textContent = `Computer score : ${cc}`;
    cc = getComputerChoice();
})
console.log(cc);
//Paper
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    hChoice.textContent = 'Your choice : Paper';
    playGame('paper',getComputerChoice());
    hScore.textContent = `Your score : ${humanScore}`;
    cScore.textContent = `Computer score : ${computerScore}`;
    cChoice.textContent = `Computer choice : ${getComputerChoice()}`;
})
//Scissors
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    hChoice.textContent = 'Your choice : Scissors';
    playGame('scissors',getComputerChoice());
    hScore.textContent = `Your score : ${humanScore}`;
    cScore.textContent = `Computer score : ${computerScore}`;
})
// Shows computer choice onto the screen
rock.addEventListener('click', () => {
    cChoice.textContent = `Computer choice : ${cc}`; 
    console.log(cc); 
})

paper.addEventListener('click', () => {
    cChoice.textContent = `Computer choice : ${getComputerChoice()}`;  
    console.log(getComputerChoice());
})

scissors.addEventListener('click', () => {
    cChoice.textContent = `Computer choice : ${getComputerChoice()}`;  
    console.log(getComputerChoice());
})
