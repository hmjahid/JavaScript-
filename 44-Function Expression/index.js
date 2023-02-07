
let count = 0;


document.getElementById("increaseButton").onclick = function() {
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function() {
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}


/*
// onclick="increaseCount()" event need to add in button

function increaseCount(){
    count +=1;
    document.getElementById("myLabel").innerHTML = count;
}


// onclick="decreaseCount()" event need to add in button

function decreaseCount(){
    count -=1;
    document.getElementById("myLabel").innerHTML = count;
}
*/


const greetings = function(){
    console.log("Hello Mr.!");
}

greetings();


sayHello();

function sayHello(){
    console.log("Hello!");
}