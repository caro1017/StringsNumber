//Algunos metodos utiles

const producto= "Portatil Lenovo";
const precio= "200 USD"

// con .lenght Clacula la cantidad de caracteres que tiene un string
console.log(producto.length);

// .indexof () nos va decir que posicion tiene un texto que se desea buscar dentro del string si lo encuentra sino nos devuelve un -1
console.log(producto.indexOf ("Asus"));
console.log(producto.indexOf ("Lenovo"));

// .includes() nos dice si el texto existe o no como indexof
console.log(producto.includes ("Asus"));
console.log(producto.includes ("Lenovo"));