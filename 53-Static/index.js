class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO");
    }
}

const car1 = new Car("BMW");
const car2 = new Car("NISSAN");
const car3 = new Car("HONDA");
const car4 = new Car("FERRARI");
const car5 = new Car ("TESLA");


console.log(Car.numberOfCars);

Car.startRace();
