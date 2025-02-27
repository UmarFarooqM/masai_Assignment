let std ={
    umar:85,
    rohit: 92,
    sai:67,
    anji:45,
    chand:60
    
    }
    
    for(let marks in std){
    if(std[marks] >= 90){
    console.log(`${marks} - A`)
    }
    else if( std[marks]>= 80 && std[marks]<90){
        console.log(`${marks} - B`)
    }
    else if( std[marks]>= 70 && std[marks]<80){
        console.log(`${marks} - C`)
    }
    else if( std[marks]>= 60 && std[marks]<70){
        console.log(`${marks} - D`)
    }
    else if(std[marks]<60){
        console.log(`${marks} - F`)
    }
    else{
        console.log("Invalid")
    }
    }    