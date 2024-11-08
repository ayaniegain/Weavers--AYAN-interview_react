import { mockData } from './data.js';


// let allstudent= mockData.map


let obj={}

obj.name="ayannn"

let newObj= Object.assign(obj,{"key":"ayan"})

obj.hobbies=['singing',"dancing"]

// ✅correct used
obj.displayName=function (){
    console.log(this.name)
}


////not used ❌
// obj.displayName = () => {
//     console.log(this.name);
// };


// console.log(newObj)
obj.displayName()

console.log(obj)