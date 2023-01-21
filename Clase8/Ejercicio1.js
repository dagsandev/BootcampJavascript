// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

 function func(){
    return true;
}

console.log(func());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function funcion(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

// - Una función generadora de índices pares automáticos

function * generaPares(){
    let par = 0;
    while(true){        
        if(par % 2 === 0){
            yield par;
        }
        par++;
    }
}

const gen = generaPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)