const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){

   let guess = document.getElementById("guessField").value;
   guesses += 1;

    if(guess == answer){
        alert(`${answer} is the number. It took you ${guesses} guess`);

    }
    else if(guess < answer){
        alert("Too low");
    }
    else{
        alert("Too big");
    }



}