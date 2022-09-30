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

# Filter

Realiza un filtro en una lista con sus elementos.

```js
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
```

# Search

Devuelve la posicion de un tipo String de acuerdo al parametro asignado en el iterador.

```
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
```

# For each

Realiza una iteración de la lista o de la matriz la cual se guarda en otra variable.

```js
addEventListener("DOMContentLoaded", (e) => {
  let form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let lista = [2,4,6];
    let resultado= document.querySelector("#resultado");
    lista.forEach(e => resultado.insertAdjacentHTML("beforebegin","<br></br>"+e*2));
  })
})
```

# Función limpia

Una función limpia es la cual se va a utilizar muchas veces.

```js
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
```

# Funciones sucias

Una función sucia es la cual no se va a utilizar muchas veces.

```js
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
```

# Parámetros

Un parámetro son los valores que se solicitan en una función.

```js
function suma(parametro){
	return parametro;
}
```

# Nivel de scope

Es el nivel de alcance que tiene una variable en el código.

```js
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
```

