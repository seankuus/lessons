/*Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character.*/

function crunch(string) {
  let value = '';
  let array = string.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      value += array[i]
    } else continue;
  }
  console.log(value);
}

//test
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
