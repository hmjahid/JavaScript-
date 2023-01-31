let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log(...numbers);

let userName = "Jahid Hasan";
console.log(userName);
console.log(...userName);

let maximumNumber = Math.max(numbers);
console.log(maximumNumber);

let minimumNumber = Math.min(numbers);
console.log(minimumNumber);

maximumNumber = Math.max(...numbers);
console.log(maximumNumber);

minimumNumber = Math.min(...numbers);
console.log(minimumNumber);


let friendsGroup1 = ["Shariful", "Jahid", "Al-amin"];
let friendsGroup2 = ["Ruhul", "Palash", "Kamrul"];
let friendsGroup3 = ["Azmine", "Sazal", "Bappy"];

friendsGroup1.push(friendsGroup2);

console.log(friendsGroup1);
console.log(...friendsGroup1);

friendsGroup2.push(...friendsGroup3);

console.log(friendsGroup2);