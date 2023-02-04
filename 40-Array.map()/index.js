let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squares = numbers.map(square);
let qubes = numbers.map(qube);

squares.forEach(print);
qubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function qube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element);
}