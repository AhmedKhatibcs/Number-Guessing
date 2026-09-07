// Learned to put the Javascript script below as it run it before the html
//Kind of like the second one with querySelector
// const textAttempt = document.getElementById("bestAttempt");
// const testing = document.querySelector("#bestAttempt h1");
// const inputField = document.
// console.log(textAttempt.textContent);
// console.log(document);
// console.dir(document);


//If statements:
    // if (1 == 2){
    //     document.body.style.backgroundColor = "blue";
    // }
//



//Note to self: Both method works with value
// function SubmitClick(){
//     //Both work:
//     // let submit = document.querySelector("#guessInput");
//     // submit.value = "";
//       let submit = document.getElementById("guessInput");
//       submit.value = "";
// }

//global scope (locally would destory everytime)
document.getElementById("tries").innerText = ("Tries "+ 10);
let tries = 10;

function randomNumber(){
    return Math.floor(Math.random()*100);
}

function SubmitClick(){
    console.log(randomNumber());
    //DOM tree (then we get the element by ID), then value is attribute
    let userAnswer = document.querySelector("#guessInput").value;
    //return true for invalid so string (works)|| constraints (dosen't)
    if (isNaN(userAnswer) || (0 > userAnswer  || userAnswer > 99)){
        console.log("Sorry Invalid");
        document.querySelector("#guessInput").placeholder = "Invalid";
        console.log(userAnswer);
        // Checking the box now in that moment
        newAnswer = document.querySelector("#guessInput").value = "";
    } else{
        if (tries == 1){
            console.log("sorry out of luck!");
            document.getElementById("tries").innerText = "sorry out of luck!";
            tries -= 1;
            return;
    }

         if (tries > 0){
            tries -= 1;
            document.getElementById("tries").innerText = ("Tries "+ tries);
            console.log(userAnswer);
            console.log(userAnswer);
            console.log(tries); 
    }

    }

}




