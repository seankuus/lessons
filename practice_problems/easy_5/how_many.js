/*Write a function that counts the number of occurrences of each element in a 
given array. Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").*/

//E -let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
          //      'motorcycle', 'motorcycle', 'car', 'truck'];
          // car => 4 truck => 3 SUV => 1 motorcycle => 2
          
//D - input: array: output: string & number stored as vals in objects

//A - declare fxn with one pararmeter 
// declare obj. var
// for loop through array 
// in for loop have conditional that evaluates if current element is already 
//in object as a key or not, if yes, +1 to the value, if not, add it as a key
//log the key:value pairs to the console using a for loop (?)

function countOccurrences(list) {
  let count = {};
  
  for (let i = 0; i < list.length; i++) {
    count[list[i]] = count[list[i]] || 0;
    count[list[i]] += 1;
    }
  
  logOccurrences(count);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + ' => ' + String(occurrences[item]));
  }
}

//test
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);