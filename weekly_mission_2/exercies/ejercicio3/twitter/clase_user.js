// Creando la clase
class user_class {
    constructor (user, userName, bio, followers, following, tweets, media, likes, born, joined, photo) {
        this.user = user
        this.userName = userName
        this.bio = bio 
        this.followers = followers
        this.following = following
        this.tweets = tweets
        this.media = media 
        this.likes = likes 
        this.born = born 
        this.joined = joined 
        this.photo = photo
    }
    getGeneralInfo(){
        return `${this.userName} has ${this.followers} followers and ${this.following} following, was born ${this.born} and joined ${this.joined}`
    }
    getTweetMediaAndLikes(){
        return `This user has ${this.tweets} tweets, ${this.media} media and ${this.likes} likes`
    }   
}


// Instanciando la clase 
console.log ("Instanciando la clase user de twitter")
const user = new user_class (
    "Jocelyn77176157",
    "JocelynPerez",
    "Sin descripción",
    "12",
    "72",
    38,
    6,
    2143,
    "July 29, 1998",
    "May 2021",
    "img.jpg"
)
console.log ("User: " +user.user)
console.log (user.getGeneralInfo())
console.log (user.getTweetMediaAndLikes())