const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

const updates2 = { age: 30, address: { city: "San Francisco", zipcode: "94109", country: "USA" } };

const add_city = {...updates, ...updates2}

const merged = {...profile, ...add_city}

console.log(merged)