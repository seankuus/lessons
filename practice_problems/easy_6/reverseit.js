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

/* Pt 2
P - Write a function that takes a string argument containing one or more words, 
and returns a new string containing the words from the string argument. All 
five-or-more letter words should have their letters in reverse order. The string
argument will consist of only letters and spaces. Words will be separated by a 
single space.

E - reverseWords('Professional');             // "lanoisseforP"

D - string to array to string

A - declare a function with one parameter 'string'
declare new array of words from string using split
for loop the array and if the word is longer than 5 using length, use reverse.join
return new string with join.
*/

function reverseWords(string){
  let arrayOfWords = string.split(' ');
  let result = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length >= 5) {
      result.push(arrayOfWords[i].split('').reverse().join(''));
    } else {
      result.push(arrayOfWords[i]);
    }
  }
return result.join(' ');
}

//tests
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"