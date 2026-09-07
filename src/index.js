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



//global scope (locally would destory everytime)
let tries = 10;
function SubmitClick(){
    //DOM tree (then we get the element by ID), then value is attribute
    const userAnswer = document.getElementById("guessInput").value;
    if (tries < 0){
        console.log("sorry out of luck!");
        return;
    }
    else{
     tries -= 1;
     console.log(userAnswer);
     console.log(tries);        
    }

}