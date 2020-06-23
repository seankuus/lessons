const readline = require('readline-sync');

const prompt = message => console.log(`--> ${message}`);

prompt('What is the first number?');
let first = Number(readline.question());

prompt('What is the second number?');
let second = Number(readline.question());

prompt('What is the third number?');
let third = Number(readline.question());

prompt('What is the fourth number?');
let fourth = Number(readline.question());

prompt('What is the fifth number?');
let fifth = Number(readline.question());

prompt('What is the sixth number?');
let sixth = Number(readline.question());

if (sixth === fifth || sixth === fourth || sixth === third || sixth === second || sixth === first) {
  console.log(`The number ${sixth} appears in ${fifth},${fourth},${third},${second},${first}`);
} else {
  console.log(`The number ${sixth} does not appear in ${fifth},${fourth},${third},${second},${first}`)
}