// Crea los siguientes archivos JS:
// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

// factorial-break.js

let factorial = 1;
let num = 10;

while(true){
    factorial *= num;
    num--;
    if (num === 1){
        break
    }
}

console.log("Factorial de 10 es: " + factorial)
