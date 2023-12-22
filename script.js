

var randomNumber = Math.floor(Math.random()*3);
var choices = ["Rock","Paper","Scissors"];

var times = 0;
var score1 = 0;
var score2 = 0;

function getUserInput(){

    var userInput = prompt("Rock, Paper or Scissors?");
    return userInput;
}

function getComputerChoice(){

    
    var computerInput = choices[randomNumber];
    return computerInput;
    

}

function gameRound (playerSelection,computerSelection){

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){

        console.log("Tie!! You two are on the same brain wavelength!!");

    }

    else if((playerSelection.toLowerCase() === "Rock".toLowerCase()) && ((computerSelection.toLowerCase() === "Scissors".toLowerCase()))){

        console.log("You Win! rock beats scissor!!");
        score1++;
    }

    else if((playerSelection.toLowerCase() === "Paper".toLowerCase()) && ((computerSelection.toLowerCase() === "Rock".toLowerCase()))){

        console.log("You Win! paper beats rock");
        score1++;
    }

    else if((playerSelection.toLowerCase() === "Scissors".toLowerCase()) && ((computerSelection.toLowerCase() === "Paper".toLowerCase()))){

        console.log("You Win! scissor beats paper!!");
        score1++;
    }
/////////////////////////////////
    else if((playerSelection.toLowerCase() === "Rock".toLowerCase()) && ((computerSelection.toLowerCase() === "Paper".toLowerCase()))){

        console.log("You Lose paper beats rock!!");
        score2++;
    }

    else if((playerSelection.toLowerCase() === "Paper".toLowerCase()) && ((computerSelection.toLowerCase() === "Scissors".toLowerCase()))){

        console.log("You Lose scissor beats paper!!");
        score2++;
    }

    else if((playerSelection.toLowerCase() === "Scissors".toLowerCase()) && ((computerSelection.toLowerCase() === "Rock".toLowerCase()))){

        console.log("You Lose rock beats scissor!!");
        score2++;
    }
    


}
function game(){

    
    gameRound(getUserInput(), getComputerChoice());


}

while(times<5){

    game();
    times++;

}

console.log(getUserInput());
console.log(getComputerChoice());

if(score1>score2){

    console.log("User has Won!!");
}
else{
    console.log("Computer has Won!!");
}