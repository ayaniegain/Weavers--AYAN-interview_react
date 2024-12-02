// let storeName=['Amal','kamal','kunal','Ayan',"rohit",'Gourav','Nil','Lal','Bose',"Vishal"]

// for (let i = 0; i < storeName.length; i++) {
//         console.log(storeName[i])
// }

// let i=0
// let no=''

// while (i<10) {
//   no=`${no+i} \n`
//     i++
// }

// console.log(no)



let arry = [23, 56, 7, 8, 34, 99, 57];
let target = 9;

function seachValueInArray(arry, target) {
  for (i = 0; i < arry.length; i++) {
    if (arry[i] == target) {
      return "present";
    }
    return "not present";
  }
}

let result = seachValueInArray(arry, target);

console.log(result);
