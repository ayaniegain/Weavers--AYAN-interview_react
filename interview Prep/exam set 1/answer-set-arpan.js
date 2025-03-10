// 1
// function allSum(args){

//   return args.reduce((curr,all)=>{

//       return curr+all

//   },0)

// }
// console.log( allSum([1, 2, 3, 4, 5]))

//2 function largestSmallest(arr){

// let largeNo;
// let smallNo ;

// let sorted= arr.sort((a,b)=>b-a)

// largeNo=sorted[0]
// smallNo=sorted[sorted.length-1]

// return {largeNo,smallNo}

// }
// let {largeNo,smallNo}=largestSmallest([1, 2, 3, 4, 5])
// console.log(smallNo)
// console.log(largeNo)

// 3
// function ReverseArray(arr){

//     let revNo=[]

//     for(let i=arr.length-1; i>=0;i-- ){

//         revNo.push(arr[i])
//     }

//   return revNo;

// }
// console.log(ReverseArray([1, 2, 3, 4, 5]))
// 4

// function removeDuplicate(arr){

//     //   return  arr.filter((item,i)=>arr.indexOf(item)!==i)

//       let val=[...new Set(arr)]

//       console.log(val)

//      }
//     console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]))

// function missingNumber(arr) {
//   let storedArray = [];
//   for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//     storedArray.push(i);
//   }

//   let notPresent = [];

//   for (let store of storedArray) {
//     if (!arr.includes(store)) {
//       console.log(store);

//       notPresent.push(store);
//     }
//   }
//   return notPresent;
// }
// let res = missingNumber([1, 2, 4, 5, 6]);

// console.log(res);

// function missingNumber(arr){
//     let storedArray=[]
// for(let i=arr[0];i<=arr[arr.length-1];i++){
//        storedArray.push(i)
// }

//     let notPresent=[]

//  for(let elm of storedArray){
//   if(!arr.includes(elm)){

//       notPresent.push(elm)
//   }

//  }
//     return notPresent.join("")

// }
// let res=missingNumber([1, 2, 4, 5, 6])

// console.log(res)

// function flatenNested(arr){

//     return arr.flat(Infinity)

// }
// let res=flatenNested([1, [2, [3, 4], 5]])

// console.log(res)

// ---two array when common incluses
// ---- when not commmon if first start first if second start arr2

//10  Find common elements between two arrays.
// Input: [1, 2, 3, 4], [3, 4, 5, 6] Output: [3, 4]

// function commonEleemts(arr1,arrr2){

//     return arr1.filter((item)=> arrr2.includes(item))

// }

// console.log(commonEleemts([1, 2, 3, 4], [3, 4, 5, 6]))

// 11/

// function findIntersection(arr1,arr2){
//     let common=[]
//     for(let i=0; i<=arr1.length-1;i++){
//     for(let j=0; j<=arr1.length-1;j++){

//         if(arr1[i]==arr2[j]){

//            common.push(arr2[j])

//         }
//         }

//     }
//     return common;

// }
// console.log(findIntersection([1, 2, 3], [2, 3, 4]))

// 12

// function occurence(arr){

//     let obj={}

//     for(let elm of arr){

//         obj[elm]=obj[elm]+1 ||1

//     }

//     return obj

// }

// console.log(occurence( [1,1, 2, 2, 3, 3, 3,4,67,44,56,67]))

// 13

// function findLongestElm(arr){
//     let longest=[]

//  return arr.reduce((curr,all)=>{

//      return (curr.length>all.length) ?curr :all

//  },"")

// }

// console.log( findLongestElm(['aloiiuie', 'banana', 'kiwi']))

// 14
// function rotateKth(arr,k){

//     let i=1
//     while(i<=k){

//     let elm=arr.pop()

//     let att=arr.unshift(elm)
//         i++
//     }

//     return arr

//   }
//   console.log(rotateKth([1,2,3,4,5],3))

// Q15: Convert an array of objects into a single object (key-value pairs).

// function singleObj(arr) {
//   let obj = {};

//   arr.map((e) => {
//     for (let elm in e) {
//       obj[elm] = [];
//     }
//   });

//   arr.map((e) => {
//     if (e.id) {
//       obj.id.push(e.id);
//     }
//     if (e.name) {
//       obj.name.push(e.name);
//     }
//   });

//   return obj;
// }

// const arr = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// console.log(singleObj(arr));

// 16
// function findUnion(arr1,arr2){

//     let x= arr1.filter((e)=>!arr2.includes(e) )
//     let y= arr1.filter((e)=>arr2.includes(e) )

//     let singleArray=[...x,...y]

