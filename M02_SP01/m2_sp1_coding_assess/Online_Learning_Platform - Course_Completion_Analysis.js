function online_learning(studentsProgress){
let half = studentsProgress.filter((ele)=>{
    let comp= ((ele.completedLessons/ele.totalLessons)*100) // finding percentage
    return comp > 50 // returning alleast 50 %
})
let m = half.map((ele)=>{
   let comp1= ((ele.completedLessons/ele.totalLessons)*100) // finding percentage
    ele["completionprogress"]= comp1   // adding new completionprogress the value wil be percentage
   return   ({name: ele.name, completionpercentage:ele.completionprogress}) // returning only name and percentage
})
console.log(m)
let sum=m.reduce((acc,e)=>acc+=e.completionpercentage,0) // finding sum
console.log("avarage:",Math.floor(sum/m.length)) // finding average
let fil= m.filter((ele)=>{
  return  (ele.completionpercentage > 80) // returning the more than 80% completion to get the top learners
})
return fil
}


const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];


console.log(online_learning(studentsProgress))