//global variable
let tries = 10;
let randomNumberRound = 0;
GameStart(); //(happens once in the loop)
console.log("Game Start");

function randomNumber(){
    return Math.floor(Math.random()*100);
}


function GameStart(){
    if(tries == 0){
        tries = 10;
    }
    document.getElementById("tries").innerText = ("Tries "+ 10);
    randomNumberRound = randomNumber();
    console.log(randomNumberRound);
    return randomNumberRound;
}

function correctAnswer(userAnswer, randomNumber){
    console.log(parseInt(userAnswer) === randomNumber);
    if(parseInt(userAnswer) === randomNumber){
            playAgain = document.querySelector("#guessInput").value;
            if(playAgain == "yes"){
                    GameStart();
            } else{
                console.log("Not work");
            }
        }
    }
//Function: Tries
function triesLeft(userAnswer){
      if (tries == 1){
            tries -= 1;
            document.getElementById("tries").innerText = "sorry out of luck! Play Again, type \"yes";
            document.querySelector("#guessInput").value = "";
            //grabs "empty string"
    }

          else if(tries > 0) {
            correctAnswer(userAnswer, randomNumberRound);
            tries -= 1;
            document.getElementById("tries").innerText = ("Tries "+ tries);
            console.log(userAnswer);
    }
}


// function validChecker(input){
   
// }
//Function: Invalid Checker
function invalidChecker(userAnswer){
    //return true for invalid so string (works)|| constraints (dosen't)
    if (isNaN(userAnswer) || (0 > userAnswer  || userAnswer > 99)){
        document.querySelector("#guessInput").placeholder = "Invalid";
        // console.log(userAnswer);
        // Checking the box now in that moment
        newAnswer = document.querySelector("#guessInput").value = "";
}
}

//Function: 

function WaitingGame(){
    if(tries == 0){
            return true;
    }
    else{
        return false
    }
}


//Fix scope issue/and functions
function SubmitClick(){
    if(!WaitingGame()){ //wrong (fix later)
        let userAnswer = document.querySelector("#guessInput").value;
        //DOM tree (then we get the element by ID), then value is attribute
        invalidChecker(userAnswer); //This works
    
        triesLeft(userAnswer);
} 

    }

function RevealClick(){
    console.log(randomNumberRound);
    document.getElementById("numbers").innerHTML = "The answer is: " + randomNumberRound;
}





