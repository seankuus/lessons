/*Write a function that takes a number as an argument. If the argument is a 
positive number, return the negative of that number. If the argument is a negative 
number, return it as-is.*/

//E - negative(5);     // -5

//A ternary operator


//my solution
const negative = number => number < 0 ? number : -number;

//tests

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

//ls solution
function negativeNum(number) {
  return Math.abs(number) * -1;
}