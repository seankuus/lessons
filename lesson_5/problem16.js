/* Given the following data structure, write some code that returns an object 
where the key is the first item in each subarray, and the value is the second.

P - Turn sub-array elements into key-value pairings. 

E - 

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

expected return value of function call
{ a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


D - input: array, output: object 

A -  set an object to be filled 
use a forEach to itertate through the array
each sub array will be assigned to a key:value using subarray[0]
*/

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});
