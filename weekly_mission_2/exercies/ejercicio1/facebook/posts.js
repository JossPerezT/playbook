
/*
información de post de facebook 
    userName
    date
    description
    media
    reactions
    comments
    shares
*/
const posts = {
    userName:"HBO Max",
    date:"Thu at 8:03PM",
    description:"Cuatro razones más por las que amo a Zoë Kravitz.😍",
    media:"picture.jpg",
    reactions: 877,
    comments: 43,
    shares: 27,


    getInfo: function(){
        return `${this.userName} shared a post about "${this.description}" on ${this.date}`
    },
    getreactions: function (){
        return `This post has ${this.reactions} reactions, ${this.comments} comments and ${this.shares} shares`
    }
}

console.log (posts.getInfo())
console.log (posts.getreactions())
console.log ("Media: " +posts.media)