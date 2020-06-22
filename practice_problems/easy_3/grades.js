/*Write a function that determines the mean (average) of the three scores passed 
to it, and returns the letter associated with that grade.*/

function getGrade(gradeOne, gradeTwo, gradeThree) {
  let averageGrade = ((gradeOne + gradeTwo + gradeThree) / 3);
  if (averageGrade < 60) {
    console.log('You failed, sucks to suck');
  } else if (averageGrade <70) {
    console.log('D -- not great Cotton');
  } else if (averageGrade < 80) {
    console.log('C\'s get degrees my guy');
  } else if (averageGrade < 90) {
    console.log('B baybee!');
  } else if (averageGrade < 100) {
    console.log('A -- you\'ve outdone yourself');
  } else {
    console.log('error');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"