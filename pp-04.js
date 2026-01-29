/*
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: use nested if-else-if-else
*/


const promptSync = require('prompt-sync');
const prompt = promptSync();
let myScore = parseInt(prompt('Tell Me Your Score:'));
let friendScore = parseInt(prompt('Tell Me Your Friend Score:'));


// let myScore=81; // you do not need to declare this two integers if you take input from user.
// let friendScore=39; //in case, you do not want to take input from user just undo the comment tag and wrap the upper 4 line code with comment tag. 

if(myScore>80){
    
    if(friendScore>80){
        console.log("Let's go for a lunch");
    }
    else if(friendScore<80 && friendScore>=60){
        console.log('Bro! Good Luck Next Time.');
    }
    else if(friendScore<60 && friendScore>=40){
        console.log("Keep Your Friend's Message Unseen");
    }
    else if(friendScore<40){
        console.log('Block Your Friend');
    }
}

else {
    console.log ('Go home, sleep and act sad');
}