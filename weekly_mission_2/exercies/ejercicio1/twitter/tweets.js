/*
En este ejemplo usaremos información sobre los tweets 
userName
user
date
tweet
replying
retweets
quoteTweet
likes
*/
const tweets = {
    userName:"Visual Partner-Ship",
    user:"@visual_partner",
    date:"abr 19, 2022 · 10:47p.m.",
    tweet:"Diseños para Launch X Mission Node JS",
    replying: 4,
    retweets: 14,
    quoteTweet: 4,
    likes: 66,


    getGeneralInfo: function () {
        return `${this.userName} shared a tweet: ${this.tweet} on ${this.date}`
    },
    getStatistics: function () {
        return `The tweet shared by ${this.user} has ${this.retweets} retweets, ${this.replying} replying, ${this.quoteTweet} quoteTweet and ${this.likes} ikes`
    }
}
console.log (tweets.getGeneralInfo())
console.log (tweets.getStatistics())