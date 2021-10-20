// REST & SPREAD

const sum1 = (...numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const sum2 = (...numbers) => numbers.reduce((x, y) => x + y, 0);

const result1 = sum1(2, 3, 10, 5);

console.log(result1);

const result2 = Math.max(2, 3, 10, 5);

console.log(result2);

const myNumbers = [2, 3, 10, 5];

//const result3 = Math.max(myNumbers); // Nao funciona

const result3 = Math.max(...myNumbers);

console.log(result3);

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

const cloneItemPlus = { ...item, weigth: 10 };
