/*
Información de la biografia de un usuario 
    profile_photo
    userName
    posts
    followers
    following
    video
    tag
*/
const bio = {
    profile_photo: "photo.jpg", 
    userName: "Lizz Perez", 
    posts: 33, 
    followers: 111, 
    following: 712, 
    video: 2, 
    tag: 0, 

    getBio: function () {
        return `${this.userName} posted ${this.posts} times, ${this.video} videos and has ${this.tag} tags.`
    },
    getInfoBio: function () {
        return `This user  has ${this.followers} followers and ${this.following} following.`
    }
}

console.log (bio.getBio())
console.log (bio.getInfoBio())