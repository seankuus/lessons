const readline = require('readline-sync');

const prompt = message => console.log(`--> ${message}`);

prompt('Enter a verb');
let verb = readline.question();

prompt('Enter a noun');
let noun = readline.question();

prompt('Enter another verb');
let verb2 = readline.question();

prompt('Enter an adjective');
let adj = readline.question();

prompt('Enter an adverb');
let adverb = readline.question();

prompt('Enter a place');
let place = readline.question();

console.log('Have you heard of the Wu Tang Clan?');
console.log(`They are the best ${noun}s to ever come from ${place}. \n
  If you like ${adj} music then you should ${verb} to them. \n
  Sometimes they ${verb2} too ${adverb}, what do you thinK?`);