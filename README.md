# Documentación del checkpoint7

## 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

JavaScript (JS) tiene varias diferencias con otros tipos de lenguaje como por ejemplo Python o Java.

**1. Vinculación con el navegador web**

  JS tiene un vínculo ditecto con los navegadores web (Chrome, Firefox, etc.). Esto le permite ejecutarse directamente en el navegador sin tener que instalar nada extra. En cambio, en los demás lenguajes, se necesitan intérpretes y entornos de ejecución. Gracias a esta característica, JS es el lenguaje más usado para el desarrollo web del lado del cliente.

**2. Manejo asíncrono**

JS tiene un modelo de ejecución asíncrono basado en eventos. Es un forma de organizar cómo está gestionando y ejecutando las tareas, sobre todo las que más cuestan completarse. 

- **Asíncrono:** Que sea asíncrono significa que al ejecutarse el programa, si hay una tarea que está tardando mucho, en vez de quedarse esperando a que termine y bloquearse, el programa sigue ejecutando otras cosas mientras tanto y cuando finaliza la tarea lenta, se ejecuta una función llamada callback (llamada de vuelta) para manejar el resultado.
- **Basado en eventos:** Por otro lado, que sea basado en eventos significa que reacciona ante eventos o sucesos como por ejemplo clicks del usuario, respuestas de la red, etc.

Esta característica hace que JS sea un lenguaje que permite tener fluidez y buena capacidad de respuesta evitando bloquear todo el proceso mientras ocurren operaciones lentas.

**3. Lenguaje interpretado y dinámicamente tipado**

JS es un lenguaje interpretado, lo que signfica que el código se ejecuta directamente cada línea por el intérprete del navegador o con Node.js en el servidor, sin necesitar una compilación externa. Además, es dinámicamente tipado, por lo que no se necesita especificar el tipo de dato cuando se crea una variable y el tipo de dato puede cambiar durante el código.
```
let mensaje = "Hola mundo!"; // Primero es tipo string
console.log(typeof mensaje); // Si miramos el tipo, el output sería string

mensaje = 1234; // Aquí se cambia la variable y como ya no es una str, se cambia directamente a numero
console.log(typeof mensaje); // Por lo que si miramos el tipo de dato, sería number
```

Esta es por ejemplo la diferencia que tiene con Java o TypeScript ya que en estos dos casos cada variable tiene que tener especifcado el tipo de dato al crearla.

## 2. ¿Cuáles son algunos tipos de datos JS?

Los tipos de datos más conocidos son number, string, boolean, null, undefined, symbol(), object y array.

| Tipo        | Descripción                                     | Ejemplos                      |
|-------------|-------------------------------------------------|------------------------------|
| `Number`    | Valores numéricos (enteros, decimales, NaN) | `10`, `3.14`, `NaN`          |
| `String`    | Caracteres de texto              | `'foo'`, `'The quick brown fox jumps over the lazy dog'`          |
| `Boolean`   | Valores lógicos verdad o falso                                 | `true`, `false`              |
| `Null`      | Valor ausente intencionadamente                 | `null`                       |
| `Symbol()`  | Identificadores únicos e inmutables             | `Symbol('password')`      |
| `Undefined` | Variable sin un valor asignado                     | `let x; console.log(x);`     |
| `Object`    | Colección de propiedades (clave-valor)     | `{}`, `{ nombre: 'Pepito', edad: 26 }` |
| `Array`     | Colección ordenada de elementos (pueden ser de distinto tipo)                 | `[]`, `[1, 'uno', true]`       |

Los de tipo Number pueden ser `int` que serían enteros o `float` que serían los decimales , además del `NaN` (not a number) que indica que el valor no es un número y sería por ejemplo cuando hay operaciones que no son válidas como división de 0 entre 0 (0/0). Por otro lado, Symbol es un tipo especial que por ejemplo se puede usar para contraseñas, ya que por ejemplo al pasar a json los datos, los datos Symbol no se serializan en json (no aparecen). 

## 3.¿Cuáles son las tres funciones de String en JS?

Las tres funciones en String en JS son length, slice() y charAt().

Realmente length no es una función en sí, más bien una propiedad, pero es de los métodos más comunes en strings. Esta propiedad te dice la cantidad de carácteres de la cadena, pero no es una función con paréntesis, sino que se accede así:

```
let cadena = "Hola";
console.log(cadena.length);
```
Esto cuenta la cantidad de carácteres de hola e imprime 4.

En el caso de la funcion slice(), esta extrae la proporcion de la cadena especificada. Se especifica dentro del paréntesis el índice de inicio y el de fin (si no se incluye se extrae hasta el final, es opcional). En el caso de especificar un número negativo, significa desde atrás hacia delante de la cadena.

