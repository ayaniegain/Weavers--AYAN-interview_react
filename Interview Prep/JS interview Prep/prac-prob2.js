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

let newArry = [];
function missingArray(arr) {
  let low = arr[0];
  let high = arr[arr.length - 1];

  for (let i = low; i <= high; i++) {
    newArry.push(i);
  }

  return newArry.filter((e)=>!arr.includes(e))

}

console.log(missingArray([1, 2, 4, 5, 6]));
