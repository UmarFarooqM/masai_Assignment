let N = 3 
let M=2 

for(i=1;i<=N;i++){
  let two=""
  for(j=1;j<=M;j++){
    if(i==1){
      two += j + " "
    }
    else if(i==2){
      two += j+2 + " "
    }
    else if(i==3){
      two += j+4 + " "
    }
  }
  console.log(two)
}