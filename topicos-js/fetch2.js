// FETCH (2)

fetch("https://viacep.com.br/ws/01001000/json/")
.then(response => {
    response.json()
    .then(jsonBody => {
        console.log("SUCESSO", jsonBody);
    });    
})
.catch(error => {
    console.log("ERRO", error);
})
.finally(console.log("FIM"));

console.log("A");
console.log("B");
console.log("C");
console.log("D");
