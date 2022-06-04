// .replace() Puede cambiar textos dentro del string

const producto = "monitor de 21 pulgadas"

console.log(producto.replace ("21", "24"));
console.log(producto)

const nombreCompleto= "Carolina Uribe Botero"
console.log(nombreCompleto.replace("Carolina" , "Diana"))

//.slice() para extraer una parte de un string

console.log(producto.slice(0,10));
console.log(producto.slice(5,12));
console.log(producto.slice(10));
console.log(producto.slice(3,1));

//.substring() sirve para cortar desde donde lo necesite
console.log(producto.substring(0,10));
console.log(producto.substring(5,12));
console.log(producto.substring(10));
console.log(producto.substring(3,1));


//.charAt() si han visto ej. algunos sitios web cuando no han puesto un avatar
const nombre = "Carolina";
const apellido = "Uribe";

console.log(nombre.substring(0,1))

console.log(nombre.charAt(0));
console.log(`${nombre.charAt(0)}.${apellido.charAt(0)}`);
