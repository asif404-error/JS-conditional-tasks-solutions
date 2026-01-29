/*
you have two numbers in two variables, called: num1, num2
now declare a variable called result.

if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. also, write it using ternary operator.
*/

let num1 = 50;
let num2 = 100;
let result = num1>num2 ? num1*2 : num1+num2;
console.log(result); //change the number of num1 and num2 and see the result.

//syntax: variable = (comparison) ? (what to do if true) : (what to do if false);


/*
//methode-02

let num1 = 80;
let num2 = 100;
let result = num1*2;
let sum = num1 + num2;

if(num1>num2){
    console.log(result);
}
else{
    console.log(sum);
}
*/

/*
//method-03
const promptSync = require('prompt-sync');
const prompt = promptSync();
let num1 = parseInt(prompt('num1:'));
let num2 = parseInt(prompt('num2:'));
let result = num1*2;
let sum = num1 + num2;
if(num1>num2){
    console.log(result);
}
else{
    console.log(sum);
}
*/