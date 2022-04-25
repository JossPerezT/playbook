// Creancdo la clase
class messages_class {
    constructor (user, message, status){
        this.user = user
        this.message = message
        this.status = status
    }
    getMessages() {
        return `Conversation with ${this.user} ${this.status} "${this.message}"`
    }
}


//Instanciando la clase 
console.log ("Instanciando la clase Messages de instagram")
const messages = new messages_class (
    "Frontend developer", 
    "😂", 
    "sent", 
)

console.log (messages.getMessages())