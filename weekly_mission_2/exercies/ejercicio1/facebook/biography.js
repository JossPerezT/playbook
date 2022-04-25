/*
/*
información recolectada en facebook en la biografia 
    userName
    profile_picture
    profile_Cover
    Followers 
    friends
    media
*/
const biography = {
    userName: "Lizz Perez",
    profile_picture: "photo.img",
    profile_Cover: "photo.img",
    followers: 193,
    friends: 373,
    bio: 'Alguien dijo alguna vez: "No luches contra monstruos, no sea que te conviertas en uno de ellos"',

    getNameAndBio: function () {
        return `${this.userName} has ${this.friends} friends and ${this.followers} followers`
    }
}

console.log (biography.getNameAndBio())
console.log ("Bio: " +biography.bio)
