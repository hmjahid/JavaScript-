let x;
let y;
let z;


document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6 + 1);
    document.getElementById("xlabel").innerHTML = x;

    y = Math.floor(Math.random() * 6 + 1);
    document.getElementById("ylabel").innerHTML = y;

    z = Math.floor(Math.random() * 6 + 1);
    document.getElementById("zlabel").innerHTML = z;

}