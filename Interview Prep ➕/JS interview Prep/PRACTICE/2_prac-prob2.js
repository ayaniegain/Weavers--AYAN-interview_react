//1 function allUnique(word) {
//     return new Set(word).size === word.length;
// }

// console.log(allUnique("mago"));

//7 Find a first pair whose sum is zero using indexing.md
// function firstPairZero(arr1) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//       if (arr1[i] + arr1[j] === 0) {
//         return [arr1[i], arr1[j]];
//       }
//     }
//   }
//   return null; // Return null if no pair is found
// }

// console.log(firstPairZero([3, 5, 2, -2, 5, -5]));

// 2  check two string is anargram

// function anargam(str1, str2) {
//   let nwStr1 = str1.split("").sort().join("");
//   let nwStr2 = str2.split("").sort().join("");

//   return nwStr1 === nwStr2 ? "an Anargam" : "not an Anargam";
// }

// console.log(anargam("gopal", "lapog"));

// 3 Deep clone an Object

// let obj={
//   name:"Ayan biswas",
//   address:"xyz streeet",
//   school:{classOf:["II","IV"]}
// }

// // let obj2={...obj}
// // let obj2=JSON.parse(JSON.stringify(obj))

// // let obj2=structuredClone(obj)

// obj.address="pannajhil kolkata"
// obj.school.classOf=["XI","X"]

// console.log(obj)
// console.log(obj2)

// let words = [
//   "apple",
//   "breeze",
//   "candle",
//   "drift",
//   "echo",
//   "flare",
//   "grove",
//   "hazel",
//   "ivory",
//   "jewel",
// ];
// let ltr="a"

// console.log(words.filter((e)=>e.includes(ltr)))
//3 Flatten a nested arry
// let arr = [23, 45, 12, 34, ["hello", ["hi"], "koi"], 90];

// function faltArr(arr) {
//   let newArr = [];
//   arr.forEach((e) => {
//     if (Array.isArray(e)) {
//       newArr = newArr.concat(faltArr(e));
//     } else {
//       newArr.push(e);
//     }
//   });

//   return newArr;
// }

// console.log(faltArr(arr));
// ----1 convert callback to promise

// function delayedGreeting(name, callback) {
//   setTimeout(() => {
//     if (!name) {
//       return callback(new Error("Name is required"));
//     }
//     callback(null, `Hello, ${name}!`);
//   }, 1000);
// }

// const hello = (err, message) => {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log(message);
// };

// Usage
// delayedGreeting("Alice", hello);

// ------answer 1
// function delayedGreeting1(name) {
//   return new Promise((resolve, rejected) => {
//     if (name) {
//       resolve(`Hello, ${name}!`);
//     } else {
//       rejected(new Error("Name is required"));
//     }
//   });
// }

// delayedGreeting1("Amla")
//   .then((e) => console.log(e))
//   .catch((err) => console.log(err));

// ------------2
// function fetchUser(userId, callback) {
//   setTimeout(() => {
//     if (userId <= 0) {
//       return callback(new Error("Invalid user ID"));
//     }
//     const user = { id: userId, username: `user${userId}` };
//     callback(null, user);
//   }, 1500);
// }

// // Usage
// fetchUser(1, (err, user) => {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log(user);
// });

// ----Answer

// function fetchUser1(userId) {
//  return new Promise((resolve, reject) => {

//   setTimeout(() => {

//     if (userId<=0) {
//       reject(new Error("Invalid user ID"));
//     } else {
//       const user = { id: userId, username: `user${userId}` };

//       resolve(user);
//     }
//   });
// })
// }

// fetchUser1(2)
//   .then((e) => console.log(e))
//   .catch((err) => console.log(err));

// ---------3

// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId <= 0) {
//         return reject(new Error("Invalid user ID"));
//       }
//       resolve({ id: userId, username: `user${userId}` });
//     }, 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId <= 0) {
//         return reject(new Error("Invalid user ID"));
//       }
//       resolve([`Post1 by user${userId}`, `Post2 by user${userId}`]);
//     }, 1000);
//   });
// }

// fetchUser(1).then((e)=>console.log(e)).catch((err)=>console.log(err))
// fetchPosts(1).then((e)=>console.log(e)).catch((err)=>console.log(err))

//CALL,APPLY,Bind

// let person1 = {
//   name: "Ayan",
//   salary: 1000,
//   canExpend (salary) {
//     return `${this.name} can expend ${salary}`;
//   },
// };

// let person2 = {
//   name: "Rahim",
// };

// console.log(person1.canExpend.call(person2,3000));

// Memoization

// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// let newArry = [];
// function missingArray(arr) {
//   let low = arr[0];
//   let high = arr[arr.length - 1];

//   for (let i = low; i <= high; i++) {
//     newArry.push(i);
//   }

//   return newArry.filter((e)=>!arr.includes(e))

// }

// console.log(missingArray([1, 2, 4, 5, 6]));

// function myletter(text,pos) {

//   // return text.split("").map((e)=>e.charCodeAt()).map((e)=>e+pos).map((e)=>String.fromCharCode(e)).join("")

//   return text.split("").map((e)=>String.fromCharCode(e.charCodeAt()+pos)).join("")

// }

// console.log(myletter("Abcde",4)) //defgh

// let obj={
//   name:"ayan",
//   displayStay:function(myname){
//     console.log(`my name ${myname.name} is`)
//   }
// }

// let obj2={
//   name:"Rahul"
// }

// obj.displayStay(obj2)

// let arr = ['Rajat', 'Raj']
// console.log(arr.__proto__.__proto__)

// let p1= new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("p1 success")
//     },3000)
// })

// let p2= new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("p2 success")
//     },4000)
// })

// const p3 = Promise.reject("P3 failed");

// Promise.all([p1,p2,p3])
// .then((result)=> console.log("any",result))
// .catch((err)    => console.log("any",err))

// import {Suspence,lazy} from "react"

// const Home= lazy(()=> import (./Home))
// const About= lazy(()=> import (./About))

// function App(){
//     return (
//         <Suspence fallback={<div> Loading....</div>}>
//             <About/>
//         </Suspence>
//     )
// }

// function memoization (){

//     const cache={}

//     return function (x,y){

//         const key=x+ ","+y

//         if (condition) {

//         }
//     }

// }

// let add=memoization()

// console.log(add(2,3))
// console.log(add(2,3))

// JS EXAM
// 1
// let arr=[12,45,33,56,43,44,23,90]

// function checkPositive(arr) {

//     return arr.filter((e)=>e%2==0)

// }

// let result=checkPositive(arr)

// console.log(result)

// 2

// let person = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "kitty", age: 20 },
// ];

// function oldrestPerson(person){


//     return person.filter((e)=>e.age>=30)

// }
// let result=oldrestPerson(person)

// console.log(result[0].name)


// 3

// function checkFileExtention(file){

//     return file.split('.').pop()

// }

// console.log(checkFileExtention("hello.pdf"))

// 4

// let arr=[23,45,2,56,43,21,88]

// console.log(Math.min(...arr))

// 5

// let a=5
// let b=8
// console.log([a,b]=[b,a])

// 6 

// let arr=[0,"hello",false,42,null,"world",undefined]

// console.log(arr.filter(Boolean))


// 7

// let arrs=[1,2,5,8,6,5,1,2,5]

// let res=arrs.filter((e,i)=>arrs.indexOf(e)!==i)

// console.log(res)

