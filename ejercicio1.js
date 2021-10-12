// Realizar un script llamado Ejercicio1.js, que contenga una función llamada
// CantidadMayusculas que reciba como parámetro un string y devuelva el número de letras
// mayúsculas que contiene dicha cadena. El valor devuelto debe ser mostrado en pantalla.

function CantidadMayusculas(frase) {
  var contador = 0;
  var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < mayusculas.length; i++) {
    for (var x = 0; x < frase.length; x++) {
      if(frase[x]==mayusculas[i]){
        contador+=1;
      }  
    }
  }
  return contador;
}

const input = prompt("Ingrese una frase");
console.log("frase de usuario: "+input);

const resultado = CantidadMayusculas(input);

document.write("La frase contiene "+resultado+" mayúsculas.");
