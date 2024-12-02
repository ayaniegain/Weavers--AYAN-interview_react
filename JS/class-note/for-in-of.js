
// let arr=[34,56,32,78,99];

// for(let i of arr){
//     console.log(i)
// }
 
let obj ={
    name:"Ayan",
    roll:123,
    address:'barasat'
} 

let arr2=[45,67,23,67]

for(let value in arr2){
    console.log(arr2[value])
    
}

for(let key in obj){
    console.log(`key is ${key} value is ${obj[key]}`);
}
