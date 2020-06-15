const readline = require('readline-sync');

const M_TO_FT = 10.7639;

function prompt(message) {
  console.log(`--> ${message}`);
}
  
prompt('How long is the room in meters?');
let length = readline.question();
length = parseInt(length, 10);

prompt('How wide is the room in meters?');
let width = readline.question();
width = parseInt(width, 10);

let areaInMeters = (length * width).toFixed(2);

let areaInFeet = (areaInMeters * M_TO_FT).toFixed(2);

prompt(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`
);


