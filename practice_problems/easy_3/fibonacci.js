/*Write a function that calculates and returns the index of the first Fibonacci 
number that has the number of digits specified by the argument. */

function findFibonacci(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;
  
  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length)
  
  return index;
}

console.log(findFibonacci(2));
console.log(findFibonacci(10));
console.log(findFibonacci(16));