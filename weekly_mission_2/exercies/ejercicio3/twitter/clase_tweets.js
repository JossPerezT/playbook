// Creando la clase
class tweets_class {
    constructor (userName, user, date, tweet, replying, retweets, quoteTweet, likes) {
        this.userName = userName
        this.user = user 
        this.date = date 
        this.tweet = tweet
        this.replying = replying
        this.retweets = retweets
        this.quoteTweet = quoteTweet
        this.likes = likes 
    }
    getGeneralInfo() {
        return `${this.userName} shared a tweet: ${this.tweet} on ${this.date}`
    }
    getStatistics(){
        return `The tweet shared by ${this.user} has ${this.retweets} retweets, ${this.replying} replying, ${this.quoteTweet} quoteTweet and ${this.likes} ikes`
    }
}



// Instanciando la clase 
console.log ("Instanciando la clase tweets de twitter")
const tweets = new tweets_class (
    "Visual Partner-Ship",
    "@visual_partner",
    "abr 19, 2022 · 10:47p.m.",
    "Diseños para Launch X Mission Node JS",
    4,
    14,
    4,
    66
)
console.log (tweets.getGeneralInfo())
console.log (tweets.getStatistics())