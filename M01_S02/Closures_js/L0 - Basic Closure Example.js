function outerFunction(){

    let message = "this is the outer variable"

    function innerfunction(){
         message = "correct message"
        // console.log(store)
        return message
    }
    return innerfunction;
}

let  out = outerFunction()
console.log(out())