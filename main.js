addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const lista = ["Juan","Pablo","Mantilla","Arias"];
        let resul = document.querySelector("#resultado");
        const filter = lista.filter(palabra => palabra.length <6);
        resul.insertAdjacentHTML("beforebegin", "<br><br/>" + filter);
    })
})