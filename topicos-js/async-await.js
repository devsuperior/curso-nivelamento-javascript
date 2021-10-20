const fetchCep = async () => {    
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const jsonBody = await response.json();
    return jsonBody;
}

console.log(fetchCep());
