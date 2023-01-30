let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "onions", "potatos"];
let meats = ["beef", "mutton", "chicken"];

let groceryList = [fruits, vegetables, meats];

console.log(groceryList);


groceryList[0][1] = "coconut";
groceryList[1][1] = "eggplants";
groceryList[2][0] = "duck";



for(let lists of groceryList){
    console.log(lists);
}


for(let lists of groceryList){
    for(let foods of lists){
        console.log(foods);
    }
}