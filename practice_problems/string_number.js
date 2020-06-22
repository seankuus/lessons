/*Write a function that takes a String of digits, and returns the appropriate 
number as an integer. You may not use any of the methods Number or parseInt.*/


function stringToInteger(string) {
  const NUMBERS = {
  '0' : 0,
  '1' : 1,
  '2' : 2,
  '3' : 3,
  '4' : 4,
  '5' : 5,
  '6' : 6,
  '7' : 7,
  '8' : 8,
  '9' : 9
}
  
  
  let stringArr = string.split("").map(char => NUMBERS[char]);
  let output = 0;
  stringArr.forEach(digit => output = (10 * output) + digit);
  return output;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return stringToInteger(string.slice(1,string.length));
    case '+':
      return stringToInteger(string.slice(1,string.length));
    default: 
      return stringToInteger(string);
  }
}

function integertoString(integer) {
  const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let string = '';
  
  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);
    
    string = NUMBERS[remainder] + string;
  } while (integer > 0);
  
  return string;
}

function signedIntegerToString(integer) {
  switch (Math.sign(integer)) {
    case 1 : 
      return `+${integertoString(integer)}`;
    case -1 :
      return `-${integertoString(integer)}`;
    default:
      return integertoString(integer);
  }
}

