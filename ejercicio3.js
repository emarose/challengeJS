// Realizar un script llamado Ejercicio3.js, que cree un array vacío, y luego generar N
// números al azar y guardarlos en un array, N es introducido por el usuario a través de un
// prompt.

const array = [];
  input = prompt("Ingrese un numero")

for (let i = 0; i < input; i++) {
  array[i] =  Math.floor(Math.random()*101)
  
}

console.log(array)