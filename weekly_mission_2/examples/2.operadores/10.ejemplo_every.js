// Ejemplo 10: Uso de every nos aydua a validar todos los elementos de una lista. 
// si todos cumplen con la validadcion que se indica, devuelve un True, 
// de lo contrario un false


const names10 = ["Explorer 1", "Explorer 2", "Explorer 3", "Explorer 4", 10]
const areAllStr = names10.every((name) =>
typeof name == 'string' // every 
)


console.log ("Ejemplo 10: Son todos los nombres string " + areAllStr)
