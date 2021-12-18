function f(g, h) {
  if (10 > 0) {
    g("P");
  }
  else {
    h("Q");
  }
}

//const minhaPromessa = new Promise(f);
//minhaPromessa.then(valor => console.log("RESULTADO = " + valor));

// Exemplo: vamos criar uma promise que avalia os dados de uma compra {preco, saldo}, podendo 
// ser resolvida com o preco da compra, ou rejeitada com o valor da diferenca que faltou no saldo

const minhaCompra = {
  preco: 300.0,
  saldo: 400.0,
};

function avaliarCompra(resolver, rejeitar) {

  setTimeout(function() {
    const compra = minhaCompra;

    if (compra.preco <= compra.saldo) {
      resolver(compra.preco);
    } else {
      const diferenca = compra.preco - compra.saldo;
      rejeitar(diferenca);
    }  
  }, 2000);
};

const minhaPromessa = new Promise(avaliarCompra);

console.log(minhaPromessa);

//minhaPromessa.catch(valor => console.log(`Faltou ${valor} para comprar`));

//minhaPromessa.then(valor => console.log(`Vou comprar por ${valor}`));

minhaPromessa
  .then((obj) => {
    console.log("Vou comprar por " + obj);
  })
  .catch((obj) => {
    console.log("Faltou " + obj + " para comprar");
  });

console.log("A");
console.log("B");

