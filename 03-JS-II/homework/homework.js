function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x > y){
    console.log('el mayor es x');
    return x;
  }
  if( y > x) {
      console.log('y es el mayor');
      return y;
    }
  if( x === y){
     console.log('son iguales');
     return x;

  }


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
if(edad > 18 || edad == 18){
  console.log('allowed');
  return 'Allowed'
}else{
  console.log('Not allowed');
  return 'Not allowed'
}


}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
switch (status){

  case 1 : 
        console.log('user online');
        return 'user online';
        break;
  case 2 :
        console.log('user Away');
        return 'user Away';
        break;
  default : 
        console.log('user offline');
        return 'user offline';
}


}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:


  switch (idioma) {

    case 'aleman':
                  console.log('Gutan Tag');
                  return 'Gutan Tag';
                  
    case 'mandarin':
                  console.log('Ni Hao');
                  return 'Ni Hao';
                    
    case 'ingles':
                  console.log('Hello');
                  return 'Hello';
                  
    default:
                  console.log('hola');
                  return 'hola';
                                  
  }
}
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el  color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.

  switch(color){

    case 'blue': 
                console.log('This is blue');
                return 'This is blue';
                
    case 'red': 
                console.log('This is red');
                return 'This is red';
    case 'green': 
                console.log('This is green');
                return 'This is green';
    case 'orange': 
                console.log('This is orange');
                return 'This is orange';
    default: 
                console.log('Color not found');
                return 'Color not found';
                
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  if(numero == 10 || numero == 5){
    console.log( 'true');
    return true ;
  }else{
    console.log('false');
    return  false ;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero < 50 && numero > 20){
    console.log('true');
    return  true;
  }else{
    console.log('false');
    return  false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  if ( Math.floor(numero) === numero){
    console.log('true');
    return  true;
  }else{
    console.log('false');
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if((numero % 5 === 0) && (numero % 3 === 0)){
    console.log('fizzbuzz');
    return  'fizzBuzz';
  }
  if (numero % 3 === 0){
    console.log('fizz');
    return 'fizz';
  }
  if(numero % 5 === 0){
    console.log('buzz');
    return  'buzz';
  }

    
}


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1 >=  0 && num2 > 0 && num3> 0 && num2 < num1 && num2 < num3 ){
     
    if ( num1 > num3  ){
      console.log('Número 1 es mayor y positivo');
      return  'Número 1 es mayor y positivo' ;
    }else if (num3 > num2 && num3 > num1 ){
            num3++;
            console.log(num3);
         }
     return  num3;
    }
    
if  ( num1 <0 || num2 < 0   ||  num3 < 0 && num2 < num1 && num2 < num3 ){

         console.log('hay negativos ');
         if (num3 >  num1 ){
          num3++;
          console.log(num3);
       }
    return 'hay negativos ';
         
}
if  (num1 === 0 || num2 === 0 || num3 === 0){

     console.log('error');
     return 'error';
 
}else{

console.log('false');
return 'false';
}


                 
                      
}


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  if (numero == 0 || numero == 1 || numero == 4){
     
    console.log('false');
    return false;
    }
 for (let x = 2; x < numero / 2; x++) {
   if (numero % x == 0) {
     console.log('false');
     return false;
    }
   }
 console.log('true');
 return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true){
    console.log('soy verdadero')
    return true;
  }else{
  
    console.log('soy falso');
    return false;
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí 
  var prod= 0; 
  var arreglo= new Array(10);
  for (i=0; i <= 10 ;i++){

      prod = 6 * i ;
      arreglo.fill(prod,i);

       }
  arreglo.forEach(function(item,index,arr){
        console.log("Posición " + index + ": " + item);
    });


}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var b= numero.toString();

  if (b.length === 3){
    console.log('true');
    return true;
  }else{
    console.log('false');
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let result = numero;
  let i = 0;

do {
  i = i + 1;
  result = result + 5;
} while (i < 8);

return result;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
