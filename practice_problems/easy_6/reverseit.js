/* P - Write a function that takes a string argument, and returns a new string 
containing the words from the string argument in reverse order.

E - reverseSentence('Hello World');            // "World Hello"

D - String input, convert to array, join in new string

A - declare a function with one parameter 
split the string into an array of words using split(' ')
reverse the array using array.reverse
join the array using join(' ')
return a new string

*/

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

//tests
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"