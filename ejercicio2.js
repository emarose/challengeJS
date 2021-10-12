// Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia
// del array sumándole 1 a cada uno de los valores.

const array = [1,2,3,4,5,7];
const newArray = array.slice(0,6)

for (let i = 0; i < newArray.length; i++) {
  newArray[i] = newArray[i]+1;
}
console.log("Array original: "+array)
console.log("Array modificado: "+newArray)