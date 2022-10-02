addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        function saludar (nombre) {
            alert(`Hola ${nombre}`);
        }
        saludar("Juan");
    })
})


