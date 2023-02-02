/*

let total = sum(8, 12);
displayOutput(total);
displayDOM(total);


function sum(x, y){
    let result = x + y;
    return result;
}

*/

sum(111, 222, displayDOM);

function sum(x, y, callBack){
    let result = x + y;
    callBack(result);
}

function displayOutput(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("outputLabel").innerHTML = output;
}