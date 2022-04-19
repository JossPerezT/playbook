// Ejemplo 13: uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación indicada 
const names13 = ['Explo1', 'Explorer 2', 'Explorer number 3']
const result = names13.findIndex((name) =>
name.length > 15
)

console.log ("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 letras esta en la posición: " + result)