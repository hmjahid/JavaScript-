let userName = "Jahid Hasan";
let phoneNumber = "123-456-7890";

console.log(userName);
console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("h"));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
let userName1 = userName.trim();
console.log(userName1);

let userName2 = userName.toUpperCase();
console.log(userName2);

let userName3 = userName.toLowerCase();
console.log(userName3);

console.log(phoneNumber);

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(phoneNumber);