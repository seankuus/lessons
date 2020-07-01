/*Write a function that takes a string argument, and returns a list of all 
substrings that start from the beginning of the string, ordered from shortest to longest.

E - substringsAtStart('abc');      // ["a", "ab", "abc"]

D - String, array

A - substr method within a for loop that adds 1 to the index each iteration
*/ 

function substringsAtStart(string) {
  let result = [];
  for (let i = 1; i <= string.length; i++) {
    result.push(string.substr(0, i));
  }
  return result; 
}

//tests
console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//ls solution
function substringsAtStart2(string) {
  return string
    .split("")
    .map((_, idx, stringArray) => stringArray.slice(0, idx + 1).join(""));
}

