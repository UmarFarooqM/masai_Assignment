let arr=[25,50,45,40,65,78,90,92,95,80]
let count=0
for(let i=0;i<arr.length;i++){
  if(arr[i]<=40){
    arr[i]+= 20
  }
  else if(arr[i]>=90){
    arr[i]= 90
  }
  else{
    arr[i]
  }
}
for(let j=0;j<arr.length;j++){
  if(arr[j]>=50){
    count++
  }
}

console.log("students passed (score of 50 or more):", count)

console.log(" final adjusted array of scores:", arr)