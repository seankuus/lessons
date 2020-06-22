function logInBox(text) {
  let horizontalLines = `+${'-'.repeat(text.length + 2)}+`;
  let emptyLines = `|${' '.repeat(text.length + 2)}|`;
  
  console.log(horizontalLines);
  console.log(emptyLines);
  console.log(`| ${text} |`);
  console.log(emptyLines);
  console.log(horizontalLines);
}

logInBox('Wu tang is for the children')
logInBox('Enter the 36 Chambers of Shaolin')