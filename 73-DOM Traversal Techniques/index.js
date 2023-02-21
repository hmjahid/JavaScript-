let element = document.body;
let child = element.firstElementChild;
child.style.backgroundColor = "pink";

let childLast = element.lastElementChild;
console.log(childLast);

let element1 = document.querySelector("#vegetables");
let parent = element.parentElement;
parent.style.backgroundColor = "violet";

let sibling1 = element1.nextElementSibling;
sibling1.style.backgroundColor = "green";

let sibling2 = element1.previousElementSibling;
sibling2.style.backgroundColor = "gray";

let element2 = document.querySelector("#fruits");
let child2 = element2.firstElementChild;
child2.style.backgroundColor = "lightblue";

let child3 = element2.lastElementChild;
child3.style.backgroundColor = "darkgray";

let element3 = document.querySelector("#desserts");
let child4 = element3.children[0];
child4.style.backgroundColor = "lightcoral";

let child5 = element3.children[2];
child5.style.backgroundColor = "magenta";

let element4 = document.querySelector("#flowers");
let children = Array.from(element4.children);

children.forEach(child => {
    child.style.backgroundColor = "white";
});
