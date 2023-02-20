const promise = new Promise(resolve => {
    setTimeout(resolve, 2000);
});

promise.then(() => console.log("Thanks for waiting!"));


const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for your patience!"));

/*
const promise = new Promise((resolve, reject) => {

    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File not loaded");
    }
});

promise.then(value => console.log(value))
       .catch(error => console.log(error));
  
*/       