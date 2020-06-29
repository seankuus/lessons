//Write a function that takes a string argument consisting of a first name, 
//a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

//E swapName('Joe Roberts');    // "Roberts, Joe"

//D - string, array to maniputlate, string out

//A split using space, join using ', '

function swapName(name) {
  console.log(name.split(' ').reverse().join(', '));
}

//tests
swapName('Joe Roberts');
swapName('Sean Kuusinen');