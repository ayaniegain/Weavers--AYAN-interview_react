const listOfArray = [1, 2, 3, 4];

const arrayOfObjects = [
  { id: 1, name: "Alice", age: 25, rollno: 101, marks: 80 },
  { id: 2, name: "Bob", age: 30, rollno: 102, marks: 69 },
  { id: 3, name: "Charlie", age: 35, rollno: 103, marks: 35 },
  { id: 4, name: "Diana", age: 28, rollno: 104, marks: 55 },
];

let totalMarks = arrayOfObjects
  .map((e) =>
    e.marks < 60 ? { ...e, marks: e.marks + 20 } : { ...e, marks: e.marks }
  )
  .filter((e) => e.marks > 60)
  .reduce((int, all) => int + all.marks, 0);

console.log(totalMarks); 

// let res = listOfArray.map((e) => e * 3);
// let resFilterValues = listOfArray.filter((e) => e>2);

// let gtrThandTotal=arrayOfObjects.filter((person)=>person.age>=30)

// let totalAge = arrayOfObjects.reduce((init, all, i, arr) => {
//   return all.age + init;
// }, 0);

// console.log(totalAge);
