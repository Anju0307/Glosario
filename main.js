addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let resultado = document.querySelector("#resultado");
        for (let i=1; i<=6;i++){
            resultado.insertAdjacentHTML("beforebegin","<br><br/>"+i);
        }
    })
})