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


// Agregar propiedades nuevas a un objeto

explorer.nationality = "Mexican"
explorer.title = " Explorer"

console.log (explorer)

// Agregando un nuevo método 
explorer.getPersonInfo = function () {
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}. \n She lives en ${this.country}.`
    return statement
}
console.log(explorer.getPersonInfo())


// Podemor tener listas de objetos 
// Podemos explorar todos estos ejemplos en la consola del navegador y verlos interactiva 

const explorerInNode = [
    {
        id: 1,
        name:"Explorer Name",
        userName: "explorer1",
        stack: [
            "python",
            "html",
            "Css",
            "JS",
            "Node"
        ]
    },
    {
        id: 2,
        name: "Explorer Name",
        userName: "explorer2",
        stack: [
            "python",
            "html",
            "css",
            "js",
            "node"
        ]
    },
    {
        id: 3,
        name: "Explorer Name",
        userName: "explorer3",
        stack: [
            "python",
            "html",
            "css",
            "js",
            "node"
        ]
    }
]
console.log (explorerInNode.name)