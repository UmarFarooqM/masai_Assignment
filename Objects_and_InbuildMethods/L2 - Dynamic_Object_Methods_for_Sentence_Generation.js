let sentenceBuilder = {
    subject : "I" ,
    verb : "am",
    object : "coding" ,
    buildSentence : function genrateSentence(){
      return (this.subject && this.verb && this.object) ? `${this.subject} ${this.verb} ${this.object}` : "Incomplete sentence"
    } ,
    updateProperty : function update(property , value){
      return this.hasOwnProperty(property) ? (this[property] = value , "updated successfully") : "Invalid property"
    }
  }
  
  console.log(sentenceBuilder.updateProperty("subject" , "The cat"))
  console.log(sentenceBuilder.updateProperty("verb" , "is"))
  console.log(sentenceBuilder.updateProperty("object" , "learning coding "))
  console.log(sentenceBuilder.buildSentence())
  
  