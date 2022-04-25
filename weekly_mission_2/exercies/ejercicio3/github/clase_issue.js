// Creando la clase 
class Issue_class {
    constructor( title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels 
        this.author = author
        this. dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }
    
    getTitleAndAuthor() {
        return `The issue ${this.title} was created by ${this.author}`
    }
    getGeneralInfo() {
        return `This issue is ${this.status}, has ${this.numberOfComments} comments and it was created ${this.dateCreated}`
    }
}

// Instanciando la clase 
console.log ("Imprimiendo la clase Issue de github")
const issue = new Issue_class (
    "09 Live 3 Semana 3 [Jueves 21 de abril 8PM]",
    "MissionNodeJS",
    "Open", 
    51,
    ["Finalizado", "Live 3", "Semana-3"],
    "carlogilmar",
    "7 days ago",
    "1 hour ago",
)
console.log (issue.getTitleAndAuthor())
console.log (issue.getGeneralInfo())
console.log( "Labels: " +issue.labels)