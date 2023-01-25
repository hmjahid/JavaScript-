
document.getElementById("submitButton").onclick = function (){

    let temp;
    

    if (document.getElementById("celsiusButton").checked){
        temp = document.getElementById("inputBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("outputLabel").innerHTML = temp + "°C";


    }
    else if (document.getElementById("fahrenheitButton").checked){
        temp = document.getElementById("inputBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("outputLabel").innerHTML = temp + "°F";

    }
    else if (document.getElementById("kelvinButton").checked){
        temp = document.getElementById("inputBox").value;
        temp = Number(temp);
        temp = toKelvin(temp);
        document.getElementById("outputLabel").innerHTML = temp + "K";


    }
    else{
        document.getElementById("outputLabel").innerHTML = "Select a unit";
    
    }


}


/*
let temp = 32;
temp = toCelsius(temp);
console.log(temp);

temp = 32;
temp = toFahrenheit(temp);
console.log(temp);

temp = 32;
temp = toKelvin(temp);
console.log(temp);
*/

function toCelsius(temp){
    return (temp - 32) * 5/9;
}

function toFahrenheit(temp){
    return (temp * 9/5) + 32;
}

function toKelvin(temp){
    return temp + 273.15;
}