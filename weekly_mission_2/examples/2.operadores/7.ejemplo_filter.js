// -ejemplo 7: Uso de filter para filtrar una lista de elementos 
const countries7 = ['Finland','Denmark', 'Sweden', 'Norway', 'Iceland', 'Filadelphia']
const countriesContainIngLand = countries7.filter ((country)=> //Función 
country.includes ('land') // indicacion de filtrar los elementos que incluyan 'land'
)

console.log ("Ejemplo 7: Uso de filter para filtrar una lsta de elementos")
console.log (countriesContainIngLand)

const countriesEndsByIA = countries7.filter ((country)=> 
//country.endsWith('ia')
 country.includes ('ia')
)

console.log ("Ejemplo 7: paises que terminan en'ia'")
console.log (countriesEndsByIA)
