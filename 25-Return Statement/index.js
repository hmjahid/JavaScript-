let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is :",area);

function getArea(width, height){
    let result = width * height;

    return result;

}

