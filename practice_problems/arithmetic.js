let readline = require('readline-sync');

let prompt = message => console.log(`--> ${message}`);

prompt('Enter the first number');
let num1 = parseInt(readline.question());


prompt('Enter the second number');
let num2 = parseInt(readline.question());

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let quot = num1 / num2;
let remain = num1 % num2;
let exop = num1 ** num2; 

prompt(`${num1} + ${num2} = ${sum}`)
prompt(`${num1} - ${num2} = ${diff}`)
prompt(`${num1} * ${num2} = ${prod}`)
prompt(`${num1} / ${num2} = ${quot}`)
prompt(`${num1} % ${num2} = ${remain}`)
prompt(`${num1} ** ${num2} = ${exop}`)
