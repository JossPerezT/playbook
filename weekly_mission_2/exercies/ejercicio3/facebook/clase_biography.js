// Creación de la clase 
class bio {
    constructor (userName, profile_picture, profile_Cover, followers, friends, bio){
        this.userName = userName
        this.profile_picture = profile_picture
        this.profile_Cover = profile_Cover
        this.followers = followers
        this.friends = friends
        this.bio = bio 
    }
        getNameAndBio() {
            return `${this.userName} has ${this.friends} friends and ${this.followers} followers`
        }
    
}

// Instanciando la clase 
console.log ("Impresión de la clase bio de facebook")
const biografia_Lizz = new bio ("Lizz Perez", "photo.img", "photo.img", 193, 373, "Alguien dijo alguna vez: 'No luches contra monstruos, no sea que te conviertas en uno de ellos'")
console.log (biografia_Lizz.userName)
console.log (biografia_Lizz.getNameAndBio())
