// function name() {
//   var x = 20;

//   function displyno() {
//    return (x);
//   }

//   return displyno();
// }

// console.log(name())

// let action="at Risk"

// function name() {
//   var x = 20;

//   return function displyno() {
//     return x +"% " +action;
//   };
// }

// console.log(name()());

//function Currying 👍

// function outer1(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(outer1(1)(2)(3));

function createBase(a) {
  return function (b) {
    return a + b;
  };
}

var addsix = createBase(6);
console.log(addsix(10));// 16
console.log(addsix(21));//27

function find() {
  let a = [];

  for (let i = 0; i < 100000; i++) {
      a[i] = i * i;
    }

   return function(index){
       console.log(a[index]);

   }
}
let closure=find();

console.time("6");
closure(6)
console.timeEnd("6");

console.time("50");
closure(50)
console.timeEnd("50");

// function a() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }

//     inner(i);
//   }
// }
// a();

// -----------private counter-------

// function counter() {
//   let count = 0;

//   function addcount(add) {
//     count = count + add;
//   }

//   function rectrive() {
//     return "count", count;
//   }

//   return {
//     addcount,
//     rectrive,
//   };
// }

// const c = counter();

// c.addcount(5);
// c.addcount(15);
// console.log(c.rectrive());

// --------module pattern---------

// function myModule() {
//   function outerModule() {
//     console.log("outer");
//   }

//   return function innerModule() {
//     console.log("inner");

//     return outerModule;
//   };
// }

// let M = myModule();

// M()();
