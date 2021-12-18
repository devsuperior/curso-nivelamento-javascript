function dizerBomDia(nome) {
  console.log(`Bom dia ${nome}!`);
}

function dizerBoaTarde(nome) {
  console.log(`Boa tarde ${nome}!`);
}

function dizerBoaNoite(nome) {
  console.log(`Boa noite ${nome}!`);
}

function syncWait(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
    }
}

syncWait(1000);
dizerBomDia("Maria");
syncWait(1000);
dizerBoaTarde("Joao");
syncWait(1000);
dizerBoaNoite("Ana");

console.log("A");
console.log("B");
