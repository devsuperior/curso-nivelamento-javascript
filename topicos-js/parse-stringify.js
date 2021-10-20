// OBJETOS JSON, JSON.parse, JSON.stringify

const input = require('fs').readFileSync('/temp/aula-js/input.json', 'utf8');

console.log(input);

console.log("ID: ", input.id);

const obj = JSON.parse(input);

console.log("ID: ", obj.id);

console.log(obj.items[0]);

console.log(obj.items[1].price);

const text = JSON.stringify(obj);

console.log(text);
