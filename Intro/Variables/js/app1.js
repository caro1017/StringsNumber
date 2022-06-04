//variables creadas con VAR genera HOISTING

var producto= "parlantes BT"; //Inicializando la variable

console.log (producto);
var producto2 = 'Monitor portatil 15 Pulgadas';
console.log (producto2);

producto= 78;
console.log (producto);

producto= "78";
console.log (producto);

var nombre;
console.log (nombre);

// En js se pueden usar letras numeros y _ para nombrar variables
// Pero no se puede empezar con numeros, y aunque se pueda empezar con _ no es una buena practica
// CamelClase nake_case Pascalcase, si lo admite JB .... kebabh-case....no es admitido en JS

var nombreCompleto; // CamelCase
var nombre_completo; // nake-case
var NombreCompleto; //PascalCase

var categoria="computadores",
    marca= "lenovo",
    calificacion=5;


