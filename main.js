addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let text="Hola mundo soy el mejor";
        let posicion = text.search("s");
        let resultado= document.querySelector("#resultado");
        resultado.insertAdjacentHTML("beforebegin","<br><br/>"+posicion);
    })
})