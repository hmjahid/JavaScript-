const myButton = document.querySelector("#myButton");

//console.dir(window);
//console.log(window.innerHeight);
//console.log(window.innerWidth);
//console.log(window.outerHeight);
//console.log(window.outerWidth);
//console.log(window.scrollX);
//console.log(window.scrollY);

//console.log(window.location.href);
//window.location.href = "https://fb.com";
//console.log(window.location.hostname);
//console.log(window.location.pathname);

//myButton.addEventListener("click", () => window.open("https://www.google.com.bd"));
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());

//window.alert("Assalamu alaikum");
//window.confirm("Press OK to continue...");

let age = window.prompt("Enter your age!");
if(age < 18){
    window.alert("You must be 18+ to visit this site!");
    window.close();
}