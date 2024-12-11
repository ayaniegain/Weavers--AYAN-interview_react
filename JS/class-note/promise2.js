let array = [1, 4, 7, 2, 9, 10]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (const element of array) {
//     console.log(element);
// }

// array.map((element)=>{
//     console.log(element);
// })
console.log("init")

function blockingCode() {
    return new Promise((resolve, reject) => {
        console.log("1")
        setTimeout(() => {
            for (let index = 0; index < 4; index++) {
                console.log("...");
                resolve("res val");
            }
        }, 100);

        console.log("2")
    })
}

console.log("demo")


async function main() {
    console.log("Start")
    let res=await blockingCode()

    console.log("Completed")
    console.log(res)
}
console.log("end")

main();