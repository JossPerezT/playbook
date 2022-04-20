// Ejemplo 10: Overriding methods 
class Explorer {
    constructor(name, username, mission){
        this.name = name   
        this.username = username
        this.mission = mission
    }
    getNameAndUserName(){
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission) // SUPER ayduará a llamr el constructor padre
        this.cycle = cycle // Agregamos este atributo dde la clse viajero, es exclusiva de esta clase y no de la clase padre
    }
    getGeneralInfo(){
        let nameAndUserName = this.getNameAndUserName() // llamamos el método de la clase padre 
        // nameAndUserName es una variable de esta función, no se necesita tirar el this para referenciarla 
        return `${nameAndUserName}, Ciclo ${this.cycle}`
    }
}

const viajero1 = new Viajero ("Carlo", "LaunchX", "NodeJs", "Abril 2022")
console.log ("Ejemplo 10: Overrinding methods")
console.log (viajero1)
console.log(viajero1.getNameAndUserName()) //Método de la clase padre
console.log (viajero1.getGeneralInfo()) // Método de la clase hija 