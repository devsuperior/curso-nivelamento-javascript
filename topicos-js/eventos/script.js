const inputName = document.forms.cadastro.name;

inputName.addEventListener("keyup", handleInputNameKeyup);

const inputEmail = document.forms.cadastro.email;

inputEmail.addEventListener("change", handleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener("click", handleBtnSubmitClick);

function handleInputNameKeyup(event) {
  console.log(event.target.value);
}

function handleInputEmailChange(event) {
  if (validateEmail(event.target.value)) {
    event.target.classList.remove("input-error");
  } else {
    event.target.classList.add("input-error");
  }
}

function handleBtnSubmitClick(event) {
  event.preventDefault();
  console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
