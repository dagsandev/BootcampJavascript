// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy

const fecha = new Date()
console.log(fecha);

// - La fecha de tu nacimiento
const fecha_nacimiento = new Date(1993,8,15);
console.log(fecha_nacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fecha_comparativa = (fecha > fecha_nacimiento);
console.log(fecha_comparativa)

// - Una variable que contenga el día de tu nacimiento
const nacimiento_dia = fecha_nacimiento.getDate();
console.log(nacimiento_dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const nacimiento_mes = fecha_nacimiento.getMonth();
console.log(nacimiento_mes);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const nacimiento_anio = fecha_nacimiento.getFullYear();
console.log(nacimiento_anio);
