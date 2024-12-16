// import { mockData } from './data.js';

// // let allstudent= mockData.map
// ------------------------ method push in object
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

// let cart = {
//   name: "ayan",
//   amout: 1200,
//   address:{
//     pin:700125
//   }
// };

// let cs={...cart}
// let {name}=cart
// let xx=[1,2,4]
// const[x,y,z]=[...xx]

// console.log(x)

// console.log(name)

// let name = "name";

// let person={}
// cart.amout=person.amount
// person=cart
// cart=person
// person=Object.assign({},cart)
// person={...cart}
// person.amout=999
// cart.address.pin=800900
// console.log(cart["name"]);
// console.log(cart[name]);
// console.log(cart.address.pin);

// console.log(cart)
// console.log(person)

// let copy ={...cart}

// console.log(copy)
// console.log(cart)
// -----------------------------------
// let cart1 = {
//   person: "dipak adhikari",
//   fan:  {
//     one: "game",
//     two: "cricket",
//     fullname: function () {
//       return (this.one + this.two);
//     },
//   },
// };

// // let cart2 = { ...cart1 }
// let cart2 = JSON.parse(JSON.stringify(cart1));
// cart1.fan.fullname();

// console.log(typeof cart1.fan.fullname()
// )

// cart1.person = "Virat";
// cart1.fan.one = "Rahul";

// console.log(cart1);
// console.log(cart2);
// ---------------------------------☑️
// JSON.parse() => This method takes a JSON string and transforms it into a JavaScript object.
// JSON.stringify() => This method converts a JavaScript value (JSON object) to a JSON string representation.

// let cart1 = {
//   person: "dipak adhikari",
// };

// let resultString = JSON.stringify(cart1);

// console.log(JSON.parse(resultString));

// ------------------task

// Object

let cart =/*2114 */ {
  items:[],
  totalAmount:1500,
  netAmount:1200,
  address:/*512*/{
      pin:700006
  }
}
// let person /*2114 */ = cart
// let person /*2116 */ = {...cart}
let person= JSON.parse(JSON.stringify(cart))

cart.totalAmount = 500
cart.address.pin = 700009
cart.items.push("hello")

console.log(cart);
console.log(person);