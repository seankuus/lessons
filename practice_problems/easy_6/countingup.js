/*Write a function that takes an integer argument, and returns an array 
containing all integers between 1 and the argument (inclusive), in ascending order.*/

//E - sequence(5);    // [1, 2, 3, 4, 5]

//D - num in array out

//A - use the number to set the i in a for loop, then for each log the number until you reach the num

function sequence(number) {
  let newArr = [];
  for (let i = 1; i <= number; i++) {
    newArr.push(i);
  }
 return newArr;
}


//tests 

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]