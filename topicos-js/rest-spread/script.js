// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(2, 3, 10, 5);

console.log(result1);

const result2 = Math.max(2, 3, 10, 5);

console.log(result2);

// SPREAD: array => valores separados por virgula

const myNumbers = [2, 3, 10, 5];

//const result3 = Math.max(myNumbers); // Nao funciona

const result3 = Math.max(...myNumbers);

console.log(result3);

// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

const cloneItemPlus = { ...item, weigth: 10 };
