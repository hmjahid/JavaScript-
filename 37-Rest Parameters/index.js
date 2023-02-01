let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;


console.log(sum1(a, b));

function sum1(a, b) {
    return a + b;
}

console.log(sum2(a, b, c));

function sum2(a, b, c) {
    return a + b + c;
}

console.log(sum3(a, b, c, d));

function sum3(a, b, c, d) {
    return a + b + c + d;
}

console.log(sum4(a, b, c, d, e));

function sum4(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sum5(a, b, c, d, e, f));

function sum5(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}




console.log(sum(a, b));
console.log(sum(a, b, c));
console.log(sum(a, b, c, d));
console.log(sum(a, b, c, d, e));
console.log(sum(a, b, c, d, e, f));


function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

/*
function sum(x, y, ...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
*/

// x & y is the parameters of a & b respectably