// console.log(singleArray)
//     // console.log([...new Set(singleArray)])

// }

// let res=findUnion([1,2,3,4,5],[4,5])

// 17 sorting a array without fix methode

// function sortedArray(arr){

//     len=arr.length

//     for(i=0;i<=len-1;i++){
//     for(j=0;j<=len-1;j++){

//         if(arr[j]>arr[j+1]){

//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]

//         }

//     }
//     }

//     return arr

// }
// console.log( sortedArray([23,45,22,8,65,21]))
// function mostFrequentElement(arr) {
//   let obj = {};

//   let maxCount = 0;
//   let mostFrequent = null;

//   for (let elm of arr) {
//     obj[elm] = obj[elm] + 1 || 1;

//     if (obj[elm] > maxCount) {
//       maxCount = obj[elm];

//       mostFrequent = elm;
//     }
//   }

//  return mostFrequent
// }
// console.log(mostFrequentElement([1,1,  1 ,3,2,2,3]));

// 20

// function pairofSum(array, given) {
//   let duplicateAray = [...array];

//   let match = [];
//   let seenPairs = new Set();

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < duplicateAray.length; j++) {
//       if (array[i] + duplicateAray[j] === given) {

//         let matchPair=[array[i],duplicateAray[j]]

//         let pairKey = matchPair.toString();
//         if (!seenPairs.has(pairKey)) {
//           match.push(matchPair);
//           seenPairs.add(pairKey);
//         }
//       }
//     }
//   }

//   return seenPairs
// }

// console.log(pairofSum([1, 5, 7, -1, 5], 6));

// 21 //22

// function checkPallen(arr) {
//   let value = arr.split("").reverse().join("");

//   return arr === value ? "pallendrome" : "not a pallendrome";
// }
// let res = checkPallen("racecar");
// console.log(res);

// 23

// function countlength(text) {
// let count=0
//     let arr=text.split("")

//     for (const elm of arr) {
//         count+=1
//     }
//     return count
// }

// console.log(countlength("herllo"))

// 24

// function countVowel(text) {
//   let obj = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0,
//   };
//   let arr = text.split("");

//   for (let objElm in obj) {
//     for (const arrElm of arr) {
//       if (objElm === arrElm) {
//         obj[objElm] = obj[objElm] + 1 || 1;
//       }
//     }
//   }

//   return obj
// }

// console.log(countVowel("hello how are you?"));

// 27

// function removeDuplicate(text){

//     let arr=text.split("")

//   return  arr.filter((item,i)=>arr.indexOf(item)==i)

// }

// console.log(removeDuplicate("hello don ")) //hedn
// 25
// function nonrepetationChar(text){
//     let arr=text.split("")
//    let val= arr.filter((e,i)=>arr.indexOf(e)!==i)

//   return arr.filter((e)=>!val.includes(e)).join("")

// }

// console.log(nonrepetationChar("hello don ")) //hedn

// 26

// function capitalLetter(text) {
//   let arr1 = text.trim();
//   let arr = arr1.split(" ");

//   // let store=[]

//   return arr
//     .map((item) => {
//       return item.slice(0, 1).toUpperCase() + item.slice(1);
//     })
//     .join(" ");

//   // return store.join(" ")
// }

// console.log(capitalLetter(" hello how are you?"));

// 28

// function anagramCheck(text1, text2) {
//   let arr1 = text1.split("").sort().join("");
//   let arr2 = text2.split("").sort().join("");

//   if (arr1===arr2) {
//     return true
//   }else{
//     return false
//   }

 
// }

// console.log(anagramCheck("silent", "listen"));


// 29

// function longestString(text){
//     let arr=text.split(" ")

//  return   arr.reduce((a,b)=>a.length>b.length ? a:b,"")




// }

// console.log(longestString("hello how are you"))

// 30

// function chamalCase(text){
//     let arr=text.split(" ")
//     return arr.map((e)=>e.charAt(0).toUpperCase()+e.slice(1)).join("")

// }

// console.log(chamalCase("i got intern at geeksforgeeks"))

// function extractExtention(text){
//     let arr=text.split(".")
//     let text1=arr.pop()
//     console.log(text1)

// }
// console.log(extractExtention("hello.txt"))

// ----------Obj

// 31

// let obj={a: 1, b: 2, c: 3};

// for (const key of Object.entries(obj)) {

//     console.log(key)
    
// }
// 32
// let obj1={a: 1, b: 2, c: 3};
// let obj2={d: 6, e: 5, f: 89};

// let final={...obj1,...obj2}

// console.log(final)

// 34

let obj1={a: 1, b: 2, c: 3};


