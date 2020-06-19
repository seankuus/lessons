const readline = require('readline-sync');

function prompt(message) {
  console.log(`--> ${message}`);
}

prompt('Hello, What is your name')
let answer = readline.question();

if (answer.includes('!')) {
  prompt(`HELLO ${answer.toUpperCase().replace('!','.')} WHY ARE WE YELLING?`);
} else {
  prompt(`Hello ${answer}.`)
}