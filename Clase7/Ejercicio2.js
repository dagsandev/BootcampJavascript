// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos_personales = 
    {
        nombre: "Santiago",
        apellido: "Daglio",
        edad: 29,
        altura: 171,
        eresDesarrollador: true
    };

// - Una variable que obtenga tu edad a partir del objeto anterior

const miEdad = datos_personales.edad;
console.log(miEdad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const nuevaLista = [
    datos_personales,
    {
        nombre: "Normando",
        apellido: "Cabrera",
        edad: 41,
        altura: 182,
        eresDesarrollador: false,
    },
    {
        nombre: "Ramiro",
        apellido: "Dobri",
        edad: 32,
        altura: 173,
        eresDesarrollador: true
    }
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const lista_ordenadas = nuevaLista.sort((a,b) => b.edad - a.edad)
console.log(lista_ordenadas);