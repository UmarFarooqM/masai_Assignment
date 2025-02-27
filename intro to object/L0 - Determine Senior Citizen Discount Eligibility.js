function discount_ele(age){
    let valid = (age>=60)?"Eligible for senior Discoount": (age<60 && age>=1) ? "Not Eligible for Senior Discount":"Invalid age"
    return valid 
    
}
let age = parseInt(prompt("enter the age:"))
console.log(discount_ele(age))