/*Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair of 
numbers from the arguments that have the same index. You may assume that the 
arguments contain the same number of elements.*/

//E - multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// D - Input: 2 arrays of numbers, Output: new array 

//A - declare function two arguments;
// - declare a new array 
// - for loop interate through arrays 
// - push the product of array positions [i] to new array
// - return array


function multiplyList(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i] * array2[i]);
  }
  
  return newArray;
}

//tests

console.log([3, 5, 7], [9, 10, 11]);