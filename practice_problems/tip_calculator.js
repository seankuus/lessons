/*Create a simple tip calculator. The program should prompt for a bill amount 
and a tip rate. The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input validation and 
assume that the user will enter numbers.*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`--> ${message}`);
}

prompt('Welcome to the tip calculator');

prompt('What is the amount of the bill?');
let bill = readline.question();

prompt('What percent would you like to tip?');
let percent = readline.question();
let decimalPercent = Number(percent) / 100;

let tipAmount = (decimalPercent * bill).toFixed(2);

let totalAmount = (Number(tipAmount) + Number(bill)).toFixed(2);

prompt(`The tip is $${tipAmount} and the total including tip is $${totalAmount}.`);

