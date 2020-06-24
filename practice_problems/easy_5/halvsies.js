/* Problem: Write a function that takes an array as an argument, and returns 
an array that contains two elements, each of which is an array. Put the first 
half of the original array elements in the first element of the return value, 
and put the second half in the second element. If the original array contains 
an odd number of elements, place the middle element in the first half array.*/

//Example: halvsies([1, 2, 3, 4]);   -->> [[1, 2], [3, 4]]

//Data: input is one array, output is two arrays

//Algo: 
  //find the halfway point in the arry
  //store the elements up to that point (inclusive) in one array using slice
  //put the remaining elements in a second array using slice
  //return two arrays
         
function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slcie(half);
  return [firstHalf, secondHalf];
}