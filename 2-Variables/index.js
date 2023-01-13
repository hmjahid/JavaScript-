let myName = "MD JAHID HASAN" //strings data type
let myAge = 26; //number data type
let workedInMalysia = "6 Years"; //string data type
let myCurrentEmploymentStatus = false; //bolean data type
let maritualStatus = true; //boolean data type

console.log(myName);
console.log(myAge);
console.log(workedInMalysia);
console.log(myCurrentEmploymentStatus);
console.log(maritualStatus);


console.log("Assalamu alaikum Brothers. I am ",myName);
console.log("I am ",myAge," Years of old.");
console.log("I worked in Malaysia for ",workedInMalysia);
console.log("I am currently employed :",myCurrentEmploymentStatus);
console.log("I am married : ",maritualStatus);

document.getElementById('p1').innerHTML = "Assalamu alaikum Brothers. I am "+myName+".";
document.getElementById('p2').innerHTML = "I am "+myAge+" Years of old.";
document.getElementById('p3').innerHTML = "I worked in Malaysia for "+workedInMalysia+".";
document.getElementById('p4').innerHTML = "I am currently employed : "+myCurrentEmploymentStatus;
document.getElementById('p5').innerHTML = "I am married : "+maritualStatus;