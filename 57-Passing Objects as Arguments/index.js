class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("BMW", 2022, "Red");
const car2 = new Car("NISSAN", 2021, "Black");
const car3 = new Car("CADILLAC", 2023, "White");
const car4 = new Car("FERRARI", 2022, "Grey");


displayInfo(car1);
displayInfo(car2);
displayInfo(car3);
displayInfo(car4);

changeColor(car1, "Blue");
displayInfo(car1);
changeColor(car4, "Gold");
displayInfo(car4);

function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}