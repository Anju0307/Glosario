addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(suma(1,2));
        alert(suma(3,2));
        alert(suma(7,2));
    })
})
function suma(numero1,numero2){
    let suma = numero1+numero2;
    return suma;
}