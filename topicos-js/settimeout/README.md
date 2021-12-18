# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## JavaScript - setTimeout

É uma função que executa uma função após um dado tempo em milissegundos.

```javascript
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
```
