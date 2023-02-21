
/*
const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter Your Full Name!");
document.body.append(nameTag);
*/

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "Mango";
//myList.append(listItem);
//myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);