// Autor: Cicerelli, Fabio Andrés 
// Comisión 7 Fundación Formar

let sumar = require('./CALCULADORA/sumar');
let restar = require('./CALCULADORA/restar');
let multiplicar = require('./CALCULADORA/multiplicar');
let dividir = require('./CALCULADORA/dividir');


// sumar
console.log(sumar(3,5));

// restar
console.log(restar(5,3));

// multiplicar
console.log(multiplicar(5,6));
console.log(multiplicar(0,6));
console.log(multiplicar(7,0));

// dividir
console.log(dividir(43,6));
console.log(dividir(33,0));
console.log(dividir(0,6));

// LA INVITACIÓN A PENSAR

// 1- Sería un código más dificil de mantener que uno que está modularizado, donde cada funcionalidad
//    está separada en un solo archivo y con un nombre que lo identifique adecuadamente. 

// 2- Porque se puede reutilizar el código en otras aplicaciones que se hagan más adelante.
//    No es necesario escribir una y otra vez lo mismo, podemos hacer nuestra propia librería 
//    desde cualquier lugar de la aplicación.

// 3- Si, seguramente será una constante a lo largo del curso y se buscará escribir un código
//    bien estructurado, reutilizable, y por supuesto, siguiendo las buenas prácticas
