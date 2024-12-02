let myArray = [10, 45, 67, 88, 10, 30];

let myStr=["hello","hi","hello","table"]

let newArry = [];

let res = myArray.map((e, index, arr) => {
  if (arr.indexOf(e) !== index) {
    newArry.push(e);
  }
});
console.log(newArry);
