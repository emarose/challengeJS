// - Dado los siguientes vectores:
// int var1={1,2,4,6,7,8}
// int var2={1,2,4,5,6,7,8}
// a - Mostrar de manera ordenada la unión de los elementos de ambos vectores.

var var1 = [1,2,4,6,7,8];
var var2 = [1,2,4,5,6,7,8];

const arrayCombinado = var1.concat(var2);
// const arrayCombinado = []
// arrayCombinado.push(...var1, ...var2);

console.log("Primer array: "+var1);
console.log("Segundo array: "+var2);

console.log("Array combinado: "+arrayCombinado);
