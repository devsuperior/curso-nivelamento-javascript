# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## JavaScript - Fetch API

https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch

https://www.w3schools.com/js/js_api_fetch.asp

```javascript
const cep = "01001000";

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
  .then((response) => {
    console.log("SUCESSO NO FETCH", response);
    const json = response.json();
    json
      .then((response) => {
        console.log("SUCESSO NO JSON", response);
      })
      .catch((error) => {
        console.log("ERRO NO JSON", error);
      });
  })
  .catch((error) => {
    console.log("ERRO NO FECTH", error);
  });

console.log("A");
console.log("B");
```
