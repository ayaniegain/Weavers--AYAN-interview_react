// // let obj={
// //     name:"ayan",
// //     class:"mern",
// //     other:{
// //         name2:"ayan2",
// //         class2:"mern2",

// //     }

// // }
// // let obj2={
// //     name:"ayanO",
// //     class:"mernO",
// //     other:{
// //         name2:"ayan2O",
// //         class2:"mern2O",

// //     }

// // }


// // let copyObj= JSON.parse(JSON.stringify(obj))

// // obj.name="Hari"
// // obj.other.name2="Shanti"


// // console.log(obj)
// // console.log(copyObj)




// // 8 How to rename an object key in JavaScript

// let obj3 = { a: 1, b: 2 };
// const oldKey = "a";
// const newKey = "x";

// let emntries=Object.entries(obj3)

// emntries[0][0]=newKey

// let xx=Object.fromEntries(emntries)

// obj3=xx

// console.log(obj3)

// // --alternative
// const { a: x, ...rest } = obj3;

// let ne = { x, ...rest };

// console.log(ne);

let cart=[


   {productName:"pppp",
    quant:6,
    price:565,
    isAvl:true,
    total: function(){
       return this.price*this.quant
    }

   },
   
   
   
   
]