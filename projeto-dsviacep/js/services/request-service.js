import RequestException from "./exceptions/request-exception.js";

export async function getJson(url) {
  try {
    console.log("Iniciando requisição");
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException("Erro ao realizar requisição");
  }
};
