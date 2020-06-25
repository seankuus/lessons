/*Write a function that combines two arrays passed as arguments, and returns a 
new array that contains all elements from both array arguments, with each element
taken in alternation.*/

// E - interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// D - Two arrays in, returns NEW array 

// A - declare a function with two arguements 
// declare an empty array
// set a counter equal to the length of the argument index (length - 1)
// write a for loop that pushes the element at each index to the new array

function interleave(array1, array2) {
  let newArray = [];
  let arrayIndexLength = array1.length - 1;
  for (let i = 0; i <= arrayIndexLength; i++) {
    newArray.push(array1[i]);
    newArray.push(array2[i]);
  }
return newArray;
}

//test
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));


//LS solution
function interleave(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  return newArray;
}