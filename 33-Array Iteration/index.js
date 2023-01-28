let prices = [5, 10, 15, 20];

for(let i = 0; i < prices.length; i += 1){
    console.log(prices[i]);

}


prices = [5, 10, 15, 20, 25];

for(let i = prices.length - 1; i >= 0; i -= 1){
    console.log(prices[i]);

}


prices = [5, 10, 15, 20, 25, 30, 35, 40];


for(let i of prices){
    console.log(i);
}

prices = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for(let price of prices){
    console.log(price);
}