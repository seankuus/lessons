/*Given the following data structure, use a combination of methods, including 
filter, to return a new array identical in structure to the original, but 
containing only the numbers that are multiples of 3.*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

/*Problem
input array
output new array (map)
filter the values that are divisble by 3 using % 
nested arrays --> 2 levels
*/

/* Examples
input arr
output [3], [9], [15, 18];
*/

/* Data / algorithm
Input and outupt are Arrays 
Map the array
Filter the multiples of 3 using a if statment and % 3 === 0
Return new array
*/


arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0) 
});

/*things to note: 1.) you can use simplified arrow syntax here because you're
for a single criteria 2.) you can take the return of the statement directly, 
rather than returning the variable num on a subsequent line */

