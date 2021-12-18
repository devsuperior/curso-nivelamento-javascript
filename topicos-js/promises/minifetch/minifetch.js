function avaliarCompra(compra, aprovar, rejeitar) {
  setTimeout(function () {
    if (compra.preco <= compra.saldo) {
      aprovar(compra.preco);
    } else {
      const diferenca = compra.preco - compra.saldo;
      rejeitar(diferenca);
    }
  }, 2000);
}

function requisicao(compra) {

    return new Promise((resolve, reject) => {
        avaliarCompra(compra, resolve, reject);
    });
}

export default requisicao;
