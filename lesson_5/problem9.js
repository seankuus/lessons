/*Given the following data structure, return a new array with the same 
structure, but with the subarrays ordered -- (alphabetically or numerically as 
appropriate -- in ascending order.let arr = [['b', 'c', 'a'], [2, 1, 3], 
['blue', 'black', 'green']]; */

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];


/* initial solution
arr.forEach(subArr => {
  subArr.forEach(value => {
    if (typeof(value) === 'number') {
      arr.sort((a,b) => a -b);
    } else {
      arr.sort(a,b);
    }
  });
});
*/

//LS solution
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

//keyword in the question is "new array" --> that's how you know you need to map