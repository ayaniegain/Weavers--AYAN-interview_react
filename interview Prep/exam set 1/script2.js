2;
// let totallength = 0;

// let word = "hello my value";
// let arrWord = word.split("");

// for (const i of arrWord) {
//   totallength++;
// }

// console.log(totallength);

// 3
// let arr = [34,42,80,4];

// function checkAllPositive(arr) {
//   return arr.every((e) => e % 2 == 0);
// }

// let res = checkAllPositive(arr);

// console.log(res);

// 4

// let arr=[1,[2,3],[4,5]]

// console.log(arr.flat(Infinity))

// 5

// function checkLongestString(arr) {
//   let val = [];

//   arr.reduce((curr, all) => {
//       val.push({ name: all, val: all.length });
//     }, 0);
    
//     console.log(val)
//   longestArr = val.sort((a, b) => b.val - a.val);

//   return longestArr[0]?.name;
// }

// let arr = ["hello", "superWomen", "pokemon", "Tailwind"];

// let res = checkLongestString(arr);

// console.log(res);



// function longestString(arr) {
//     return arr.reduce((a, b) => a.length > b.length ? a : b, "");
// }
// console.log(longestString(arr))

// 6

// let arr1=[2,3,5]
// let arr2=[1,3,5]

// console.log(arr1.filter((e,i)=>arr2.indexOf(e)!==i))
// console.log(arr1.filter((e,i)=>!arr2.includes(e)))

// 7

// const fruits = ["apple", "banana", "orange"];

// function joinArray(arr, syb) {
//   return arr.join(syb);
// }

// console.log(joinArray(fruits, ", "));
// console.log(joinArray(fruits, "-"));

// 8

// let str = "my.Custom.extention.js";

// let arrStr = str.split(".");

// console.log(arrStr[arrStr.length - 1]);

// 9
//  let mystr= "i am javascript developer"

//  let nwstr=mystr.split(" ")


//  let myarr=nwstr.map((e)=>e.slice(0,1).toUpperCase()+e.slice(1)).join(" ")

//  console.log(myarr)

// 10 
// let arr =[2,4,5,7,1]

// console.log(arr.sort((a,b)=>a-b)[0])


// let arr=[45,32,56,20]

// let max=arr[0];

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i]<min) {
//         max=arr[i]
        
//     }
    
// }