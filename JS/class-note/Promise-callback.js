// sync code

// const processOrder = ()=>{
//     console.log(`processing order for customer 1`);

//     let currentTime = new Date().getTime();
//     while(currentTime+3000>= new Date().getTime());
//     console.log(`order processed for customer 1`)
// }

// console.log(`take order for customer 1`);
// processOrder();
// console.log(`completed order for customer 1`);

// console.log("hello");


//Async code

// const processOrder = ()=>{
//     console.log(`processing order for customer 1`);
//     setTimeout(()=>{
//         console.log(`Cocking completed`);
//     }, 3000);
//     console.log(`order processed for customer 1`);
// }

// console.log(`take order for customer 1`);
// processOrder();
// console.log(`completed order for customer 1`);
// console.log(`hello`);









// ASYNC bhv using callback

// const takeOrder = (customer,callBack)=>{
//     console.log(`take order from customer ${customer}`);
//     callBack(customer);
// }

// const processOrder =(customer,callBack)=>{
//     console.log(`processing order for ${customer}`);
    
//     setTimeout(()=>{
//         console.log(`cooking complete`);
//         console.log(`order processed for ${customer}`);
//         callBack(customer);
//     },3000);
// }

// const completeOrder = (customer)=>{
//     console.log(`complete order for ${customer}`);
// }

// takeOrder("Sahazada",(customer)=>{
//     processOrder(customer,(customer)=>{
//         completeOrder(customer);
//     });
// });

// console.log("welcome");


// Promise
// const hasClass = false;


// const isClass = new Promise((resolve, reject)=>{
//     if(!hasClass){
//         const classDetails = {
//             nm: "Javascript",
//             loc: "weavers",
//             time: "11.30 pm"
//         }
//         resolve(classDetails)
//     } else{
//         reject(new Error("already has"))
//     }
// });

// isClass.then((adrija)=>{
//     console.log(adrija);
// })
// .catch((kaifi)=>{
//     console.log(kaifi.message);
// });


// const m =  async function(params) {
//     try {
//         return await params
//     } catch (error) {
//         console.log(error)
//     }
// }

// m("data");
// console.log("hello");
// console.log(m);


// function executeTask(task, callback) {
//     console.log(`Executing ${task}`);
//     callback();
//   }
  
//   function finishTask() {
//     console.log("Task Finished");
//   }
  
//   executeTask("Task 1", finishTask);
  
  // function executeTask(task, callback) {
  //   console.log(`Executing ${task}`);
  //   return callback();
  // }
  
  // function finishTask() {
  //   console.log("Task Finished");
  // }
  
  // executeTask("Task 1", finishTask);