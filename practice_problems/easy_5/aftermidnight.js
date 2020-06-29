/*Write a function that takes a time using this minute-based format and returns 
the time of day in 24 hour format (hh:mm). Your method should work with any 
integer input.*/

//E - console.log(timeOfDay(0) === "00:00");

//D - integer in, string out

//A - 1440 minutes in a day, 00:00 is midnight 
//delcare a function with one parameter
//split, if first char is - then subtract, if positive, add
//report the time as '00:00' format

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

/*Write two functions that each take a time of day in 24 hour format, and return
the number of minutes before and after midnight, respectively. Both functions 
should return a value in the range 0..1439.*/

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}