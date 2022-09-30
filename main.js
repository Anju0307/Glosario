addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let resultado;
        resultado=1+2;
        alert(resultado);
        
    })
})
function suma(numero1,numero2){
    let suma = numero1+numero2;
    return suma;
}