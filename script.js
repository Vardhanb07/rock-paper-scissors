function getComputerChoice () {
    let i = Math.floor(Math.random() * 3);
    if(i == 0){
        return "rock";
    }else if(i == 1){
        return "paper";
    }else {
        return "scissors";
    }
}

console.log(getComputerChoice());