const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}

/*
innerDiv.addEventListener("mouseover", colorRed);
innerDiv.addEventListener("mouseout", colorGreen);

function colorRed(){
    innerDiv.style.backgroundColor = "red";
}
function colorGreen(){
    innerDiv.style.backgroundColor ="lightgreen";
}
*/