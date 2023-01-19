/*
let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C : ",c);
*/

document.getElementById("submitBtn").onclick = function(){
let a = document.getElementById("sideA").value;
a = Number(a);

let b = document.getElementById("sideB").value;
b = Number(b);

let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById("clabel").innerHTML = "Side C : "+ c;
}