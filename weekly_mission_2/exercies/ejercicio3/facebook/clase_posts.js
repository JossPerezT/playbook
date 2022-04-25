// Creando la clase 
class class_post {
    constructor (userName, date, description, media, reactions, comments, shares){
        this.userName = userName
        this.date = date
        this.description = description
        this.media = media 
        this.reactions = reactions 
        this.comments = comments
        this.shares = shares
    }
    getInfo(){
        return `${this.userName} shared a post about "${this.description}" on ${this.date}`
    }
    getreactions(){
        return `This post has ${this.reactions} reactions, ${this.comments} comments and ${this.shares} shares`
    }
}


// Instanciando la clase 
console.log ("Imprimiendo la clase posts de facebook")
    const postHBO = new class_post ("HBO Max", "Thu at 8:03PM","Cuatro razones más por las que amo a Zoë Kravitz.😍", "picture.jpg", 877, 43, 27,)

    console.log (postHBO.getInfo())
    console.log (postHBO.getreactions())
    console.log ("Media: " +postHBO.media)