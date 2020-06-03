/*Given the following data structure write some code to return an array 
containing the colors of the fruits and the sizes of the vegetables. 
The sizes should be uppercase, and the colors should be capitalized.*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

/* P - Pull out colors and sizes. Sizes in UpperCase and COLORS in CAPS

E - see above

D - input: object, output: array

A - 
Use the key-value pairing to find fruits, then pull out the value for colors and sizes
Use map to ouput a new array
For sizes push  word.upperCase[0] + word.slice(1)
For coloers push word.upperCase
*/

let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
})

//IMPORTANT: remember the capitalize function + nested array iteration (two map calls)