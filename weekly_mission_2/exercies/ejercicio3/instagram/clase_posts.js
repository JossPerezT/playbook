// Creancdo la clase
class posts_class {
    constructor (userName, post, description, likes, comments, date){
        this.userName = userName
        this.post = post
        this.description = description 
        this.likes = likes 
        this.comments = comments 
        this.date = date
    }
    getInfo(){
        return `${this.userName} posted ${this.post} ${this.date}`
    }
    getStaticsAndDescription(){
        return `Description: ${this.description}. This post has ${this.likes} likes and ${this.comments} comments`
    }
}


//Instanciando la clase 
console.log ("Instanciando la clase post de Instagram")
const post = new posts_class (
    "librerias_gandhi",
    "image.js",
    "Deja un ☝🏽 si tú lo reconoces",
    3000 ,
    1078,
    "10 hours ago"
)
console.log (post.getInfo())
console.log (post.getStaticsAndDescription())