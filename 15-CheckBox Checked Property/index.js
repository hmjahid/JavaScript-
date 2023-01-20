/*
document.getElementById("myButton").onclick = function(){

if(document.getElementById("myCheckBox").checked){
    console.log("You are subscribed!");

}
else{
    console.log("You are NOT subscribed!");

}

}
*/

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const americanExpressCardBtn = document.getElementById("americanExpressCardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    
    if(myCheckBox.checked){
        console.log("You are subscribed!");
    
    }
    else{
        console.log("You are NOT subscribed!");
    
    }
    
    if(visaBtn.checked){
        console.log("You are paying with VisaCard!");
    }
    else if(masterCardBtn.checked){
        console.log("You are paying with MasterCard!");
    }
    else if(americanExpressCardBtn.checked){
        console.log("You are paying with AmericanExpressCard!");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with PayPal!");
    }
    else{
        console.log("You must select a payment method!");
    }

    }