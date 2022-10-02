addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.preventDefault();
        let saludar = function (nombre) {
            alert(`Hola ${nombre}`);
        }
        saludar("Juan");
    })
})


