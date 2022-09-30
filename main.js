addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(suma(2,3));
    })
})
function suma(numero1,numero2){
    let suma = numero1+numero2;
    return suma;
}