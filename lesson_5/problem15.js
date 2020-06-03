/*Given the following data structure, write some code to return an array which 
contains only the objects where all the numbers are even.*/

/* 
P -- given an array of nested objects, return only object whose numbers are ALL even

E -- Input: let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

output: { e: [8], f: [6, 10] }

D -- arrays

A -- 
Perform a filter the array
Return Object.values(obj)
Use every to return the values that are even using num % 2 === 0 logic
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter(obj => {
  Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

