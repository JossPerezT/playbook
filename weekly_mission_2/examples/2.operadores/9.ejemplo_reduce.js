// Ejemplo 9: uso del reduce 
const numbers9 = [1,2,3,4,5]
const resultOfReduce = numbers9.reduce((acc, element) => // reduce funciona con un accumulador 
acc + element, 0 // acc es el acumulador, variable default 
)

console.log("Ejemplo 9: Uso del reduce para calcular la suma de los elementos de una lista")
console.log (resultOfReduce)