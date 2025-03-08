function transform(product){
    return product.map((ele)=>{
        if (ele.price>50){
            return `${ele.name} is above $50`
        }
        else{
            return `${ele.name} is below $50`
        }
    })
}
product= [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
console.log(transform(product))


// Laptop is above $50

// Mouse is below $50