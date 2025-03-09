var tasks=[]

function managesystem(title,status="pending"){
    let add={title:title, status:status}
    tasks.push(add)
    let c=0
    // console.log(tasks)
    function innerfunction (){
        return tasks.filter((ele)=>{
        return (ele.status!="completed")})
        .sort((a,b)=>tasks.a-tasks.b)
        .map((ele)=>{
       return ({Title:ele.title, Status:ele.status})
    })
    }

    return innerfunction;
    
}
managesystem("umar", "pending")
managesystem("rohit", "completed")
managesystem("virat", "pending")
managesystem("hari", "completed")
managesystem("ram","pending")
managesystem("vamsi","completed")
// console.log(tasks)
let inner = managesystem()

console.log(inner())

// let newtask= tasks.reduce((acc,value)=> {
//     if(value.status=="pending"){
//         return c++
//     }

// },c=0)








// let arr=[
//     { title: 'umar', status: 'pending' },
//     { title: 'rohit', status: 'completed' },
//     { title: 'virat', status: 'pending' },
//     { title: 'hari', status: 'completed' }
// ]

