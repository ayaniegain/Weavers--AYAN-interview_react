//1 string to object
// let str='{"name":"Ayan","age":29,"skills":["React","Node.js"]}';
// let myObj=JSON.parse(str)
// console.log(myObj)

//2 chek two string Anargrams

// let str1 = "listen";
// let str2 = "silent";
// let arr1=str1.split("")
// let arr2=str2.split("")

// function checkAnargram(str1,str2) {
//     let val1=str1.split("").sort().join("")
//     let val2=str2.split("").sort().join("")
//     if (val1==val2) {
//         return true
//     }else{
//         return false
//     }

// }

// console.log(checkAnargram(str,mystr))

//3 longest prefix⭐

// let commonElem=[]

// function lcp(arr) {

//     let first=arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr.substring(0, arr[i]))
//     }

// }

// // Test cases
// ⭐Write a function lcp(arr) that takes an array of strings and returns the longest common prefix among them. If there is no common prefix, return an empty string ("").
// console.log(lcp(['flower', 'flag', 'flutter'])); // Test Case 1 should return 'fl'
// // console.log(lcp(['racedog', 'car', 'racecar'])); // Test Case 2 should return ''

// string has all unique character
// closure;
// function outer() {
//   let x = 0;

//   return function inner() {
//     return x++;
//   };
// }

// let res = outer();

// console.log(res());
// console.log(res());
// console.log(res());

//this
// console.log(this)

// let obj={
//     name1:"Ayan",
//     canRun:function(){
//         return (`${this.name1} can run 12km/h`)
//     },
// canSwim:()=>{
//     console.log(`${this.name1} can not swim`)
//     console.log(`${this.name1} only this ${this}`)
// },

// }
// let res=(obj.canRun)
// console.log(res())

// console.log(obj)
// obj.canSwim()

// console.log(obj)

// function Game(name){

//     this.fullname=name

//     console.log(this.fullname)

// }

// let res= new Game("Andy")

// console.log(res.fullname)

// hoisting

// var a=10;
// console.log(a)

// console.log(ss())
// let ss=()=>{
//     return "hello";
// }

// function fetchData(cb){

//     setTimeout(() => {
//         cb("data fetch")
//     }, 1000);

// }

// fetchData((data)=>{
// console.log(data)
// })

// function fetchData() {
//  return new Promise((res,rej) => {
//     setTimeout(()=>{
//         console.log("set hello ")

//     },0)
//     res( "hello ")
//   });
// }
// let xx=fetchData()
// xx.then((e)=>console.log(e))

// -------------------// PROBLEM-----------

//⭐
// const sum = (a, b) => (b !== undefined ? a + b : (b) => sum(a + b))
// console.log(sum(2, 3))
// console.log(sum(2)(3))

//⭐

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button')
//     btn.appendChild(document.createTextNode('Button ' + i))
//     btn.addEventListener('click', function () {
//       console.log(i)
//     })
//     document.body.appendChild(btn)
//   }
// // ⭐  key take way

// var arr1 = 'john'.split('') // [j,o,h,n]
// var arr2 = arr1.reverse()
// var arr3 = 'jones'.split('')

// arr2.push(arr3)
// arr2=[...arr2,arr3]

// console.log('array 1: length=' + arr1.length + ' last=' + arr1.slice(-1))
// console.log('array 2: length=' + arr2.length + ' last=' + arr2.slice(-1))
// ⭐

// console.log(1 + '2' + '2')  //122
// console.log(1 + +'2' + '2') //32
// console.log(1 + -'1' + '2')//02
// console.log(+'1' + '1' + '2') // 112
// console.log('A' - 'B' + '2') //NAN2
// console.log('A' - 'B' + 2)  // NAN

// ⭐
// var _name="rohit"
// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function () {
//       return this._name
//     },
//   }

//   var stoleSecretIdentity = hero.getSecretIdentity

//   console.log(stoleSecretIdentity())
//   console.log(hero.getSecretIdentity())

// ⭐ 12
// var length = 10;
// function fn() {
//   console.log(this.length);
// }

// var obj = {
//   length: 5,
//   method: function (fn) {
//     fn();

//     arguments[0]();
//   },
// };

// obj.method(fn, 2);

// -----PROBLEM------
// 1.md
// function memoize(func) {

//     const cache = {};

//     return function (...args) {
//         const key = JSON.stringify(args);

//         if (cache[key]) {
//             return cache[key];
//         } else {
//             const result = func.apply(this, args);

//             cache[key] = result;
//             return result;
//         }
//     };

// }

// const fn = (a, b) => a + b;
// const memoizedFn = memoize(fn);

// console.log(memoizedFn(2, 3));

// 5





function customSetInterval(...args){

    console.log(args)

}

const cancel = customSetInterval(() => console.log("Hello"), 1000);

setTimeout(cancel, 5000);
