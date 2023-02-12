const car = {
    model:"cadillac",
    color:"red",
    year:2022,

    drive: function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }

}

const car2 = {
    model:"nissan",
    color:"black",
    year:2023,

    drive: function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }

}

console.log(car.model);
console.log(car.color);
console.log(car.year);

car.drive();
car.brake();



console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();


const bangladesh = {
    size:"147,570 sq kms",
    population:"180 million(estimated)",
    continent:"asia",
    liberation:1971,

    description : function(){
        console.log("Bangladesh is a country situated in South-Asia. It's an independant country and member of UN & SAARC.");
    },
    economy : function(){
        console.log("Banagladesh is called emerging tiger in South-Asia. It's a developing country.");

    }
    
}

const pakistan = {
    size:"796,095 sq kms",
    population:"231.4 million(estimated)",
    continent:"Asia",
    liberation: 1947,

    description : function(){
        console.log("Pakistan is a country situated in South-Asia. It's an independant country and member of UN & SAARC.");
    },
    economy : function(){
        console.log("Pakistan is a low income developing country.");

    }
    
}

console.log(bangladesh.size);
console.log(bangladesh.population);
console.log(bangladesh.continent);
console.log(bangladesh.liberation);

bangladesh.description();
bangladesh.economy();


console.log(pakistan.size);
console.log(pakistan.population);
console.log(pakistan.continent);
console.log(pakistan.liberation);

pakistan.description();
pakistan.economy();