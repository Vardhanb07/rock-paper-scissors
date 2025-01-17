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
        humanScore++;
    }else if(x === 'Paper' && y === 'Rock'){
        humanScore++;
    }else if(x === 'Scissors' && y === 'Paper'){
        humanScore++;
    }
    //lose
    else if(x === 'Rock' && y === 'Paper'){
        computerScore++;
    }else if(x === 'Paper' && y === 'Scissors'){
        computerScore++;
    }else if(x === 'Scissors' && y === 'Rock'){
        computerScore++;
    }
}

function reset() {
    humanChoice.textContent = 'Your choice : None';
    computerChoice.textContent = 'Computer choice : None';
    humanScoreInText.textContent = 'Your score : 0';
    computerScoreInText.textContent = 'Computer score : 0';
    humanScore = 0;
    computerScore = 0;
}

//x : human information, y : computer information

function choiceText(x, y){
    humanChoice.textContent = `Your choice : ${x}`;
    computerChoice.textContent = `Computer choice : ${y}`;
}

function scoreText(x, y){
    humanScoreInText.textContent = `Your score : ${x}`;
    computerScoreInText.textContent = `Computer score : ${y}`;
}

const humanChoice = document.querySelector('.humanChoice');
const computerChoice = document.querySelector('.computerChoice');
const humanScoreInText = document.querySelector('.humanScore');
const computerScoreInText = document.querySelector('.computerScore');
const feedback = document.querySelector('.feedbackPrompt');
let count = 0;

const rock = document.querySelector('.rock');

rock.addEventListener('click', () => {
    let cc = getComputerChoice();
    playGame('Rock', cc);
    choiceText('Rock', cc);
    scoreText(humanScore, computerScore);
});

rock.addEventListener('click', () => {
    count++;
});

const paper = document.querySelector('.paper');

paper.addEventListener('click', () => {
    let cc = getComputerChoice();
    playGame('Paper', cc);
    choiceText('Paper', cc);
    scoreText(humanScore, computerScore);
});

paper.addEventListener('click', () => {
    count++;
    console.log(count);
});

const scissors = document.querySelector('.scissors');

scissors.addEventListener('click', () => {
    let cc = getComputerChoice();
    playGame('Scissors', cc);
    choiceText('Scissors', cc);
    scoreText(humanScore, computerScore);
});

scissors.addEventListener('click', () => {
    count++;
    console.log(count);
});

const button = document.querySelector('.button');

button.addEventListener('click',() => {
    if(count >= 5){
        if(computerScore < humanScore){
            feedback.textContent = 'You win!';
            reset();
        }else{
            feedback.textContent = 'You lose!';
            reset();
        }
    }
});

const resetInfo = document.querySelector('.reset');

resetInfo.addEventListener('click', () => {
    reset();
    feedback.textContent = '';
});

