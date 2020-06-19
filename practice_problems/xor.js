/*The || operator returns a truthy value if either or both of its operands are 
truthy, a falsey value if both operands are falsey. The && operator returns a 
truthy value if both of its operands are truthy, and a falsey value if either 
operand is falsey. This works great until you need only one of two conditions 
to be truthy, the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise.
*/

//My solution 

function xor(value1, value2) {
  if (value1 && value2) {
    return false;
  } else if (value1 === false && value2 === false) {
    return false;
  } else {
    return true;
  } 
}

//LS solution
function xor(value1, value2) {
  return (value1 && !value2) || (value2 && !value1);
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);