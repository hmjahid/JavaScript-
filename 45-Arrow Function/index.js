// Arrow Function (3)

let grades = [100, 70, 80,  60, 90, 50];

grades.sort((x, y) => y - x );

grades.forEach((element) => console.log(element));


// Arrow Function (2)

const percent = (x, y) => x / y * 100 ;

console.log(`${percent(25, 60)}%`);


// Arrow Function (1)

const myUserId = uid => console.log(`The user id is ${uid}`);

myUserId("mdjahidhasan");


// Function Expression

const greetings = function(userName){
    console.log(`Assalamu alaikum ${userName}`);
}

greetings("Md Jahid Hasan");


// Traditional Function

identification("Md Alamin");

function identification (friendsName){
    console.log(`Assalamu alaikum ${friendsName}`);
}


