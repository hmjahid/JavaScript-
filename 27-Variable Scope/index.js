
// let limited in curly braces only

for(let i = 1; i <= 3; i += 1){
    
    console.log(i);
}


// var limited in function only

doSomething();

function doSomething(){
    for(let j = 1; j <= 3; j += 1){
        
        console.log(j);
}
}


// variable oustside curly braces or function is called global variable which can be used anywhere within same programme


let name = "Jahid"; // let will not change browser properties


var age = 28;  // var will change browser properties
