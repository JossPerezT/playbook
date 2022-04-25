// Creando la clase 

class pullRequest_class {
    constructor ( title, branchName, dateCreated, status, author, repositoryNameAssociated) {
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.author = author
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return `This Pull Request is ${this.status}`
    }
    getTitleAndAuthor(){
        return `${this.title} was created by ${this.author} ${this.dateCreated}`
    }
}

// Instanciando la clase 
console.log("Impimiendo la clase pull Request de github")
const pullRequest = new pullRequest_class (
    "Envío de mi blog por mi primer PR",
    "main",
    "17 days ago",
    "Open",
    "JossPerezT",
    "launch-x-explorers",
)
console.log(pullRequest.getTitleAndAuthor())
console.log (`${pullRequest.getStatus()} in the branch ${pullRequest.branchName}`)
