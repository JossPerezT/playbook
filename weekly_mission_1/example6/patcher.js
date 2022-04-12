/*
Tener en cuenta que: 
    -require (`./logger`) dará el objeto creado 
    - require (`./logger`).Logger regresará la clase 



    Aquí estamos agregando una función más al objeto instanciado, no a la clase 

*/

require (`./logger`).customMessage = function (){
    console.log (`This is a new functionallity`)
}