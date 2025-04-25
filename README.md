# Documentación del checkpoint7

## 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

JavaScript (JS) tiene varias diferencias con otros tipos de lenguaje como por ejemplo Python o Java.

**1. Vinculción con el navegador web**

  JS tiene un vínculo ditecto con los navegadores web (Chrome, Firefox, etc.). Esto le permite ejecutarse directamente en el navegador sin tener que instalar nada extra. En cambio, en los demás lenguajes, se necesitan intérpretes y entornos de ejecución. Gracias a esta característica, JS es el lenguaje más usado para el desarrollo web del lado del cliente.

**2. Manejo asíncrono**

JS tiene un modelo de ejecución asíncrono basado en eventos. Es un forma de organizar cómo está gestionando y ejecutando las tareas, sobre todo las que más cuestan completarse. 

- **Asíncrono:** Que sea asíncrono significa que al ejecutarse el programa, si hay una tarea que está tardando mucho, en vez de quedarse esperando a que termine y bloquearse, el programa sigue ejecutando otras cosas mientras tanto y cuando finaliza la tarea lenta, se ejecuta una función llamada callback (llamada de vuelta) para manejar el resultado.
- **Basado en eventos:** Por otro lado, que sea basado en eventos significa que reacciona ante eventos o sucesos como por ejemplo clicks del usuario, respuestas de la red, etc.

Esta carácterística hace que JS sea un lenguaje que permite tener fluidez y buena capacidad de respuesta evitando bloquear todo el proceso mientras ocurren operaciones lentas.

**3.** 

## 2. ¿Cuáles son algunos tipos de datos JS?

Los tipos de datos más conocidos son Number, String, Boolean, Null y Symbol().


## 3.¿Cuáles son las tres funciones de String en JS?

Las tres funciones en String en JS son length(), slice() y charAt().

Además de estas funciones también hay otras como indexOf(), lastIndexOf(), toUppercase(), toLowercase(), includes(), startsWith(), endsWith(), replace(), repeat(), etc.

## 4.¿Qué es un condicional?

Un condicional es una estructura que te permite ejecutar un bloque de código dependiendo de si la condición dada es verdadera o falsa.
La estructura básica de un condicional es la palabra if. Por ejemplo, vamos a crear un bloque condicional que permita comer el menú infantil a menores de 8 años (incluidos).

```
let edad = 7

if (edad <= 8) {
  console.log("Puedes comer el menú infantil");
}
```
Este bloque imprimiría "Puedes comer el menú infantil porque la edad es menor de 8. En los casos donde la edad es mayor de 8, el bloque no imprimiría nada. Si por ejemplo queremos que este mismo bloque imprima algo en los demás casos, se usaría el término else. Esto significa que cuando el bloque de if sea false, pasaría directamente al bloque else:

```
let edadDos = 25

if (edadDos <= 8) {
  console.log("Puedes comer el menú infantil");
} else {
  console.log("Puedes comer el menú adulto");
}
```

En este caso, la variable de edadDos es mayor de 8, por lo que salta el bloque de if y va directamente al bloque else, es decir, imprime "Puedes comer el menú adulto".

Además, si hay varias condiciones, se usa el término de else if para añadir entre el if y el else final las demás condiciones. Vamos a imaginar que hay un menú intermedio para los jóvenes de entre 9 y 17 años. Esta nueva condición se añade de la siguiente manera:

```
var edadTres = 15

if (edadTres <= 8) {
  console.log("Puedes comer el menú infantil");
} else if (edadTres > 8 && edadTres <= 17)  {
  console.log("Puedes comer el menú juvenil");
} else {
  console.log("Puedes comer el menú adulto");
}
```

En este caso, los niños de menor o igual edad a 8 comen el menú infantil, los de entre 8 y 17 (incluido) comen el menú juvenil y los mayores de 18 el manú adulto. Otra forma de escribir el condicional anterior sin hacer uso de && sería:

```
if (edad >= 18) {
 console.log("Puedes comer el menú adulto");
} else if (edad >= 7) {
  console.log("Puedes comer el menú juvenil");
} else {
  console.log("Puedes comer el menú infantil");
}
```
Esto es debido a que se va cargando en orden. Por lo tanto, si por ejemplo la variable edad es 5, comenzando desde el inicio, es mayor o igual a 18? no, entonces pasa al siguiente bloque de else if. En este bloque mira si la edad es mayor o igual a 7, como no es, pasa al bloque else, por lo que en este caso se imprime "Puedes comer el menú infantil".

## 5.¿Qué es un operador ternario?

## 6.¿Cuál es la diferencia entre una declaración de función y una expresión de función?

## 7.¿Qué es la palabra clave "this" en JS?
