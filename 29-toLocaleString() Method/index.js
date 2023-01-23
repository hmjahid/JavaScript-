let myNum = 123456.789;

//myNum = myNum.toLocaleString("en-US");  //US English

//console.log(myNum);


//myNum = myNum.toLocaleString("hi-IN");  //India Hindi

//console.log(myNum);


//myNum = myNum.toLocaleString("de-DE");  //Standard German

//console.log(myNum);



//myNum = myNum.toLocaleString("es-ES");  //Spanish Spanish

//console.log(myNum);


//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});  //US Currency

//console.log(myNum);


//myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});  //IN Currency

//console.log(myNum);



//myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});  //German Currency

//console.log(myNum);



//myNum = myNum.toLocaleString("bn-BD", {style: "currency", currency: "BDT"});  //BD Currency

//console.log(myNum);


//myNum = 0.05;

//myNum = myNum.toLocaleString(undefined, {style: "percent"});

//console.log(myNum);


myNum = 72;

myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

console.log(myNum);