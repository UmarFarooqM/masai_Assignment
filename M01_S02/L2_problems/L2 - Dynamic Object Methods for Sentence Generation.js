let sentenceBuilder = {

    subject: "I",
    verb : "am",
    object : "coding",
    BuildSentence : function generateSentence(){
        return (this.subject && this.verb && this.object) ? `${this.subject} ${this.verb} ${this.object}` : "Incomplete sentence"
    } ,
    UpdateProperty : function update(property, value){
        return this.hasOwnProperty(property) ? (this[property] = value, "update successful") : "Invalid property"
    }
}
console.log(sentenceBuilder.UpdateProperty("verb", "learning coding"))
console.log(sentenceBuilder.BuildSentence())
console.log(sentenceBuilder.UpdateProperty("subject", "The cat"))
console.log(sentenceBuilder.UpdateProperty("verb", "is "))
console.log(sentenceBuilder.UpdateProperty("mood", "happy"))
console.log(sentenceBuilder.UpdateProperty  ("verb", ""))
console.log(sentenceBuilder.BuildSentence())
