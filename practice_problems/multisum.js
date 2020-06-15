function multisum(num) {
  let number = parseInt(num, 10);
  let total = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}