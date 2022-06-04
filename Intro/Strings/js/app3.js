// vamos a concatenar textos
const producto = "Monitor de 21 Pulgadas";
const precio= " 150 USD";

//La primera forma de unir textos es con el metodo .concat()
console.log(producto.concat ("En Descuento!!!"))
console.log(producto.concat ( precio));

// Otra forma de concatenar :
console.log(producto+precio);
console.log(producto+"con un precio de ="+precio)
console.log("El producto: " + producto + " tiene un precio de :" + precio)

//ES6 trajo consigo la mejor forma de concatenar variables con strings que se llama template string o template literals
console.log(`El producto ${producto} tiene un precio de: ${precio}`)

//Actividad
const nombre= "Carolina";
const primerApellido= "Uribe";
const segundoApellido= "Botero";

const nombreCompleto = `${nombre} ${primerApellido} ${segundoApellido} `;

console.log(`Hola: ${nombreCompleto} . Bienvenida!!!`);
console.log(`Hola:${nombre} ${primerApellido} ${segundoApellido}. Bienvenida!!!`)