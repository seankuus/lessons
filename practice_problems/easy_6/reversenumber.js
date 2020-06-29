//Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.

//E - reverseNumber(12345);    // 54321

//D - integer in, integer out, use a string to reverse

//A 
//map a new array
// reverse
//join 

function reverseNumber(number) {
  let numberString = String(number);
  return Number(numberString.split('').reverse().join(''));
}

//tests
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1