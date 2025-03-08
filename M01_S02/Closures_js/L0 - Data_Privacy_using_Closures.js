function createCounter(){
    count = 0
    function increment(){
        count++
        return count
    }
    function getCount(){
        return count
    }
    return {
        increment:increment,
        getCount:getCount
    }
}
let c = createCounter()

console.log(c.increment())
console.log(c.increment())
console.log(c.getCount())