# Iteradores

Es un proceso del cual no podemos detener hasta que finalice la condición dada.

```js
addEventListener("DOMContentLoaded", (e) => {

  let form = document.querySelector("#form");

  form.addEventListener("submit", (e) => {

​    e.preventDefault();

​    const lista = [1, 2, 3];

​    let resul = document.querySelector("#resultado");

​    lista.forEach(e => resul.insertAdjacentHTML("beforebegin","<br><br/>"+e));

  })

})
```

