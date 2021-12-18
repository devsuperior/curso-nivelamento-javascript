# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Curso Nivelamento JavaScript
>  Aprenda de forma rápida os principais fundamentos de JavaScript para se preparar para trabalhar com frameworks front end

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## JavaScript - desestruturação

```javascript
const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

const { id, date } = obj;

console.log(id);
console.log(date);

function subTotal( { price, quantity } ) {
    return price * quantity;
}

console.log(subTotal(obj.items[0]));
console.log(subTotal(obj.items[1]));

function total( {items} ) {
    let soma = 0;
    for (let i=0; i<items.length; i++) {
        soma = soma + subTotal(items[i]);
    }
    return soma;
}

console.log(total(obj));

const [item1, item2] = obj.items;

console.log(item1);
console.log(item2);
```
