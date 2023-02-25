
const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");

myButton.addEventListener("click", () =>{
    if(myImage.style.display == "none"){
        myImage.style.display = "block";
    }
    else{
        myImage.style.display = "none";
    }
})


const myButton2 = document.querySelector("#myButton2");
const myImage2 = document.querySelector("#myImage2");

myButton2.addEventListener("click", () =>{
    if(myImage2.style.visibility == "hidden"){
        myImage2.style.visibility = "visible";
    }
    else{
        myImage2.style.visibility = "hidden";
    }
})