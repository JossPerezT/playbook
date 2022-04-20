// Ejemplo 4: Métodos en los objetos 
class Repository {
    constructor(name, author, language, stars) {
        this.name = name 
        this.author = author 
        this.language = language
        this.stars = stars
    }
    getInfo(){ // Esto es una función que ejecutará cualqueir objeto instanciado de esta clase 
        return `Repository ${this.name} has ${this.stars} and ${this.author} is its author`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")

const myRepo = new Repository  ("LaunchX", "JossPerezT", "js",9)
const herRepo = new Repository ( "LaunchX", "RoussTr", "Js", 12)
console.log (myRepo.getInfo())
console.log (herRepo.getInfo())