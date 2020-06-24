/*Write a function that takes a floating point number representing an angle
between 0 and 360 degrees, and returns a string representing that angle in 
degrees, minutes, and seconds.*/

//data: number input, string output 

//algo: pass number as an argument,

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor((degreesFloat - degreesInt - 
  (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE);
  
  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" + 
  padZeroes(seconds) + '"';
  
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}
