/*Write a function that takes an array of integers as input, multiplies all of 
the integers together, divides the result by the number of entries in the array, 
and returns the result as a string with the value rounded to three decimal places.*/

//E -- multiplicativeAverage([3, 5]);                   // "7.500"
//multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

//D -- Array input, number manipulation operation, string output

//A -- 1.) Find proudct of all the elements using a for loop and counter
//2.) divide result by the number of elements in the array (length);
//3.) round to .toFixed(3) and then return as a String()

const multiplicativeAverage = array => {
  let product = array[0];
  for (let i = 1; i < array.length; i++) {
    product = product * array[i];
  }
  
  return String((product / array.length).toFixed(3));
};

//tests 
console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));