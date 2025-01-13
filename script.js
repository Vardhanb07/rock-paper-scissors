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

function getHumanChoice(){
    let choice = prompt('Enter your choice : ');
    choice = choice.toLowerCase();
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playGame(x,y){
    //win
    if (x === 'rock' && y === 'scissors'){
        console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }else if(x === 'paper' && y === 'rock'){
        console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }else if(x === 'scissors' && y === 'paper'){
        console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }
    //lose
    else if(x === 'rock' && y === 'paper'){
        console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }else if(x === 'paper' && y === 'scissors'){
        console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }else if(x === 'scissors' && y === 'rock'){
        console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }
    //tie
    else if(x === y){
        console.log("It's a tie!");
    }
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    return playGame(humanChoice,computerChoice);
}

// for(let i = 0; i < 5; i++){
//     playRound();
// }

// console.log("Your score : " + humanScore);
// console.log("Computer score : " + computerScore);

//Shows human choice onto the screen 
const  choice = document.querySelector('.humanChoice');
//Rock 
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    choice.textContent = 'Your choice : Rock';
})
//Paper
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    choice.textContent = 'Your choice : Paper';
})
//Scissors
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    choice.textContent = 'Your choice : Scissors';
})

//Shows computer choice onto the screen
// const text = `Computer choice : $(cchoice)`;
// const computerChoice = document.querySelector('.computerChoice');
// rock.addEventListener('click', () => {
//     computerChoice.textContent = text;
// })



