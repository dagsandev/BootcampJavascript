// Crea los siguientes archivos JS:
// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

// factorial-for.js

let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
    console.log(i + " " + factorial)
}
console.log(factorial)