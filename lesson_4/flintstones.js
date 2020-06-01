let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};

flintstones.forEach((name, idx) => {
 obj[name] = idx;
});

console.log(obj);