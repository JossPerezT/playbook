// Ejemplo 5: Atributos con valores default 
class PullRequest {
    constructor (repo, title, lines_changed){
        this.repo = repo
        this.title = title 
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dataCreated = new Date() // Esto guardará la fecha actual en que se instancia el objeto 
    }
    getInfo(){
        return `This Pr is ${this.title} in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dataCreated}`
    }
}

console.log ("Ejemplo 5: Atributos con valores default")
const myPR1 = new PullRequest ("LaunchX", "Mi primer PR", 100)
console.log (myPR1.getInfo())

// Podemos instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest ("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())
