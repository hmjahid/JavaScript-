
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
});

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor ="red";
vegetables[1].style.backgroundColor ="magenta";
vegetables[2].style.backgroundColor ="yellow";

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor ="pink";
desserts[1].style.backgroundColor ="lightblue";
desserts[2].style.backgroundColor ="gray";

let selectorId = document.querySelector("#myTitle");
selectorId.style.backgroundColor ="violet";

let selectorAttributes = document.querySelector("[for]");
selectorAttributes.style.backgroundColor = "salmon";

let selectorClass = document.querySelectorAll("li");
selectorClass.forEach(selectorClass => {
    selectorClass.style.backgroundColor = "white";
});

let selectorForAttributes = document.querySelectorAll("[for]");
selectorForAttributes.forEach(selectorForAttributes => {
    selectorForAttributes.style.backgroundColor = "orange";
});