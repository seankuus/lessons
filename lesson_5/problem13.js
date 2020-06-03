/* Given the following data structure, sort the array so that the sub-arrays are
ordered based on the sum of the odd numbers that they contain.*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

//Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

//[ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

/*Problem
Given an array of sub-arrays, order the sub-arrays [[1],[2],[3]] based on the 
sum of the odd numbers within the sub-arrays

Example
[[1, 6, 7], [1, 5, 3], [1, 8, 3]];
[[ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ]]


Data struture / algorithm
Arrays
Sort function (a,b)
Assign new variables to hold the sum of numbers
Use filter  for finding odd numbers within sub-arrays
Use reduce to sum the filtered numbers
Sort the sub-array sums using a - b
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

/* my solution
arr.map(subArr => {
  let sum = 0
  if (subArr[0] % 2 !== 0) {
    sum += subArr[0] += 1
  }
  return subArr.sort((a, b) => {
    Number(a) - Number(b);
  })
})
*/

//LS solution
arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});