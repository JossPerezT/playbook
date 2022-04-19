// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúscula 
const countries6 = ['Finland','Denmark', 'Sweden', 'Norway', 'Iceland', 'Republica Dominicana']
const countriesFirstThreeLetters = countries6.map((country)=>
country.toUpperCase().slice(0,3) + country.toLowerCase().slice(3) 
// El método slice obtiene solo la longitud marcada del string
)

console.log ("Ejemplo 6: Uso de map para convertir las primeras tres letras en mayúsculas")
console.log (countriesFirstThreeLetters)