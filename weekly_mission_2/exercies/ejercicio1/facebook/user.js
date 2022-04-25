/*
Información recolectada de la información del usuario 
    places_lived
    education
    mobile
    AIM
    email
    gender
    birthday
    other_names
    relationship
    check-ins
    sports
    movies
    TV_shows
    books
    games
*/
const user = {
    user: "Lizz Perez",
    places_lived:"CDMX",
    education:"Criminology",
    mobile:5527182190,
    AIM:"Lizzett",
    email:"jossp82@gmai.com",
    gender:"female",
    birthday:"July 29",
    other_names:"Lizz",
    relationship:"Single",
    check_ins: ["Brock University", "Skywheel Niagara", "Niagara Falls, Ontario", "St. Catharines"],
    movies:["Trainspotting", " The pianist", " Corpse Bride", " BlackSwan"],
    TV_shows:["Arrow", " Flash", " TVD", " Originals", " Greys Anatomy"],
    books:["La biblia de los caídos", " Finding Love", " ¿Por qué a mí?"],


    getLives: function () {
        return `${this.user} lived in ${this.places_lived}`
    },
    getContact: function (){
        return `Contact: 
        Email: ${this.email}. 
        Mobile ${this.mobile}`
    },
    getInfo: function () {
        return `Birthday´s user is ${this.birthday}, is ${this.gender} and ${this.relationship}`
    }
}

console.log (user.getLives())
console.log (user.getContact())
console.log (user.getInfo())
console.log ("Movies: " + user.movies)
console.log ("TV Shows: " +user.TV_shows)
console.log ("Books: " + user.books)
