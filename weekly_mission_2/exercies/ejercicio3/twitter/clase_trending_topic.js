// Creando la clase
class trending_topic_class {
    constructor ( position, category, topicOrHashtag, numberTweets){
        this.position = position 
        this.category = category 
        this.topicOrHashtag = topicOrHashtag
        this.numberTweets = numberTweets
    }
    getInfo(){
        return `Trending Topic position ${this.position} is about ${this.topicOrHashtag} with ${this.numberTweets} tweets`
    }
}


// Instanciando la clase 
console.log ("Instanciando la clase trending topic de twitter")
const trending_topic = new trending_topic_class (
    8,
    "Politics",
    "#JoseRamonLopezBeltran71",
    "14.6K"
)
console.log (trending_topic.getInfo())
console.log ("Category: " + trending_topic.category)
