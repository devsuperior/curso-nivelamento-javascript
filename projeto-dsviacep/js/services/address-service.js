import * as requestService from "./request-service.js";
import Address from "../models/address.js";
import DomainException from "./exceptions/domain-exception.js";

export async function findByCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const result = await requestService.getJson(url);
  const address = new Address();
  copyViaCepToAddress(result, address);
  return address;
}

export function validate(address) {
    if (!address.cep || address.cep == "") {
        throw new DomainException("CEP do endereço não pode ser vazio");
    }
    if (!address.number || address.number == "") {
        throw new DomainException("Número do endereço não pode ser vazio");
    }
}

function copyViaCepToAddress(viacepObj, address) {
  address.street = viacepObj.logradouro;
  address.city = viacepObj.localidade;
  address.cep = viacepObj.cep.replace("-", "");
}
