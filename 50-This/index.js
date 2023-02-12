const car1 = {
    model:"Cadillac",
    color:"red",
    year:2022,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car2 = {
    model:"Nissan",
    color:"black",
    year:2023,

    drive: function(){
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();



this.name = "Md Jahid Hasan";

console.log(this.name);