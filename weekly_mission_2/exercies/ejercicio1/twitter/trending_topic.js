/*
Información para trending_topic 
position
category 
topicOrHashtag 
numberTweets
*/
const trending_topic = {
    position: 8,
    category: "Politics",
    topicOrHashtag: "#JoseRamonLopezBeltran71",
    numberTweets: "14.6K",

    getInfo: function (){
        return `Trending Topic position ${this.position} is about ${this.topicOrHashtag} with ${this.numberTweets} tweets`
    }
}

console.log (trending_topic.getInfo())
console.log ("Category: " + trending_topic.category)
