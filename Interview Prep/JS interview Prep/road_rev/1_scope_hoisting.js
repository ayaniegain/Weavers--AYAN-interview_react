/**
 * Demonstrates the concept of hoisting in JavaScript.
 * 
 * Hoisting is a JavaScript mechanism where variables and function declarations
 * are moved to the top of their scope before code execution. This means that
 * variable and function declarations are processed before any code is executed,
 * regardless of where they are declared in the code.
 * 
 * Key points:
 * - `var` declarations are hoisted and initialized with `undefined`.
 * - `let` and `const` declarations are hoisted but are not initialized. 
 *   Accessing them before initialization results in a `ReferenceError`.
 * - Function declarations are hoisted with their definitions.
 * 
 * This code demonstrates how `var` and `let` behave differently with hoisting.
 */
// 1
// {
//     var a=30;
// }

// console.log(a)

// 2

// function test() {
//   var a = "hello";

//   if (true) {
//     var a = "hi";

//     console.log(a);
//   }

//   console.log(a);
// }

// test();

// 3

// let a=34

// {
//     let a=77
//     console.log(a)
// }

// console.log(a)



// console.log(count)
// console.log(count2)

// var count2 =2
// let count=1


// function func() {
//     console.log(a,b,c)

//     var a=70;
//     let b=20;
//     const c=99
// }

// func()
 