let adult = checkAge(28);

console.log(adult);

function checkAge(age) {

    return age >= 18 ? true : false;
}



checkWinner(true);

function checkWinner(win){
    win ? console.log("You win") : console.log("You lose");
}