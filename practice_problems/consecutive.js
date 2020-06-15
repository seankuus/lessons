const readline = require('readline-sync');
const VALID_INPUTS = ['p', 's'];


function prompt(message) {
  console.log(`--> ${message}`);
}

prompt('Welcome to the integer machine.');

prompt('Please enter an integer greater than 0.');
let integer = parseInt(readline.question(), 10);

prompt('Would you like to find the sum or the product? \n (Enter s or p)');
let answer = readline.question();

while (!VALID_INPUTS.includes(answer.toLowerCase())) {
  prompt('That\'s not a valid input.');
  answer = readline.question();
}

function findSum(targetNum) {
  let counter = 0;
  
  for (let i = 1; i <= targetNum; i++) {
    counter += i;
  }
return counter;
}

function findProduct(targetNum) {
  let counter = 1;
  
  for (let i = 1; i <= targetNum; i++) {
    counter *= i;
  }
return counter; 
}

if (answer === 's') {
  let sum = findSum(integer);
  prompt(`The sum of integers between 1 and ${integer} is ${sum}.`);
  } else if (answer === 'p') {
  let product = findProduct(integer);
  prompt(`The product of integers between 1 and ${integer} is ${product}.`);
  } else {
    prompt('error');
  }