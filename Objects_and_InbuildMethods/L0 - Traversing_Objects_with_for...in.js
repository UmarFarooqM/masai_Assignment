let book={
    title:"The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
    }
    let bag =""
    for(let k in book){
    bag +=k  + ": "
    bag +=  book[k] + " "
    }
    
    console.log(bag)