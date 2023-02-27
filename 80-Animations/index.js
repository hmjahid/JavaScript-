const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX <= 0.1 || scaleY <=0.1){
            clearInterval(timerId);
        }
        else{
            scaleX -= 0.01;
            scaleY -= 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }       
    }
} 
    /*
    function frame(){
        if(scaleX >= 2 || scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    */  

    /*
    function frame(){
        if(scaleX >= 2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
    function frame(){
        if(scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
    */

/*
function begin(){
    let timerId = null;
    let degrees = 0;
    let x = 0;
    let y = 0;


    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degrees += 5;
            x += 1;
            y += 1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px"
            myAnimation.style.transform = "rotatez("+degrees+"deg)";
        }
    }
}
*/    

/*
function begin(){
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
        }
        else{
            degrees += 1;
            myAnimation.style.transform = "rotateX("+degrees+"deg)";
        }
    }
}
*/

/*
function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x += 1;
            y += 1;
            myAnimation.style.left = x + "px";
            myAnimation.style.top = y + "px";
        }
    }

    function frame(){
        if(x >= 200){
            clearInterval(timerId);
        }
        else{
            x += 1;
            myAnimation.style.left = x + "px";
        }
    }
    function frame(){
        if(y >= 200){
            clearInterval(timerId);
        }
        else{
            y += 1;
            myAnimation.style.top = y + "px";
        }
    }  
}    
*/