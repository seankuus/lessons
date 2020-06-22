/*Write a function that takes a String of digits, and returns the appropriate 
number as an integer. You may not use any of the methods Number or parseInt.*/

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


function stringToInteger(string) {
  let stringArr = string.split("").map(char => NUMBERS[char]);
  let output = 0;
  stringArr.forEach(digit => value = (10 * value) + digit));
  return output;
}