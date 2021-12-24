function State() {
    this.container = null;
    this.btnClose = null;
} 

const state = new State();

export function init() {
    state.container = document.querySelector("#modal-contact-container");
    state.btnClose = document.querySelector("#modal-contact-close");
    
    state.container.addEventListener('click', handleContainerClick);
    state.btnClose.addEventListener('click', handleBtnCloseClick);
}

export function showModal() {
    state.container.classList.add("active");
}

export function closeModal() {
    state.container.classList.remove("active");
}

function handleBtnCloseClick(event) {
    event.preventDefault();
    closeModal();
}

function handleContainerClick(event) {
    //console.log(event.target, this);
    event.preventDefault();
    if (event.target === this) {
        closeModal();
    }
}
