/*Write a function that takes one argument, a positive integer, and returns a 
list of the digits in the number.*/

//E digitList(12345);       // [1, 2, 3, 4, 5]
//digitList(7);           // [7]
//digitList(375290);      // [3, 7, 5, 2, 9, 0]
//digitList(444);         // [4, 4, 4]

//D - input: number (pos int. assumed); output: array

//A - declare function with one argument
// the argument is assumed to be a positive integer
// turn the number into a string
// create a new var assign split the string into its individual letters ('')

function digitList(number) {
  let stringArray = String(number).split('');
  let numberArray = [];
  
  for (let i = 0; i < stringArray.length; i++) {
    let digit = parseInt(stringArray[i], 10);
    numberArray.push(digit);
  }
  
  return numberArray;
}

//test
console.log(digitList(12345));
