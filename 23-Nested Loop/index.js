
for(let i = 1; i <= 3; i += 1){
    for(let j = 1; j <= 4; j += 1){
        console.log(j);
    }
}


let symbol = window.prompt("Enter your symbol")
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");


for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= columns; j += 1){
       document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}
