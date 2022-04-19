/* Ejemplo 14: Uso del some, este método validará todos los elementos de la lista 
 si alguna cumple con la validación indicada, regresará true
de lo contrario regresará false */

//ista de elementos 
const bools = [true, true, true]

// Uso de somre para si al menos uno de ellos es false 
const areSomeTrue = bools.some((b) => 
b === false
)
console.log ("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) // True 