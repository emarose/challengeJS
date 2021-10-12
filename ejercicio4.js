// Realizar un script llamado Ejercicio4.js, que dado un array, ordene sus valores de menor
// a mayor y los muestre por pantalla.

const array = [1,52,22,8,13,33,95,2,27,101,18,0]
document.write("Array original: "+array+"<br>")

const arrayOrdenado = array.sort(function(a, b){return a - b});

document.write("Array ordenado: "+arrayOrdenado)