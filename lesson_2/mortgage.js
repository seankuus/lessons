const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

//confirm that numbers are valid and above .1 to insure proper formatting
function invalidNumber(number) {
  return number.trimStart() === '' || number < .1 || Number.isNaN(Number(number));
}


prompt('Welcome to the Mortgage Calculator!');

while (true) {
  
  //get the interest rate
  prompt("What's the annual interest rate?");
  prompt('Example: 5.2 for 5.2%')
  let apr = readline.question();
  while (invalidNumber(apr)) {
    prompt("Hmm... that doesn't look like a valid number.");
    apr = readline.question();
  }

  //get the loan term
  prompt("What's the loan duration in years");
  let years = readline.question();
  while (invalidNumber(years)) {
    prompt("Hmm... that doesn't look like a valid number.");
    years = readline.question();
  }

  //get the loan amount
  prompt('What is the total loan amount?');
  let amount = readline.question()
  while (invalidNumber(amount)) {
    prompt('Hmm...that doesn\'t look like a valid number.');
    amount = readline.question();
  }

  //convert annual interest rate to monthly interest rate 
  let annualInterest = Number(apr) / 100;
  let monthlyInterest = annualInterest / 12;

  //convert loan duration in years to months 
  let months = Number(years) * 12;


  //find the monthly payment 
  let monthlyPayment = Number(amount) * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-Number(months)))));

  prompt(`Your monthly payment is $${monthlyPayment.toFixed(2)}`)

  prompt("Another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  
  }
  
  if (answer[0] === 'n') break;

}