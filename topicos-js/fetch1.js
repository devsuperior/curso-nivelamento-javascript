// FETCH (1)

fetch("https://viacep.com.br/ws/01001000/json/")
.then(response => {
    console.log("SUCESSO", response);
})
.catch(error => {
    console.log("ERRO", error);
})
.finally(console.log("FIM"));

console.log("A");
console.log("B");
console.log("C");
console.log("D");
