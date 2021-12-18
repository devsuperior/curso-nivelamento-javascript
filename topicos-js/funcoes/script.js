function soma1(num1, num2) {
    return num1 + num2;
}

const soma2 = function(num1, num2) {
    return num1 + num2; 
}

const soma3 = (num1, num2) => {
    return num1 + num2; 
}

const soma4 = (num1, num2) => num1 + num2; 

const dobro1 = function(num) {
    return num * 2;
}

const dobro2 = num => num * 2;

// Funcao que nao tem retorno definido, retorna undefined

function mostrarPreco(preco) {
    console.log(`PRECO = ${preco}`);
}

// Variaveis definidas dentro da funcao pertencem somente ao escopo da funcao

function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}
//console.log(pi);

// Function hoisting: declaracoes de funcoes sao "movidas" para cima pelo motor do JavaScript

teste(5);

function teste(x) {
    console.log("TESTE " + x);
}

// Funcoes podem ser passadas como argumento

function triplo(num) {
    return num * 3;
}

function aplicar(f, num) {
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(dobro1, 10);
aplicar(triplo, 10);
