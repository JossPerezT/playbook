// Creancdo la clase
class bio_class {
    constructor (profile_photo, userName, posts, followers, following, video, tag){
        this.profile_photo = profile_photo
        this.userName = userName
        this.posts = posts 
        this.followers = followers
        this.following = following 
        this.video = video
        this.tag = tag
    }
    getBio() {
        return `${this.userName} posted ${this.posts} times, ${this.video} videos and has ${this.tag} tags.`
    }
    getInfoBio() {
        return `This user  has ${this.followers} followers and ${this.following} following.`
    }
}

//Instanciando la clase 

console.log ("Instanciando la clase biografia de Instagram")

const bio = new bio_class (
    "photo.jpg", 
    "Lizz Perez", 
    33, 
    111, 
    712, 
    2, 
    0, 
)

console.log (bio.getBio())
console.log (bio.getInfoBio())