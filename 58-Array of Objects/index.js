class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`You are driving a ${this.model}`);
    }  
}

const car1 = new Car("BMW", 2022, "Red");
const car2 = new Car("NISSAN", 2021, "Black");
const car3 = new Car("CADILLAC", 2023, "White");
const car4 = new Car("FERRARI", 2022, "Grey");

const cars = [car1, car2, car3, car4];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

console.log(cars[0].model);
console.log(cars[0].year);
console.log(cars[0].color);

console.log(cars[1].model);
console.log(cars[1].year);
console.log(cars[1].color);

console.log(cars[2].model);
console.log(cars[2].year);
console.log(cars[2].color);

console.log(cars[3].model);
console.log(cars[3].year);
console.log(cars[3].color);


cars[0].drive();
cars[1].drive();
cars[2].drive();
cars[3].drive();



startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}