addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let animales= ["loro","perro","aguila","murcielago"];
        let resultado = document.querySelector("#resultado");
        resultado.insertAdjacentHTML("beforebegin","<br><br/>"+animales.map(e=> e.length));
    })
})
