export default class Pokemon { 
    constructor (name) { //Constructor que nos permite recibir y cambiar el nombre 
        this.name = name
    }

    sayHello = (hello) => {
        console.log (`Mi pokemon ${this.name} te saluda!`)
    }    
    sayMessage = (message) => {
        console.log (`Mi pokemon ${this.name} te dice: ${message}`)
    }
}
