// string checks specific subsstring ⭐

// let subStr = "Hello my Name is Jadav";
// let givenString = "name";

// function chekSubsString(subStr, givenString) {
//   let val = subStr.toLowerCase().includes(givenString);

//   console.log(val);
// }

// let res = chekSubsString(subStr, givenString);

// console.log(res)

// largest word in string ⭐

// let lword = "hello how dddare you";

// function getLword(lword) {
//   let val = lword.split(" ");

//   return val.sort((a,b)=>b.length - a.length)[0]

// }

// let res = getLword(lword);

// console.log(res)
// let vowel = [];

// function dsd() {
//   let ss = "EShyaman";
//   let val = ss.split("");
//   let vow = ["i", "o", "u", "a", "e"];

//   val.map((e) => {
//     vow.map((f) => {
//       if (e.toLowerCase() === f.toLowerCase()) {
//         vowel.push(e);
//       }
//     });
//   });

//   return vowel;
// }

// dsd();

// console.log(vowel.join(""));

// find duplicate

// let allval=["hello", "mind" ,"Ibm", "mind","opencv","twitter","opencv"]

// function getDuplicate(allval) {

//   console.log(allval.filter((item,i)=>allval.indexOf(item)!==i))

// }

// let res =getDuplicate(allval)

// let value="hello how are you ?"

// function firttLtr(value) {

//     let allval=(value.split(" "))

//    console.log(allval.map((e)=>e.replace(e[0],e[0].toUpperCase()) ))

// }

// firttLtr(value)

// let ss= "hello how are you?"

// console.log(ss.slice(0,1).toUpperCase()+ss.slice(1))

// let rev="hello"

// console.log(rev.split("").reverse().join(""))

// let arr = [34, 55, 20, 44, 0, 70, 90];

// function removeZero(arr) {
//     // let filteredArr = arr.filter(num => !num.toString().includes('0'));

//   let val = arr.map((item) => item.toString());
//   let numVal = val.filter((e) => !e.endsWith(0));
//   return numVal.map((item) => Number(item));
// }
// let res = removeZero(arr);

// console.log(res);

// let arr = [10, 20, 30];

// console.log(arr.reduce((a, b) => a + b / arr.length, 0));

// find the unique value among two ARRAY
// a = [10, 20, 30, 40]; //10 20
// b = [30, 40];

// function uniqueItem(arr1, arr2) {
//   return arr1.filter((e) => {
//     return !arr2.includes(e);
//   });
// }

// console.log(uniqueItem(a, b));

// take a two number compare with near then 100

// let a = 120;
// let b = 90;

// function nearValue(a, b) {
//   let a1 = Math.abs(100 - a); //
//   let a2 = Math.abs(100 - b);

//   return a1 > a2 ? b : a;
// }

// console.log(nearValue(a, b));

// let arr=["ayan","barasat","126"]

// console.log(arr.join(","))

// count occurence of each character

// let name = "hello how are you ?";
// let arr = name.split("");

// let obj = {};

// function countValue(arr) {
//   arr.map((e) => {
//     if (e !== " " && e != "?") {

//         obj[e] =(obj[e] || 0)+ 1;
//     }
//   });
// }

// let res = countValue(arr);
// console.log(obj);

// Takes a JSON string that displays the user's details.
// Converts the JSON string to a JavaScript object.
// Adds a new property isActive to the object with the value true.
// Converts the updated object back to a JSON string and returns it.
// Bonus: Test the function with this sample JSON string:

// let obj={"name": "Alice", "age": 25};
// let objStr=JSON.stringify(obj);
// let objParse=JSON.parse(objStr)
// let objStr1=JSON.stringify(objParse);

// objParse.isActive=true

// console.log(objParse)

// ----// throttling-----

// function throttle(func, limit) {
//   let inThrottle=false;

//   return (...args) => {

//     console.log(args)
//     if (!inThrottle) {
//       func(...args);

//       inThrottle = true;

//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

// function scrollHandlerFunc() {
//   console.log("Scroll event triggered");
// }

// window.addEventListener("scroll", throttle(scrollHandlerFunc, 1000));

// let obj={
//     name:"Ayan",
//     calBmi:function(){
//        this.bmi= this.name

//         return this.bmi
//     }
// }

// console.log(obj.calBmi())

// var x=99

// console.log(x===window.x)

// let name ="mitali"

// let obj={
//     name:"ayan",
//     fullname :function(){
//         console.log(`fullname is ${this.name}`)

//         const game= function(){

//             console.log(this.name)

//         }

//         game()
//     }
// }

// obj.fullname()

// var name = "mitali";

// let obj = {
//     name: "ayan",
//     fullname: function () {
//         console.log(`fullname is ${this.name}`);

//         const game = function () {
//             console.log(this.name);
//         };

//         game();
//     }
// };

// obj.fullname();

// -------------------// CONCEPT-----------

// object primitive vs reference

// const obj={
//     firstName:"Ayan"
// }

// // const deepCopyObj=Object.assign({},obj)
// const deepCopyObj={...obj}

// deepCopyObj.lastName ="Garg"

// console.log(obj)
// console.log(deepCopyObj)

// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

//  ({a,b}=obj)

// console.log(a, b);

//for-of⭐ entries

// let obj={
//     name:"ayan",
//     title:"biswas",
//     eat:["pizza","momo","bread"],
// }

// for (const [i,elm] of Object.entries(obj.eat)) {

//     console.log(+i+1,elm)

// }

//⭐object preventExtention and seal

// obj ={
//     name:"ayan"
// }

// Object.freeze(obj)

// console.log(Object.isFrozen(obj))

// ⭐ slice splice

// let str ="hello how are you "
// let strA=str.split(" ")

// strA.splice(1,1,"feb")

