// import { mockData } from './data.js';

// // let allstudent= mockData.map

// let obj={}

// obj.name="ayannn"

// let newObj= Object.assign(obj,{"key":"ayan"})

// obj.hobbies=['singing',"dancing"]

// // ✅correct used
// obj.displayName=function (){
//     console.log(this.name)
// }

// ////not used ❌
// // obj.displayName = () => {
// //     console.log(this.name);
// // };

// // console.log(newObj)
// obj.displayName()

// console.log(obj)

let cart = {
  name: "ayan",
  amout: 1200,
  address:{
    pin:700125
  }
};

// let name = "name";

let person={}
// cart.amout=person.amount
// person=cart
// person=Object.assign({},cart) 
// person={...cart} 
cart.amout=999
cart.address.pin=800900
// console.log(cart["name"]);
// console.log(cart[name]);
// console.log(person.cart?.amount);

console.log(cart)
console.log((person))
