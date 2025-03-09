function zero(n){
  
    let sqmat =[
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]
    
    let row= sqmat.length
    let col = sqmat[0].length
    
    let bag=""
    for(let i = row-1; i>=0; i--){
      bag += sqmat[i][0] + " "
    }
    // console.log(bag)
    for(let j=1; j<col;j++){
      bag += sqmat[0][j] + " "
    }
                  
    for(let i=1; i<row; i++ ){
      bag+= sqmat[i][col-1] + " "
    }
    for(let j=col-2; j>=1;j--){
      bag+= sqmat[2][j] + " "
    }
    console.log(bag)
  }
  zero(3)