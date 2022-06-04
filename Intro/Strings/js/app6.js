//.reapet() me permite repetir texto
const producto = "Monitor de 21 Pulgadas";
const promocion = "En Promocion !!".repeat (3);

console.log(producto.repeat(3));
console.log(producto.repeat (2.8)); //va redondear
console.log(`${producto} ${promocion}`);

//.split() va permitir separar palabras por caracteres especiales
const actividad = "Estoy aprendiendo JS ES6";
console.log(actividad.split (" "));

const hobbies= 'Programar,Cocinar,Nadar, Karate,Leer';
const arrayHobbies= hobbies.split(",");
console.table (arrayHobbies)
