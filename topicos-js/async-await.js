const fetchCep = async (url) => {    
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

fetchCep("https://viacep.com.br/ws/01001000/json/").then(response => {
    console.log(response);
});

