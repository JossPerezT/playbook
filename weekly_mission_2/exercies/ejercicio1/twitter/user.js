/*
Para twitter haremos un objeto de JS de usuario con las siguientes propiedades: 
user
userName
bio
followers
following 
tweets 
tweetsAndReplies 
Media 
Likes
Born 
Joined 
photo
*/
const user = {
    user: "Jocelyn77176157",
    userName: "JocelynPerez",
    bio: "Sin descripción",
    followers: "12",
    following: "72",
    tweets: 38,
    media: 6,
    likes: 2143,
    born: "July 29, 1998",
    joined: "May 2021",
    photo: "img.jpg",

    getGeneralInfo: function (){
        return `${this.userName} has ${this.followers} followers and ${this.following} following, was born ${this.born} and joined ${this.joined}`
    },
    getTweetMediaAndLikes: function () {
        return `This user has ${this.tweets} tweets, ${this.media} media and ${this.likes} likes`
    }
}

console.log ("User: " +user.user)
console.log (user.getGeneralInfo())
console.log (user.getTweetMediaAndLikes())