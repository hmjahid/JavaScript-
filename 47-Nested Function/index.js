let userName = "Md Jahid Hasan";
let userInbox = 0;

login();


function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Assalamu alaikum ${userName}`);
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}


