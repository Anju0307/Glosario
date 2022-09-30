# Ciclos

Repetir un proceso una cantidad de n veces mientras se cumpla la condición solicitada.

```js
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
```



# Iteradores

Es un proceso del cual no podemos detener hasta que finalice la condición dada.

```js
addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lista = [1, 2, 3];
    let resul = document.querySelector("#resultado");
   lista.forEach(e => resul.insertAdjacentHTML("beforebegin","<br><br/>"+e));
  })
})
```

# Map

Realiza una iteración a la cual a cada elemento se le realiza una formula matemática

```js
addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lista = [1, 2, 3];
    let resul = document.querySelector("#resultado");
    const map = lista.map(x => x*2);
    resul.insertAdjacentHTML("beforebegin", "<br><br/>" + map);
  })
})
```

