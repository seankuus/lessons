/*Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.*/

//E - repeater('Hello');        // "HHeelllloo"

//D - string in and out, array for iterating

//A - new array of chars using split 
// let new string
//for loop to add repeated chars one at a time

//My solution
function repeater(word) {
  let newString = [];
  for (let i = 0; i < word.length; i++) {
    newString.push(word[i].repeat(2));
  }
  return newString.join('');
}


//tests
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater('Wu tang is for the children'))

//ls solution
function repeater(string) {
  return string.split("").map(char => char + char).join("");
}

/*Write a function that takes a string, doubles every consonant character in the 
string, and returns the result as a new string. The function should not double 
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.*/

//E - doubleConsonants('String');          // "SSttrrinngg"

//D - const the consonant as a var
//write the same loop, this time only repeating the consonants

function doubleConsonants(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
  
  let stringArray = [];
  
  for (let i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
    if (CONSONANTS.indexOf(string[i].toLowerCase()) >= 0) {
      stringArray.push(string[i]);
    }
  }

  return stringArray.join("");
}