/*
Los objetos pueden guardar funciones, así se llaman métodos 
*/
const explorer = {
    firstName: `Jocelyn`,
    lastName: `Perez`,
    age: 23 ,
    country: `México` ,
    city: `Èstado de México`, 
    // los objetos pueden contener objetos anidados 
    address: {
        zip_code: 00213 ,
        address: `Dr. Vertiz 10`
    }, 
    skills: [        // Se pueden agregar listas
        `HTML`,
        `CSS` ,
        `Criminología`
    ] ,
    // getFullName es el nombre del método 
    getFullName: function(){ // Esta es la definición de una función 
        //this.firstName hará referencia al valor firstName de este mismo objeto 
        return `${this.firstName} ${this.lastName}`
    }
}
// Para invocar el método de un objeto 
console.log (explorer.getFullName())


// Modificar propiedades del objeto 
explorer.country = `México Mágico`
explorer.skills.push (`Elm`) // .push () agrega un elemto a una lista 

console.log (explorer)


// Ag