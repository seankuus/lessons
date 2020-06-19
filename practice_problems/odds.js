function oddities(array) {
  let oddElements = [];
  for (let i = 1; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
}

