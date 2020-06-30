/*P - Create a function that takes two integers as arguments. The first argument
is a count, and the second is the starting number of a sequence that your function
will create. The function should return an array containing the same number of
elements as the count argument. The value of each element should be a multiple 
of the starting number.

E - sequence(4, -7);         // [-7, -14, -21, -28]

D - numbers in, array out

A - function with two parameters, count and number 
0 returns an empty array
can be any integer (negative included)
declare new array
take the count, make a for loop, declare i = number, loop count times
each loop, add the number to the array
*/

function sequence(count, number) {
  let result = [];
  for (let i = 1; i <= count; i++) {
    result.push(i * number)
  }
  return result;
}

//tests

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

