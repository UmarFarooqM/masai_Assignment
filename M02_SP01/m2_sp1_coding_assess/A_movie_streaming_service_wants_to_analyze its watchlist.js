function highly_rated_mov(movies){

    let result = movies.map((ele)=>{  // The conversion of minutes to hours assigned to result variable
        ele.watchTime = Math.floor(ele.watchTime/60)  // I have converted watchTime from minutes to hours and updated to the watchTime property
       return  ele   
   })
 let fil= result.filter((ele)=> { // access the result variable and applying filter which the movies with a rating above 7.5
        return (ele.rating > 7.5)
    }) 
    
    let re= fil.reduce((total, cur)=>{ // accessed the fil variable and find the sum of total watch time by using reduce
        return total + cur.watchTime
    },0)
    console.log(re)
 let maps= fil.map((ele)=>{
       return ({ Title:ele.title, time_watched : ele.watchTime}) // accessing only title and time_watched
   } )
return maps
           
}




const movies = [
   { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
   { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
   { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
   { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
   { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
 ];
 

console.log(highly_rated_mov(movies))