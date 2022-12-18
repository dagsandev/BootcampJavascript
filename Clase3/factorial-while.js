// Crea los siguientes archivos JS:
// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


// factorial-while.js
// let factorial = 1;
let factorial = 1;
let num = 10;

while(num > 1){
    factorial *= num;
    num--;

}

console.log("Factorial de 10 es: " + factorial)

