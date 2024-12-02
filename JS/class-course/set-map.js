

// arr same data collection

// set is unique data collection.   


// let ageSet=new Set();
// ageSet.add({age:10})

// console.log(ageSet.add({age:10})
// )

// let myMap=new Map();
// myMap.set("name","ram")

// console.log(myMap)


// Array
// -->[element1,element2,element3]
// object
// --> {"id":"1","name":"Fine"}
// map
// --> {"id":"1","name":"Fine"}
// set
// --> (element1,element2,element3)

// let studentSet = new Set();
// let student1 = { "id": "1", "name": "Fine" }
// studentSet.add(student1);

// let student2 = { "id": "1", "name": "Fine" }
// studentSet.add(student2);

// console.log(studentSet);



// function functionName1(param="Hello", myFunction) {
//     console.log(param);
//     console.log(6())
// }

// const functionName2 = param => 2+4

// functionName1("New value", functionName2())
// console.log(functionName2());


// 1) three input fields (name, age, address)
// 2) Submit button to store date
// 2.1) validation [
        // a) three fields are required
        // b) name field must contain alphabet
        // c) name field must have atlist three char
        // d) age field must contain number
        // e) age field must two digits
// ]
// 3) Clear the input fields
// 4) Display button (show iff array size >= 1)
// 5) on click display button show all the data from array in a table format.

// const AGEs = [12, "34", 64, 12] ;
// console.log(AGEs);

// const student = {
//     name:"Ram",
//     age:12
// }

// let a = "10"
// let b = new String("10")
// let c = "10"
// console.log(typeof a, typeof b);
// console.log(a/c);

// let ageSet = new Set();
// ageSet.add({age:"10"});
// console.log(ageSet.add({age:"10"}));

let myMap = new Map();
// let name = "hello"
myMap.set("name","Ram")
myMap.set("age","10")
console.log(myMap);

let student = {
    name:"Ram",
    age:73
}

let student1 = {
    name:"Ram1",
    age:731
}

// student = Object.assign(student1);
student = {...student1};
student.age=99
console.log(student,student1);