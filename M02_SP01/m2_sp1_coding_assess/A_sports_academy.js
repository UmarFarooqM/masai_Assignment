const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
  
let {name, sport}= athletes[0] //access only first element in the array on name and sport
console.log(name + " plays " + sport) // concating play char in between name and sport
let { scores}= athletes[2] // using destructoring access the third element
console.log(scores[0],scores[1],scores.slice(2))
let obj={...athletes[2],...{age:27,worldchampion:true}} // using spread operator, updating his age and adding worldchampion : true
console.log(obj)  // returning the obj
// console.log([...athletes[0].scores])
let a=[]
for(i of athletes){
  // a=[...a,...i.scores]
  a.push(...i.scores) // pushing the scores of athletes in a variable using spread operator
}
console.log(a)




//   "Virat plays Cricket"
// 88, 90, [85]
// { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 27, worldChampion: true }
// [89, 75, 102, 21, 19, 25, 88, 90, 85]

