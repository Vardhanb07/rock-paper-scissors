function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return 'Rock';
    }else if(num == 1){
        return 'Paper';
    }else if(num == 2){
        return 'Scissors';
    }
}
let computerScore = 0;
let humanScore = 0;

function playGame(x,y){
    //win
    if (x === 'Rock' && y === 'Scissors'){
        // console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }else if(x === 'Paper' && y === 'Rock'){
        // console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }else if(x === 'Scissors' && y === 'Paper'){
        // console.log(`You win! ${x} beats ${y}`);
        humanScore++;
    }
    //lose
    else if(x === 'Rock' && y === 'Paper'){
        //console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }else if(x === 'Paper' && y === 'Scissors'){
        //console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }else if(x === 'Scissors' && y === 'Rock'){
        //console.log(`You lose! ${y} beats ${x}`);
        computerScore++;
    }
    //tie
    // else if(x === y){
    //     //console.log("It's a tie!");
    // }
}
let count = 0;
const humanChoice = document.querySelector('.humanChoice');
const computerChoice = document.querySelector('.computerChoice');
const rockPic = document.querySelector('.rock');
const humanScoreInText =  document.querySelector('.humanScore');
const computerScoreInText =  document.querySelector('.computerScore');
rockPic.addEventListener('click',() => {
    let cc = getComputerChoice();
    humanChoice.textContent = 'Your choice : Rock';
    computerChoice.textContent = `Computer choice : ${cc}`;
    playGame('Rock', cc);
    humanScoreInText.textContent = `Your score : ${humanScore}`;
    computerScoreInText.textContent = `Computer score : ${computerScore}`;
    console.log(cc);
})
