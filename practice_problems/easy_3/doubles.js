/*Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; return double numbers as-is.*/

function double(number) {
  if (isDouble(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDouble(number){
  let stringNumber = String(number);
  let center = Math.floor(number / 2);
  let leftNumber = stringNumber.substr(0, center);
  let rightNumber = stringNumber.substr(center);
  
  return rightNumber === leftNumber;
}



  
}