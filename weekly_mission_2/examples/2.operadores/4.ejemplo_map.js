 // Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista 
 // Arrow function and rexplicit return
 // const modifiedArray = arr.map((element,index) => element)


 const numbers4 = [1,2,3,4,5]
 const numberSquare = numbers4.map(function (num){
     // También se puede escribir la funcion con function arrow const numberSquare = numbers4.map((num) => return num*num{
     return num*num
 })

 console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
 console.log (numberSquare)