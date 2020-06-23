function ageGenerator() {
  let randomAge;
  do {
    randomAge = Math.floor(Math.random() * 122);
  } while (randomAge < 20 || randomAge > 120);
  console.log(`Teddy is ${randomAge} years old.`);
}

//tests
ageGenerator()
ageGenerator()
ageGenerator()
ageGenerator()