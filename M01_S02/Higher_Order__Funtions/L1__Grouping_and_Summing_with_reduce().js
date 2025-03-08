let arr=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let arrfreq = arr.reduce((acc, arr)=>{
    acc[arr] = (acc[arr] || 0 ) + 1;
    return acc;
}, {})
console.log(arrfreq)
