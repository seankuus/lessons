/*Given an unordered array and the information that exactly one value in the 
array occurs twice (every other value occurs exactly once), determine which value 
occurs twice. Write a function that will find and return the duplicate value that 
is in the array*/

//E - findDup([1, 5, 3, 1]); //1

//D - array input, object to store data, string or number output

//A - declare a function with one argument (array)
//iterate through array, if the item exists in the array then return it 
//if the item doesn't exsit, add it to the object

function findDups(array) {
  let seen = {};
  
  for (let i = 0; i < array.length; i++) {
    if (seen[array[i]]) {
      return array[i];
    } else { 
      seen[array[i]] = true;
    }
  }
  return undefined;
}