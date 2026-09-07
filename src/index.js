//global variable
let tries = 10;
GameStart();

function randomNumber(){
    return Math.floor(Math.random()*100);
}


function GameStart(){
    if(tries == 0){
        tries = 10;
    }
    document.getElementById("tries").innerText = ("Tries "+ 10);
    randomNumber();
    
}


//Function: Tries
function triesLeft(userAnswer){
      if (tries == 1){
            console.log("sorry out of luck!");
            tries -= 1;
            document.getElementById("tries").innerText = "sorry out of luck! Play Again, type \"yes";
            document.querySelector("#guessInput").value = "";
            console.log(tries);
            //grabs "empty string"
    }

          else if(tries > 0) {
            tries -= 1;
            document.getElementById("tries").innerText = ("Tries "+ tries);
            console.log(userAnswer);
            console.log(tries); 
    }
}


function validChecker(input){
   
}
//Function: Invalid Checker
function invalidChecker(userAnswer){
    //return true for invalid so string (works)|| constraints (dosen't)
    if (isNaN(userAnswer) || (0 > userAnswer  || userAnswer > 99)){
        console.log("Sorry Invalid");
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
        invalidChecker(userAnswer);
        //return true for invalid so string (works)|| constraints (dosen't)
        triesLeft(userAnswer);
} else{
        if (tries == 0){
            playAgain = document.querySelector("#guessInput").value;
            console.log(playAgain); //"" empty string
            if(playAgain == "yes"){
                    GameStart();
            } else{
                console.log("Not work");
            }
        }
    }

    }





