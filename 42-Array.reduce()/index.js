let prices = [10, 20, 30, 40, 50, 60];
let total = prices.reduce(checkOut);

console.log(total);

function checkOut(total , element){
    return total + element ;
}
