//como eliminar los espacios en blanco

const producto= '     Monitor de 21 pulgadas  ';
console.log(producto);
console.log(producto.length);

// Eliminar espacios al inicio .trimStart()
console.log(producto.trimStart());
// Eliminar espacios al final trimEnd()
console.log(producto.trimEnd());
// En JS yo puedo concatenar varios metodos simplemente uno despues de otro
console.log(producto.trimStart().trimEnd().length);
//hay un metodo que vino con ES6 que hace lo mismo que los otros dos juntos
console.log(producto.trim())
