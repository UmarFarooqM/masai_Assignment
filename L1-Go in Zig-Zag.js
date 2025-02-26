let amatrixwith =[[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]]

let row=amatrixwith.length
let col=amatrixwith[0].length 


let bag=""
for(let i = 0; i<row; i++){
  
  if(i%2==0){
    for(j=col-1;j>=0;j--){
      bag += amatrixwith[i][j] + " "
    }
  }
  else{
    for(j=0;j<col;j++){
      bag += amatrixwith[i][j] + " "
    }
  }

}
console.log(bag)



