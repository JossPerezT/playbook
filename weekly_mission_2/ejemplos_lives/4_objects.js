// Objeto: Lo siguiente es un objeto vacio 
const person = {}

// Objeto con propiedades 
const rectangle = {
    length: 20, 
    width: 20
} 
console.log (rectangle) // si no se imprimen, no se verán los elementos de los objetos 

// El objeto es un conjunto de valores key-value 
const explorer = {
    firstName: `Jocelyn`,
    lastName: `Perez`,
    age: 23 ,
    country: `México` ,
    city: `Èstado de México`, 
    skills: [        
        `HTML`,
        `CSS` ,
        `Criminología`
    ]        
}
console.log (explorer)


// Acceder a una propiedad del objeto 
const commander = {
    firstName: `Carlo` ,
    lastName: `Gilmar` ,
    age: 27 ,
    country: `México`, 
    city: `México` ,
    skills: [
        `JavaScript` ,
        `TypeScript`,
        `CoffeScript`,
        `Elm`
    ],
}
console.log (commander)

//Para acceder a las propiedades de un objeto se peuden usar: variable.elemento

console.log (commander.firstName)
console.log (commander.lastName)
console.log (commander.age)


console.log (explorer.firstName)
console.log(explorer.lastName)
console.log(explorer.age)


// También se puede usar variable[`elemento`]

console.log ("Imprimiendo variables con [``]")
console.log (explorer[`firstName`])
console.log (explorer [`lastName`])
console.log (explorer[`age`])
console.log (explorer [`country`])


console.log (commander[`firstName`])
console.log (commander [`lastName`])
console.log (commander[`age`])
console.log (commander [`country`])

