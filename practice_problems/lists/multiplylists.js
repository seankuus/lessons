/*Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array containing the products of all combinations of 
number pairs that exist between the two arrays. The returned array should be 
sorted in ascending numerical order.


*/

function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(item1 => {
    array2.forEach(item2 => {
      products.push(item1 * item2);
    });
  });
  return products.sort((item1, item2) => item1 - item2);
}

//test
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16])
