addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let num=function(){
            alert("El numero es 4");
        }
        num();
    })
})
