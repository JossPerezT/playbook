// Creando la clase 
class repo_class {
    constructor (name, author, language, numberOfCommits, stars, forks, issuesOpen, issuesClose) {
        this.name = name 
        this.author = author
        this.language = language 
        this.numberOfCommits = numberOfCommits
        this.stars = stars 
        this.forks = forks
        this.issuesOpen = issuesOpen
        this.issuesClose = issuesClose
    }
    getTotalIssues() {
        return this.issuesOpen + this.issuesclose
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

// Instanciando la clase 
console.log ("Instanciando la clase repo de github")
const repo = new repo_class (
    "LaunchX",
    "carlogilmar",
    "JavaScript",
    100,
    199, 
    299, 
    10,
    10,
)
console.log (`Nombre del repo: ` +repo.name)
console.log ("Issues Totales: " + repo.getTotalIssues())
console.log (repo.getGeneralInfo ())