let item = "book";
let basePrice = 100.00;
let discountPrice = 90.00;

let timer1 = setTimeout(firstMessage, 3000, item, basePrice);
let timer2 = setTimeout(secondMessage, 6000, item, discountPrice);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, basePrice){
    alert(`Biggest Discount Ever on this $${basePrice} ${item}!!!`);
}
function secondMessage(item, discountPrice){
    alert(`Buy this ${item} and get at $${discountPrice}!!!`);
}
function thirdMessage(){
    alert("For Limited Times Only!!!");
}

document.getElementById("buyButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("*Thanks for Buying*");
}