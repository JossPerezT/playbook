/*
Información de la bandeja de mensajes
    user
    message
    status
*/
const messages = {
    user: "Frontend developer", 
    message: "😂", 
    status: "sent", 

    getMessages: function () {
        return `Conversation with ${this.user} ${this.status} "${this.message}"`
    }
}

console.log (messages.getMessages())