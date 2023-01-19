let username = window.prompt("What's your name");
console.log(username);


let myName;

document.getElementById('submitBtn').onclick = function(){
    myName = document.getElementById('nameInput').value;

    console.log(myName);

    document.getElementById("nameLabel").innerHTML = "Assalamu alaikum "+myName;
}