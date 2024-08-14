//var

//let

let edadUsuario = 18;
console.log("let", edadUsuario)
//se muta la variable
edadUsuario = 21;
console.log("let", edadUsuario)
//const
const nombreUsuario = "Maria"
console.log("Nombre", nombreUsuario);


//condiciones
const edadMinima = 18
const usuario ={'nombre':'maria', edad}
//js nativo
if(edadUsuario >= edadMinima) {
    console.log("Usuario mayor de edad")
} else {
    console.log("Usuario menor de edad")
}
const numero = 2
const numeroStrg = '2'
//el === es estricto
//console.log(numeroStrg ===numero);
const bandera = true
const pais = 'Colombia'
//operdor ternario
//ecmac
//! !negacion
//!bandera ? 'Viva COlombia' :'ya no viva COlombia'
const comida = 'bandeja paisa'
// -> : es el else
bandera && pais ==='Colombia'? 'Viva Colombia' :'ya no viva Colombia'
// ?? or 
// && and
let name = null
const usuarioEmac = name ?? 'Defecto'
console.log(usuarioEmac);


//while
const limite = 100;
let suma = 0;
let numeroW = 1;
while (suma < limite){
    suma += numeroW;
    console.log('Numero ${numeroW}');
}

