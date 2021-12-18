import requisicao from "./minifetch.js";

requisicao({ preco: 300.0, saldo: 400.0 })
  .then((obj) => {
    console.log("Vou comprar por " + obj);
  })
  .catch((obj) => {
    console.log("Faltou " + obj + " para comprar");
  });

console.log("A");
console.log("B");
