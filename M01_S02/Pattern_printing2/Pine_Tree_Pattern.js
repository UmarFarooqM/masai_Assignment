let n=5

for(let i=1;i<=n;i++){
  let temp=""
  if(i<=4){
    
  for(let j=1;j<n-i;j++){
    temp += " "
  }
  for(let j=1 ; j<= (2*i)-1;j++){
    temp += "*"
  }
  // console.log(temp)
  }
  else {
    for(let j=1;j<=(2*n)-1;j++){
      if(j==n-1){
        temp+= "|"
      }
      else{
        temp +=" "
      }
    }
  }
  console.log(temp)
}