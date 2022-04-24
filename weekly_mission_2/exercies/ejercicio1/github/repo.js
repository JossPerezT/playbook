const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOFCommits: 100,
    stars: 199, 
    forks: 299, 
    issuesOpen: 10,
    issuesclose: 10,

    getTotalIssues: function () {
        return this.issuesOpen + this.issuesclose
    },
    getGeneralInfo: function (){
        return `This repository ${this.name} was created by ${this.author}`
    }
}


console.log (`Nombre del repo: ` +repo.name)
console.log ("Issues Totales: " + repo.getTotalIssues())
console.log (repo.getGeneralInfo ())