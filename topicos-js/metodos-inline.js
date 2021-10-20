// MÉTODOS INLINE NO OBJETO

const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1,
            subTotal: function() {
                return this.price * this.quantity;
            }
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2,
            subTotal: function() {
                return this.price * this.quantity;
            }
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    },
    total: function() {
        let soma = 0;
        for (let i = 0; i < this.items.length; i++) {
            soma = soma + this.items[i].subTotal();
        }
        return soma;
    }
};

console.log(obj.items[0].subTotal());
console.log(obj.items[1].subTotal());
console.log(obj.total());
