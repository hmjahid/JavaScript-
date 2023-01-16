let age = window.prompt("How old are you?");
console.log(age);

console.log(typeof age);

age =+1;
console.log(typeof age);

let ageOfMyFather = window.prompt("How old is your father?");
console.log(ageOfMyFather);

console.log(typeof ageOfMyFather);

ageOfMyFather = Number(ageOfMyFather);

console.log(typeof ageOfMyFather);

let ageOfMyMother = 46;
console.log(ageOfMyMother);

console.log(typeof ageOfMyMother);

ageOfMyMother = String(ageOfMyMother);

console.log(typeof ageOfMyMother);

let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza");
a = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(a, typeof a);