```
let texto = "Hoy hace un día soleado";
console.log(texto.slice(0,4)); // Imprime: Hoy
console.log(texto.slice(-7)); // Imprime: soleado
console.log(texto.slice(12)); // Imprime: día soleado
console.log(texto.slice(4,-8)); // Imprime: hace un día
```

Por último, charAt() muestra el caracter que está en el índice especificado dentro del paréntesis en la cadena.Por ejemplo:

```
let cadena = "Hola";
console.log(cadena.charAt(0)); // Esto imprime: H
console.log(cadena.charAt(3)); // Y esto imprime: a
```
Además de estas funciones, también existen otras que pueden ser muy útiles:

 - indexOf(): Sirve para saber en qué posición aparece por primera vez un texto dentro de otro. Si no lo encuentra, devuelve -1. Por ejemplo: "Hola mundo".indexOf("mundo") imprimiría 5

 - lastIndexOf(): Hace lo mismo que `indexOf`, pero empezando desde el final. Devuelve la última posición en la que aparece el texto. Por ejemplo: "Hola".lastIndexOf("a") imprimiría 3

 - toUpperCase(): Convierte todo el texto a mayúsculas. Por ejemplo: "hola".toUpperCase() imprimiría "HOLA"

 - toLowerCase(): Convierte todo el texto a minúsculas. Por ejemplo: "HOLA".toLowerCase() imprimiría "hola"

 - includes(): Revisa si un texto está contenido dentro de otro. Devuelve `true` si lo encuentra, y `false` si no. Por ejemplo: "JavaScript".includes("Script") imprimiría true y "JavaScript".includes("Hola") sería false

 - startsWith(): Comprueba si el texto empieza con una palabra o letra especificada. Por ejemplo: "JavaScript".startsWith("Java") imprimiría true

 - endsWith(): Como la anterior, pero verifica si el texto termina con la palabra especificada. Por ejemplo: "JavaScript".endsWith("Script") imprimiría true

 - replace(): Permite cambiar una parte del texto por otra especificada. Por ejemplo: "Hola mundo".replace("mundo", "a todos") imprimiría "Hola a todos"

 - repeat(): Repite el mismo texto las veces que le pongas. Por ejemplo: "Hola".repeat(3) imprimiría "HolaHolaHola"



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

En este caso, los niños de menor o igual edad a 8 comen el menú infantil, los de entre 8 y 17 (incluido) comen el menú juvenil y los mayores de 18 el menú adulto. Otra forma de escribir el condicional anterior sin hacer uso de && sería:

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

Un operador ternario es una forma concisa de escribir una sentencia condicional if-else en una sola línea. Se denomina ternario por los tres operandos que utiliza:

1. Primero, se evalúa la condición.
2. Si la condición es true, se ejecuta la expresiónSiVerdadera y su resultado es devuelto.
3. Si la condición es false, se ejecuta la expresiónSiFalsa y su resultado es devuelto.

El operador ternario se escribe de la siguiente forma: 

```
condición ? expresiónSiVerdadera : expresiónSiFalsa;
```

Por ejemplo para saber si alguien es mayor o menor de edad:

```
let edad = 20;
let mensaje = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
console.log(mensaje); // Esto imprime: "Mayor de edad"
```

Aquí la condición es si la edad es mayor o igual a 18 (edad >= 18). ExpresionSiVerdadera es "Mayor de edad" y se imprime cuando la edad cumple con la condición. expresiónSiFalsa es "Menor de edad" y se imprime si la edad es 17 o menor. Se ha creado una variable llamada mensaje para imprimir la condición.

## 6.¿Cuál es la diferencia entre una declaración de función y una expresión de función?

Las principales diferencias son su definición y la forma en la que se usa cada una.

**1. Declaración de función**

  - Una declaración se define con la palabra 'function' y después el nombre que se le quiere dar a la función junto al parámetro que va en la función que está dentro del paréntesis (si es que se le pasa un parámetro) y seguido del cuerpo de la función. Por ejemplo, esta sería una función que te da la hora:

```
function reloj(hora) {
  return "Son las" + hora;
}
```

  - Otra característica importante en la declaración es el hoisting. Esto significa que puedes llamar a la función antes de que aparezca en el código y no va a dar un error al hacerlo. Por ejemplo puedo llamar a una funcion de saludo y después definirla:

```
console.log(saludo("Pepito")); //La llamo sin estar definida todavía

function saludo(nombre) {
  return "¡Hola " + nombre +"!";
}
```
A pesar de haber definido la función después de haberla llamado, debido al hoisting funciona perfectamente, es decir, se imprimiría: ¡Hola Pepito!

**2. Expresión de función**

  - Una expresión de función es crear o de forma anónima o dentro de una variable la función. Por ejemplo, vamos a crear dos expresiones de función que sean para sumar, una de forma anónima y la otra nombrada:
