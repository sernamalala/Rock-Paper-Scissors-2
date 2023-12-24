

var randomNumber = Math.floor(Math.random()*3);
var choices = ["Rock","Paper","Scissors"];

var times = 0;
var score1 = 0;
var score2 = 0;

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click",function(){

    
    gameRound("Rock",getComputerChoice());
});
paperButton.addEventListener("click",function(){

    
    gameRound("Paper",getComputerChoice());
});
scissorsButton.addEventListener("click",function(){

    
    gameRound("Scissors",getComputerChoice());
});

function getUserInput(){

}

function getComputerChoice(){

    
    var computerInput = choices[randomNumber];
    return computerInput;
    

}

function gameRound (playerSelection,computerSelection){
    
        
        

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){

        document.querySelector("h3").innerHTML = ("Tie!! You two are on the same brain wavelength!!");

    }

    else if((playerSelection.toLowerCase() === "Rock".toLowerCase()) && ((computerSelection.toLowerCase() === "Scissors".toLowerCase()))){

        document.querySelector("h3").innerHTML = ("You Win! rock beats scissor!!");
        
        score1++;
        document.querySelector(".score1").innerHTML = score1;
    }

    else if((playerSelection.toLowerCase() === "Paper".toLowerCase()) && ((computerSelection.toLowerCase() === "Rock".toLowerCase()))){

        document.querySelector("h3").innerHTML = ("You Win! paper beats rock");
        score1++;
        document.querySelector(".score1").innerHTML = score1;
    }

    else if((playerSelection.toLowerCase() === "Scissors".toLowerCase()) && ((computerSelection.toLowerCase() === "Paper".toLowerCase()))){

        document.querySelector("h3").innerHTML = ("You Win! scissor beats paper!!");
        score1++;
        document.querySelector(".score1").innerHTML = score1;
    }
/////////////////////////////////
    else if((playerSelection.toLowerCase() === "Rock".toLowerCase()) && ((computerSelection.toLowerCase() === "Paper".toLowerCase()))){

        document.querySelector("h3").innerHTML = ("You Lose paper beats rock!!");
        score2++;
        document.querySelector(".score2").innerHTML = score2;
    }

    else if((playerSelection.toLowerCase() === "Paper".toLowerCase()) && ((computerSelection.toLowerCase() === "Scissors".toLowerCase()))){

        document.querySelector("h3").innerHTML = ("You Lose scissor beats paper!!");
        score2++;
        document.querySelector(".score2").innerHTML = score2;
    }

    else if((playerSelection.toLowerCase() === "Scissors".toLowerCase()) && ((computerSelection.toLowerCase() === "Rock".toLowerCase()))){

        document.querySelector("h3").innerHTML = ("You Lose rock beats scissor!!");
        score2++;
        document.querySelector(".score2").innerHTML = score2;
    }
    
    if(score1 ==5  || score2 == 5){

        announce();
    }

}

function game(){

    
    gameRound(getUserInput(), getComputerChoice());


}


console.log(getUserInput());
console.log(getComputerChoice());

function announce(){
if(score1>score2){

    document.querySelector("h3").innerHTML = ("User has Won!!");
    let restart = document.querySelector(".score").innerHTML = "Restart?";
    restart.addEventListener("click",function(){
        game();
    })
}
else if(score1<score2){
    document.querySelector("h3").innerHTML = ("Computer has Won!!");
    let restart = document.querySelector(".score").innerHTML = "Restart?";
    restart.addEventListener("click",function(){
        game();
    })
}
else{
    document.querySelector("h3").innerHTML = ("It's a tie!!");
    let restart = document.querySelector(".score").innerHTML = "Restart?";
    restart.addEventListener("click",function(){
        game();
    })
}
}

