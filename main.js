addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let lista = [2,4,6];
        let resultado= document.querySelector("#resultado");
        lista.forEach(e => resultado.insertAdjacentHTML("beforebegin","<br></br>"+e*2));
    })
})