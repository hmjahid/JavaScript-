let customerName = "Jahid";
let totalItem = 3;
let totalPrice = 99;


console.log("Your name is : ", customerName);
console.log("Your total items : ", totalItem);
console.log("Your total price : ", totalPrice);



console.log(`Your name is : ${customerName}`);
console.log(`Your total item is : ${totalItem}`);
console.log(`Your total price is : ${totalPrice}`);


let customerInfo = 
`Your name is : ${customerName}<br>
Your total item is : ${totalItem}<br>
Your total price is : $${totalPrice}`

console.log(customerInfo);

document.getElementById("customerInformation").innerHTML = customerInfo;