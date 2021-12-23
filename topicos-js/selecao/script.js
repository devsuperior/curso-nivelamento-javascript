const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.outerHTML);
console.log(item1.innerHTML);

const items = document.querySelectorAll("li");

console.log(items);

const card1 = document.querySelector('[data-product-id="32"]')

console.log(card1);

const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição";
card1.appendChild(paragrafo);

card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");

console.log(cards);

Array.from(cards).map(item => {
  console.log(item.innerHTML);
});
