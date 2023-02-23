/*
const element = document.getElementById("myButton");
element.onclick = doSomething;
*/

/*
const element = document.body;
element.onload = doSomething;
*/

/*
const element = document.getElementById("myText");
element.onchange = doSomething;
*/

const element = document.getElementById("myDiv");
//element.onmouseover = changeColor1;
//element.onmouseleave = changeColor2;
element.onmousedown = changeColor3;
element.onmouseup = changeColor4;

function changeColor1(){
    element.style.backgroundColor = "pink";
}
function changeColor2(){
    element.style.backgroundColor = "lightgreen";
}
function changeColor3(){
    element.style.backgroundColor = "magenta";
}
function changeColor4(){
    element.style.backgroundColor = "yellow";
}

function doSomething(){
    alert("You did something!");
}