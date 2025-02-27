function max(num1,num2,num3){
    let max1 = (num1>num2) ? num1: num2;
    let max2 = (max1>num3)  ? max1 : num3 ;
    
    return max2
    }
    num1 = parseInt(prompt("Enter num1: "))
    num2 = parseInt(prompt("Enter num2: "))
    num3 = parseInt(prompt("Enter num3: "))
    
    console.log(max(num1,num2,num3))