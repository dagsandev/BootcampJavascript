//Ejercicio Clase 6
//Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compraSuper = ["cuchilla", "plato", "vaso", "jarra", "cepillo", "lavandina"];
console.log(compraSuper);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

compraSuper.push("aceite girasol");
console.log(compraSuper);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

compraSuper.pop();
console.log(compraSuper);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [
    {
    titulo: "Iron man",
    director:"Jon Favreau", 
    fecha: "04/30/2008"
    }, 
    {
    titulo: "Goodfellas",
    director: "Martin Scorsese",
    fecha: "11/15/1990"
    },
    {
    titulo:"El Padrino",
    director: "Francis Ford Coppola",
    fecha: "09/20/1972"
    }
];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 1980 (utilizando filter)

const peliculasFecha = peliculas.filter(pelicula => new Date(pelicula.fecha) > new Date("01/01/1980"));
console.log(peliculasFecha);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const peliculasDirector = peliculas.map(pelicula => pelicula.director);
console.log(peliculasDirector);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const peliculasTitulos = peliculas.map(pelicula => pelicula.titulo);
console.log(peliculasTitulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const peli_concat = peliculasDirector.concat(peliculasTitulos)
console.log(peli_concat);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

// const peliculasDirector2 = peliculas.map(pelicula => pelicula.director);
// const peliculasTitulos2 = peliculas.map(pelicula => pelicula.titulo);

// const peli_propagacion = [...peliculasDirector2, ...peliculasTitulos2];
// console.log(peli_propagacion);

const peliculas_propagacion = [...peliculasDirector, ...peliculasTitulos]
console.log(peliculas_propagacion)