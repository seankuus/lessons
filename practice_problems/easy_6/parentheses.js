/*Write a function that takes a string as argument, and returns true if all 
parentheses in the string are properly balanced, false otherwise. To be properly 
balanced, parentheses must occur in matching '(' and ')' pairs.

E- console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);

D -- string in, boolean out

A -- delcare function with one parameter
counter to store running total of parentheses
for loop to add and subtract parentheses
if the ) comes first return false
return true if the counter is 0 
*/

function isBalanced(string) {
  let counter = 0; 
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      counter += 1;
    } else if (string[i] === ')') {
      counter -= 1;
    }
  if (counter < 0) return false;
  }
  return counter === 0;
}

//tests
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);