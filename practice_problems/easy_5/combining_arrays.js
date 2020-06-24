/*Write a function that takes two arrays as arguments, and returns an array 
containing the union of the values from the two.*/

function unions(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1. length; i++) {
    if (newArr.includes(arr1[i])) {
      continue;
    } else {
      newArr.push(arr1[i])
    }
  }
  for (let j = 0; j < arr2. length; j++) {
    if (newArr.includes(arr2[j])) {
      continue;
    } else {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

//test
console.log(unions([1, 3, 5], [3, 6, 9]));

