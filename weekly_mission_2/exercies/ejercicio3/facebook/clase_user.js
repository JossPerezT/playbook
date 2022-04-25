// Creando la clase 
class usuario {
    constructor(user, places_lived, education, mobile, aim, email, gender, birthday, other_names, relationship, check_ins, movies, TV_shows, books){
        this.user = user
        this.places_lived = places_lived
        this.education = education
        this.mobile = mobile 
        this.aim= aim
        this.email = email
        this.gender = gender
        this.birthday = birthday
        this.other_names = other_names
        this.relationship = relationship
        this.check_ins = check_ins
        this.movies = movies
        this.TV_shows = TV_shows
        this.books = books
    }
    getLives() {
        return `${this.user} lived in ${this.places_lived}`
    }
    getContact(){
        return `Contact: 
        Email: ${this.email}. 
        Mobile ${this.mobile}`
    }
    getInfo() {
        return `Birthday´s user is ${this.birthday}, is ${this.gender} and ${this.relationship}`
    }
}


// Instanciando la clase 
console.log ("Imprimiendo la clase user")
const Lizz = new usuario (
    "Lizz Perez",
    "CDMX",
    "Criminology",
    5527182190,
    "Lizzett",
    "jossp82@gmail.com",
    "female",
    "July 29",
    "Lizz",
    "Single",
    ["Brock University", "Skywheel Niagara", "Niagara Falls, Ontario", "St. Catharines"],
    ["Trainspotting", " The pianist", " Corpse Bride", " BlackSwan"],
    ["Arrow", " Flash", " TVD", " Originals", " Greys Anatomy"],
    ["La biblia de los caídos", " Finding Love", " ¿Por qué a mí?"],
)
console.log (Lizz.getLives())
console.log (Lizz.getContact())
console.log (Lizz.getInfo())
console.log ("Movies: " + Lizz.movies)
console.log ("TV Shows: " +Lizz.TV_shows)
console.log ("Books: " + Lizz.books)

