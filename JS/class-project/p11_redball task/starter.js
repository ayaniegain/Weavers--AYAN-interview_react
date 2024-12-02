let arry1 = ["white", "red", "white"]
let arry2 = ["white", "white", "red", "red", "white"]
let arry3 = ["white", "white", "white", "red"]

let onlyRedBall = []


let xx=arry1.map((item)=>{
    if (item == "red") {
        return item
        // onlyRedBall.push(item)

    }
})

console.log(xx);

console.log(arry1);

// arry1.forEach((item) => {

//     if (item == "red") {

//         onlyRedBall.push(item)

//     }

// })

// arry2.forEach((item) => {

//     if (item == "red") {

//         onlyRedBall.push(item)

//     }

// })

// arry3.forEach((item) => {

//     if (item == "red") {

//         onlyRedBall.push(item)

//     }

// })

// console.log(onlyRedBall);