// console.log(strA.join(' '))

// ⭐ merge two array diff length

//INPUT

// let arr1 = [
//     { id: "abdc4051", date: "2017-01-24" },
//     { id: "abdc4052", date: "2017-01-22" },
//     { id: "abdc4052", date: "abcd" },
// ];

// let arr2 = [
//     { id: "abdc4051", name: "ab" },
//     { id: "abdc4052", name: "abc" },
// ];

// // OUTPUT

// [
//     { id: 'abdc4051', date: '2017-01-24', name: 'ab' },
//     { id: 'abdc4052', date: '2017-01-22', name: 'abc' },
//     { id: 'abdc4052', date: 'abcd' }
//   ]

// let newArry=[]

// for (let i = 0;  i< arr1.length;i ++) {

//    newArry.push({...arr1[i],...arr2[i]})
// }

// console.log(newArry)

// Closure

// function x() {
//     let a=456;

//     function y() {
//         console.log(a++)

//     }
//     y()
//     function z() {
//         console.log(a--)

//     }
//     z()
// }
// x()

// let arr=[34,25,67,43]
// function filtrArry(arr) {

// return arr>30

// }

// console.log((arr.filter(filtrArry)))

// ⭐ compare two object  (shallow clone)

// let obj1 = { name: "Ayan" };
// let obj2 = { name: "Ayan" };

// let key1 = Object.keys(obj1);
// let key2 = Object.keys(obj2);

// if (key1.length !== key2.length) {
//     console.log(false);
// } else {
//     for (const key of key1) {
//         if (!key2.includes(key)) {
//             console.log(false);
//         } else {
//             console.log(true);
//         }
//     }
// }

// ⭐ compare two object  (deep clone)

// function deepEqual(object1, object2) {

//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (let key of keys1) {
//       if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
//         return false;
//       }
//     }

//     return true;
// }

// function deepEqual(object1, object2) {
//     if (object1 === object2) {
//       return true;
//     }

//     if (
//       typeof object1 !== 'object' ||
//       object1 === null ||
//       typeof object2 !== 'object' ||
//       object2 === null
//     ) {
//       return false;
//     }

//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (let key of keys1) {
//       if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
//         return false;
//       }
//     }

//     return true;
//   }

// let object1 = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: "12345",
//   },
// };

// let object2 = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: "12345",
//   },
// };

// console.log(deepEqual(object1, object2));

// --------- THIS act different way✅⭐ --------

// var a = 10;

// function myfunc() {
//   // console.log(this.a) //window
// }
// myfunc();

// let myArrowfunc = () => {
//   // console.log(this.a) //window
// };
// myArrowfunc();

// // let name = "Ashish";

// let obj = {
//   name: "hello",

//   fullname: function () {
//     // console.log(this);
//   },
//   Arrfullname: () => {
//     // console.log(self);
//   },

//   insideFunc: function() {
//     (() => {
//     //   console.log(self); // window both arrow and function
//     })();
//   },

//   otherCondition: function() {
//      return this.name //inner obj
//   },
//   otherConditionArrow: ()=> {
//     return this.name //window name //ashish
//  },
// };

// obj.fullname();
// obj.Arrfullname();
// obj.insideFunc();
// // console.log(obj.otherCondition())
// // console.log(obj.otherConditionArrow())
// let res1=obj.otherCondition
// let res2=obj.otherConditionArrow
// // console.log(res1())
// // console.log(res2())

// ---function constructor---⭐

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let res = new Person("Ayan", 27);

// console.log(res);

// -------CALL APPLY BIND----

// let obj = {
//   game: true,
// };

// let obj2 = {
//   game: false,
//   gameEvent: function(name) {
//     console.log(`game event on: ${this.game} ${name}`);
//   },
// };

// obj2.gameEvent.call(obj,"ayan")
// // obj2.gameEvent()

//  const ws = new WeakSet();
// const obj = {};
// ws.add(obj);
// console.log(ws); // true

// A small object representing a person

// const person = {
//     name: "Ayan",
//     age: 27,
//     isStudent: false
//   };

// let {name,age,isStudent}=person

// console.log(name)

// function name(a) {

//  return   function (b) {

//        return function(c){

//                 return a+b+c
//         }
//     }

// }

// console.log(name(1)(2)(3))

// String Manipulation (reverse string, palindrome, anagram)
// Array Problems (two-sum, rotate array, merge intervals)
// Object Problems (deep clone, flatten object)
// Closures (counter, memoization)
// Promises (sequential execution, Promise.all)
// DOM Challenges (build a todo list, dynamic form)

// function mypromise() {
//   let res = new Promise((resolve, reject) => {
//     let work = true;
//     if (work) {
//       resolve("work finished");
//     } else {
//       reject("Not work finished");
//     }
//   });

//   return res;
// }

// (async () => {
//   try {
//     let result = await mypromise();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// mypromise()
//   .then((e) => console.log(e))
//   .catch((err) => console.log(err));

// function one() {
//     const promise1 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(1)
//       }, 1000)
//     })
//     return promise1
//   }
  
//   function two() {
//     const promise2 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(2)
//       }, 2000)
//     })
//     return promise2
//   }
  
//   function three() {
//     const promise3 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(3)
//       }, 3000)
//     })
//     return promise3
//   }
  
//   async function test() {
//     try {
//       // Sequentially calling api one after the other
//       const resp1 = await one()
//       const resp2 = await two()
//       const resp3 = await three()
//       const output = resp1 + resp2 + resp3
//       console.log("Response is" + output)
  
//       // Calling api's in parallel
//       const output1 = await Promise.allSettled([one(), two(), three()])
//       console.log("Response is" + JSON.stringify(output1))
//     } catch (error) {
//       console.log("Error is" + error)
//     }
//   }
  
//   test()



