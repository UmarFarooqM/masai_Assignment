let n=3

for(let i=1; i<=n;i++){
    let pattern =""
    for(let j=(n*i)-n+1;j<=n*i;j++){
        pattern += j
    }
    console.log(pattern)
}