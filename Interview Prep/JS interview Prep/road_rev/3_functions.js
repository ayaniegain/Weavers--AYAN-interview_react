//1 first class function

// function displaySquare(cb) {
//   return `Square is ${cb(5)}`;
// }

// function square(num) {
//   return num * num;
// }

// console.log(displaySquare(square));

// 2 IIFE

// (()=> {
//    console.log("IIFE")
// })()

// 3 output based

// for (let i of [1,2,3,4,5]) {

//     setTimeout(()=>{
//             console.log(i)
//     },i*1000)

// }

// 4

// var x = 31;

// var score = () => {
//   console.log(x);
// };

// var x = 21;
// score();

// 5 Spread and Rest Operator

// Spread Operator: Used to expand elements of an array or object into individual elements.
// Rest Operator: Used to collect multiple elements into a single array or parameter.

// 6 callback

// When a function passes another function as an argument and the inner function is invoked only after the outer function gets executed, it's called a callback function.

//7 Arrow function vs normal function
// - not return
// - this key word in object undefined {}
// - normal function  arguments work
// - syntax diff

// var a=20

// function name() {
//     let self=this.a
// function name1() {
//     console.log(self)
// }
// name1()
// }

// name()

// var a = 20;

// let name = () => {
//   let self = this.a;
//   let name1 = () => {
//     console.log(self);
//   };
//   name1();
// };

// name();

// function check() {
//   console.log(arguments);
// }

// check([1, 23, 4, 4]);


// const id = Symbol("userId");


// const user = {
//   name: "Ayan",
//   [id]: 101  // Symbol as key
// };

// console.log(user[id]);     // 101
// console.log(Object.keys(user)); // ["name"] — Symbol key is hidden

// const a = Symbol("id");
// const b = Symbol("id");


// console.log(a,b)





//  (()=>"first")()


// let vb=()=> {
    
//     return("vb")
// }

// console.log(vb())