function greetings(name, status) {
  return (`Hello ${name.join(' ')}, Nice to have a ${status["title"]} ${status["occupation"]} around`);  
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
