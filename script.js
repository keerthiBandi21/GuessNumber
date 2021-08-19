

let heighestScore = 0;

let guessednum = 0;
let attempts = 20;
let ran = Math.ceil(Math.random()*20);
function clearInput(){
    document.getElementById("guessednumber").value="";
    document.getElementById("guessednumber").focus();
}
clearInput();
function getguess(event){
    guessednum = event.target.value;
}

document.getElementById("heighest").innerText = heighestScore;
document.getElementById("score").innerText = 0;

function checkfun() {
    console.log(guessednum);
    console.log(ran);
    
    attempts -= 1;  
    if(document.getElementById("guessednumber").value === "") {
        
        document.getElementById("guessquote").innerText="Please enter some number";
    }
    else if(ran == guessednum)
        {
            document.getElementById("randomNum").innerHTML = ran;
            document.getElementById("guessquote").innerText="Contragulations! You WON";
            document.getElementById("score").innerText = attempts;
            heighestScore += attempts;
            document.getElementById("heighest").innerText = heighestScore;
        }
    else if(ran < guessednum)
    {
        document.getElementById("guessquote").innerText="Oops! Your number is too big for the number";
    }
    else
    {
        document.getElementById("guessquote").innerText="Oops! Your number is too small for the number";
    }clearInput();
}

function gamereset() {
    guessednum = 0;
    attempts = 20;
    ran = Math.ceil(Math.random()*20);
    document.getElementById("randomNum").innerHTML = "?";
    document.getElementById("score").innerText = 0;
    document.getElementById("guessquote").innerText="Please enter some number from 1 to 20";
    document.getElementById("guessednumber").focus();
}