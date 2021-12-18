function dizerOla() {
  console.log("Ola!");
}

function dizerBomDia(nome) {
  console.log(`Bom dia ${nome}!`);
}

function dizerBoaTarde(nome) {
  console.log(`Boa tarde ${nome}!`);
}

function dizerBoaNoite(nome) {
  console.log(`Boa noite ${nome}!`);
}

//setTimeout(dizerOla, 2000);

setTimeout(() => {
  dizerBomDia("Maria");
  setTimeout(() => {
    dizerBoaTarde("Joao");
    setTimeout(() => {
      dizerBoaNoite("Ana");
    }, 1000);
  }, 1000);
}, 1000);

console.log("A");
console.log("B");
