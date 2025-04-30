`
Ejercicio del checkpoint 7: 
Cree una función JS que acepte 4 argumentos. 
Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola registra "¡El número es menor que 50!"
`

function ecuacion(a,b,c,d) {
    let primeraSuma = a + b; //primero sumo los dos primeros argumentos
    let segundaSuma = c + d; //luego los dos segundos
    let multiplicacion = primeraSuma * segundaSuma; //despues los multiplico

    if (multiplicacion > 50) {
        console.log("El número es mayor que 50!"); //si es mayor (no igual) a 50 se imprime esta frase
    } else {
        console.log("El número es menor que 50!"); //en los demás casos, osea menor o igual a 50, se imprime esta otra
    }
}

resultado1 = ecuacion(1,2,3,4);  // Aquí el resultado es menor que 50
resultado2 = ecuacion(5, 6, 10, 12); //Aquí el resultado es mayor que 50