let fruits = ["apple", "orange", "mango", "banana"];

console.log(fruits);


fruits[2] = "lemon";

console.log(fruits);


let length = fruits.length;

console.log(length);


fruits.pop();              // Removes last element
console.log(fruits);


fruits.push("dates");       // Add elemen at the last

console.log(fruits);


fruits.unshift("grapes");   // Add element at the beginning

console.log(fruits);


fruits.shift();             // Removes element from the beginning

console.log(fruits);


let index = fruits.indexOf("lemon");

console.log(index);