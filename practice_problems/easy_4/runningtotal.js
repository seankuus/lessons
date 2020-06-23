/*Write a function that takes an array of numbers, and returns an array with the
same number of elements, with each element's value being the running total from
the original array.*/

//D: Array 

//A: input with an array, map new array with call back adding them together

function runningTotal(array) {
  let runningTotalArray = [];
  let totaler = 0;
  
  for (let i = 0; i < array.length; i++) {
    runningTotalArray.push((totaler += array[i]));
  }
  
  return runningTotalArray;
}

//tests from LS
console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));