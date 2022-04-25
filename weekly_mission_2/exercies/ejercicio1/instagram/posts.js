/*
Información recabada en los posts de instagram 
    userName
    post
    description
    likes
    comments 
    date 
*/
const post = {
    userName: "librerias_gandhi",
    post: "image.js",
    description: "Deja un ☝🏽 si tú lo reconoces",
    likes: 3000 ,
    comments: 1078,
    date: "10 hours ago",

    getInfo: function (){
        return `${this.userName} posted ${this.post} ${this.date}`
    },
    getStaticsAndDescription: function () {
        return `Description: ${this.description}. This post has ${this.likes} likes and ${this.comments} comments`
    }
}

console.log (post.getInfo())
console.log (post.getStaticsAndDescription())