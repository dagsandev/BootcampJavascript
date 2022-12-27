// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre
let nombre = "Santiago";

// - Otra cadena de texto con tu Apellido
let apellido = "Daglio";

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = console.log("estudiante en mayuscula: " + estudiante.toUpperCase());

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = console.log("estudiante en minuscula: " + estudiante.toLowerCase());

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numero_letras = console.log("numero de letras de 'estudiante': " + estudiante.length);

// - Una variable que contenga la primera letra del Nombre
let primera_letra = console.log("primera letra del nombre: " + nombre.charAt(0));

// - Otra variable que contenga la última letra del Apellido
let ultima_letra = console.log("ultima letra del apellido: " + apellido.charAt(apellido.length-1));

// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminar_espacios = console.log(estudiante.replace(" ", ""));

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let bool = console.log(estudiante.includes(nombre));