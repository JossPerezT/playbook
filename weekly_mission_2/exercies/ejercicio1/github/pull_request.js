const pullRequest = {
    title: "Envío de mi blog por mi primer PR",
    branchName: "main",
    dateCreated: "17 days ago",
    status: "Open",
    author: "JossPerezT",
    repositoryNameAssociated: "launch-x-explorers",
    getStatus: function (){
        return `This Pull Request is ${this.status}`
    },
    getTitleAndAuthor: function (){
        return `${this.title} was created by ${this.author} ${this.dateCreated}`
    }
}

console.log(pullRequest.getTitleAndAuthor())
console.log (`${pullRequest.getStatus()} in the branch ${pullRequest.branchName}`)
