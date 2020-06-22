/*Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the non-alphabetic 
characters replaced by spaces. If one or more non-alphabetic characters occur in a row, 
you should only have one space in the result (i.e., the result string should never 
have consecutive spaces).*/


//LS Regex Solution
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

/*Explanation:
the expression /[^a-z]/gi is a regular expression that matches any character 
that is not an uppercase or lowercase letter. The /i part of this expression is
what makes this expression case insensitive and /g part changes all the characters 
not just first one. replace() replaces all characters in text that match the regular
expression in the 1st argument with the value in the 2nd argument.*/