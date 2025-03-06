const people = [ 
    { name: "Alice", 
        address: { city: "New York", street: { name: "Broadway", number: 123 } } 
        
    }, 
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } 
        
    } 
    ];

let res=[]
for (let i of people) {
   let {name:firstname, address:{city, street:{name
   :street_name, number}}} = i
   let str=`${firstname} lives in ${city} on ${street_name}`
   res.push(str)
} 
console.log(res)
    




        
