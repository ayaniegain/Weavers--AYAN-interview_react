let myjson={
    "name":"Kamal",
    "age": 20,
    "address":'kolkata'

}

let jsonString= JSON.stringify(myjson) //covert json to string 
let object= JSON.parse(jsonString)  // convert string to plain object

console.log(jsonString)
console.log(object)


