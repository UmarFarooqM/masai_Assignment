function system(emp){
    return emp.filter((ele)=>{
       return ele.tasksCompleted>5
    })
    .sort((a,b)=>(b.rating-a.rating))
    .filter((ele)=>{
        return (ele.rating>3)
    })
    .map((ele)=>  {
        if(ele.rating>4.5){
            return `{name:${ele.name},performance:Excellent}`
        }
        else if(ele.rating>3 && ele.rating<4.5){
            return  `{name:${ele.name},performance:Good}`
        }

    })
    
    

}


emp=[

    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]
console.log(system(emp))

    // let res = 
// let res = emp.filter(tasks=> emp.taskscompleted>5).map((ename, eper)=> emp.rating>4.5?emp.rating>3&&emp.rating<4.5:"Excellent":"Good":"Needs Improvement").sort((a,b)=> {ara.performance)