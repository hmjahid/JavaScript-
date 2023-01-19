let fullName = "Jahid Hasan";
let firstName;
let lastName;

firstName = fullName.slice(0, 5);
console.log(firstName);

lastName = fullName.slice(6);
console.log(lastName);

let firstName1 = fullName.slice(0, fullName.indexOf(" "));
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);