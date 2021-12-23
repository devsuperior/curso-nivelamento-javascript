async function getJsonResponse(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

console.log(getJsonResponse("https://viacep.com.br/ws/01001000/json/"));

getJsonResponse("https://viacep.com.br/ws/01001000/json/").then((obj) => {
  console.log(obj);
});

async function showCepData(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const json = await getJsonResponse(url);
  console.log(json);
}

showCepData("01001000");
