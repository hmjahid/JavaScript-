console.log("START-1");
console.log("This is synchronous!");
console.log("END-1");


console.log("START-2");
setTimeout(() => console.log("This is asynchronous!"), 1000);
console.log("END-2");