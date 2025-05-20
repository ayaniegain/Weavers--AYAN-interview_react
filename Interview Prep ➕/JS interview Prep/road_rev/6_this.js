
// ---------1
// this.name="Ayan"

let user = {
  name: "Pyuish",
  age: 23,
  getDetails:  ()=> {
    (() => {
      console.log(this.name);
    })();
  },
};

user.getDetails();

// ------------2

// const user = {
//     firstName: "Piyush!",
//     getName() {
//     const firstName = "Piyush Agarwall!";
//     return this.firstName;
    
//     }
// }
//     console. log(user.getName()); // What is logged?

// --------3


// function makeUser(){

//     return{
//         name:"John",
//         ref(){
//             return this
//         }
//     }

// }


// let user= makeUser()

// console.log(user.ref().name)

// let obj=[]

// let dd= Object.isArray(arr)


// console.log(dd)


// let obj="2"

// let obj1=new String(2)


// console.log(obj==obj1)


// let arr= [34,44,234,4242,4242]

// let xx=arr.splice(1, 2);

// console.log(xx)
// console.log(arr)
