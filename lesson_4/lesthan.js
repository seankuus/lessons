function lessThan(upperLimit) {
  let lengths = [];

  for (let candidate = 1; candidate < upperLimit; candidate += 1) {
    lengths.push(candidate);
  }

  return lengths;
}

console.log(lessThan(5));
console.log(lessThan(1));