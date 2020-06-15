function longShort(string1, string2) {
  if (string1.length < string2.length) {
    console.log(string1 + string2 + string1)
  } else {
    console.log(string2 + string1 + string2)
  }
}