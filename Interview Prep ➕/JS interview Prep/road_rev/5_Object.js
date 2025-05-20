// const sampleObject = {
//     name: "John Doe",
//     age: 30,
//     isEmployed: true,
//     skills: ["JavaScript", "HTML", "CSS"],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         zipCode: "10001"
//     },
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// sampleObject.greet();
// ---
// const property = "firstName";
// const name = "Piysh Agarwal";

// const user = {
//   [property]: name,
// };

// console.log(user);
// ----

const simpleObject = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25,
};

// for(let i in simpleObject){
//     console.log(i)
// }

// let res= Object.keys(simpleObject)

// console.log(res)

// let xx= Object.assign({"hello":5})

// xx.hi="good"

// console.log(xx)

// let cd= Object.entries(simpleObject)

// console.log(cd)

// for (const key of Object.entries(simpleObject)) {
//    console.log(key)
// }

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };
// multiplyByTwo(nums)

// function multiplyByTwo(nums) {
//   for (i in nums) {
//     // if (i == "a" || i == "b") {
//     if (typeof (nums[i])==="number") {
//       nums[i] = nums[i] * 2;
//     }
//   }
// }
// console.log(nums)

// ------3

// const a={}

// const b={key:"b"}
// const c={key:"c"}

// a[b]=123
// a[c]=456

// console.log(a[b])

// const obj = {
//     firstName: "Alice",
//     lastName: "Smith",
//     age: 25,
//   };

// let obj1=(JSON.stringify(obj))
// console.log(JSON.parse(obj1))
// let str = "hello";

// let arrStr=[..."hello"]
// let arrS = str.split("l").join("");

// console.log(arrStr)
// console.log(arrS);

// --------4

// const obj = {
//     firstName: "Alice",
//     lastName: "Smith",
//     age: 25,
//   };

// let obj1=(JSON.stringify(obj,['age']))

// console.log(obj1)

// -------5

// const obj = {
//     firstName: "Alice",
//     lastName: "Smith",
//     age: 25,

//     fullname(){
//             return (this.firstName + this.lastName)
//     },

//     age:()=>( this.age)

//   };

//   console.log(obj.fullname())
//   console.log(obj.age())

// ---------6

// const nestedObject = {
//   person: {
//     name: "John Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       zipCode: "10001",
//     },
//     hobbies: ["reading", "traveling", "coding"],
//   },
// };

// const {person:{address:{zipCode},hobbies}}=nestedObject

// let val = nestedObject.person.address;

// for (const i in val) {
//   if (i === "zipCode") {
//     val[i] = val[i] * 7;
//   }
// }

// console.log(nestedObject);

// -----------7

// let c={
//     greeting:"hello"
// }
// let d


// d=c

// d=Object.assign({},c)
// d={...c}
// d=JSON.parse(JSON.stringify(c))
// d=structuredClone(c)


// c.greeting="hi"

// console.log(d)

// --------------8
// let person = { name: "Lydia" };
// const members = [person];
// person = null;
// console.log(members);

// ------------/9


// const value = { number: 10}

//     const multiply = (x = { ...value }) => {
//     console.log((x.number *= 2));
    
//     }
    
//     multiply(); // 20
    
//     multiply(); // 20
    
//     multiply(value); // 20
    
//     multiply(value); // 40

// -----------10


// function myObj(person) {

//     person.name="bomb"

//      person={
//         name:"gun",
//         age:40
//     }

//     return person
// }

// let person={
//     name:"kuku",
//     age:39
// }

// let per1=(myObj(person))

// console.log(per1)
// console.log(person)