```
const sumaAnonima = function(a,b) {
  return a + b;
};
console.log(sumaAnonima(1,2)); // Esto imprime 3

const sumaNombrada = function sumar(c,d) {
  return c + d;
};
console.log(sumaNombrada(1,2)); //Esto también imprime 3
```

  - Otra característica importante en la declaración es el hoisting. Esto significa que puedes llamar a la función antes de que aparezca en el código y no va a dar un error al hacerlo. Por ejemplo puedo llamar a una funcion de saludo y después definirla:

```
console.log(saludo("Pepito")); //La llamo sin estar definida todavía

function saludo(nombre) {
  return "¡Hola " + nombre +"!";
}
```
A pesar de haber definido la función después de haberla llamado, debido al hoisting funciona perfectamente, es decir, se imprimiría: ¡Hola Pepito!

## 7.¿Qué es la palabra clave "this" en JS?

La palabra clave 'this' en JS se refiere a un obbeto que está llamando a la función, es decir, que está vinculado a una función cuando ésta es llamada. El valor que tiene se define en el momento en el que se llama a la función y no cuando se define. Generalmente estos son los distintos comportamientos:

- **Sin usarlo en clases ni funciones:** Aquí tiene dos formas, en el navegador, que se referiría al objeto global de window y en node.js que en este caso sería un objeto vacío {}.
 
- **En funciones simples:** En el caso de funciones que se llaman solas, sin ser un método de un objeto, hay dos modos, el estricto y no estricto:

     - En modo no estricto, tener this dentro de la funci
 
Voy a explicar qué es this con una analogía con la que considero que se comprende bastante bien el contexto. Vamos a imaginar que this es un focoque puede iluminar distintos objetos dependiendo de dónde está y quién está moviendolo. Tenemos cuatro posibles escenarios que pueden suceder:

1. El foco está en el techo sin que nadie lo esté moviendo y está iluminando toda la habitación de forma general, sin estar iluminando más a ningún lugar en específico. Esto en JS sería semejante al contexto global, por ejemplo la ventana del navegador o un objeto general de Node.js, pero nada específico, sólo general.
2. El foco ahora lo tiene una persona y lo usa para enfocar algún objeto en concreto de su cuarto, por ejemplo un armario. La persona está realizando una función que sería tener el foco dentro de su función y esta es específicamente para enfocar el armario. Esta misma acción la podemos traspasar a JS de la siguiente manera:

```
const persona = {
    nombre: "Pepito",
    enfocarObjetoCuarto: function(objetoCuarto) {
      console.log(this.nombre + " está enfocando al " + objetoCuarto);
    }
  };
  
  console.log(persona.enfocarObjetoCuarto("armario"));
```
Y usando el this en esta funcion simple, que en este caso this es Pepito, tendríamos de output: "Pepito está enfocando al armario".


3. En este tercer escenario por ejemplo Pepito le deja el foco a María y le dice que le enfoque ella el armario diciéndola 'María (this), enfocame al armario'. El foco no es propiedad de María, le deja usarlo en un momento específico, es decir, cambia el valor de this:

```
function enfocar() {
    console.log(`${this.nombre} está enfocando el armario.`); // this cambia según el nombre
  }
  
  const pepito = { nombre: "Pepito" };
  const maría = { nombre: "María" };
  
  enfocar.call(pepito);   // This es pepito
  enfocar.call(maría);  // Ahora this es maría

```

En el primer caso, this sería Pepito y diría "Pepito está enfocando el armario", y en el segundo caso lo hemos forzado a cambiar a María, por lo que diría: "María está enfocando el armario".

4. El último escenario sería por ejemplo un foco inteligente que enfoca de forma programada a unos actores de teatro y siempre persigue al actor enfocado aunque se mueva porque se le vincula. Esto sería como las funciones flecha de JS, en estos casos el this se refiere al contexto donde están creadas. Así sería el ejemplo del foco en código:

```
const actuacion = {
    acto: "Blancanieves",
    actores: ["Pepito", "María"],
    enfocarActores: function() {
      this.actores.forEach(actor => {
        console.log(actor + " tiene el foco en la función de " + this.acto);
      });
    }
  };
  
  actuacion.enfocarActores();
```
Como se puede ver, aqui tenemos this fuera de la flecha (this.actores) y this dentro de la flecha (this.acto). El this fuera de la flecha se refiere al objeto de la actuación porque enfocarActores es un método de el objeto. En el caso de dentro de la función con la flecha, el comportamiento es distinto. Las funciones con flecha no tienen su propio this, lo heredan el valor de this de donde fueron definidos. En este caso, como está dentro de enfocarActores, hereda el this de enfocarAcores cuando se ejecuta.

















  
