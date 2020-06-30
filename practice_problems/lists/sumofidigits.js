/*Write a function that takes one argument, a positive integer, and returns the 
sum of its digits. Do this using list processing techniques.

E - sum(23);           // 5

D/A - turn into a string, split and use a reduce function to find the total
*/

function sum(number) {
  return String(number).split('').reduce((accum, digits) => accum += Number(digits), 0);
}

//tests
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45