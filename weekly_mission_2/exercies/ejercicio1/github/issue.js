const issue = {
    title: "09 Live 3 Semana 3 [Jueves 21 de abril 8PM]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open", 
    numberOfComments: 51,
    labels: ["Finalizado", "Live 3", "Semana-3"],
    author: "carlogilmar",
    dateCreated: "7 days ago",
    lastUpdated: "1 hour ago",

    getTitleAndAuthor: function () {
        return `The issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function () {
        return `This issue is ${this.status}, has ${this.numberOfComments} comments and it was created ${this.dateCreated}`
    }
}


console.log (issue.getTitleAndAuthor())
console.log (issue.getGeneralInfo())
console.log( "Labels: " +issue.labels)