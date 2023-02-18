let count = 0;
let max = window.prompt('Input a maximum count number:');
max = Number(max);

let myCount = setInterval(countUp, 1000);

function countUp(){
    count += 1;
    console.log(count);
    if(count >= max){
        clearInterval(myCount);
    }
}


// For passing a value of maximum interval number, max number must be passed as argument in the function

/*
let count1 = 0;
let max1 = 20;

let myCount1 = setInterval(countUp1, 1000, max1);

function countUp1(max1){
    count += 1;
    console.log(count);
    if(count >= max1){
        clearInterval(myCount1);
    }
}
*/