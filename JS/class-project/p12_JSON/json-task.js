let cartDetails = {
  User: {
    name: "Ayan Biswas",
    address: "ABC 24 street",
    phone: "9066345689",
    joinedDate: "27/04/2022",
  },
  Products: {
    items: [
      { title: "Levie's Jeans", quantity: 3, price: 1000 },
      { title: "Denim Shirt ", quantity: 2, price: 50 },
      { title: "Cold cream", quantity: 4, price: 100 },
    ],

    CartPrice: {
      discount: 10,
      amount: function () {
        return cartDetails.Products.items.reduce(
          (curr, all) => curr + all.price * all.quantity,
          0
        );
      },
      finalPrice: function () {
        let disPercentage = (100 - this.discount) / 100;
        return this.amount() >= 1000
          ? this.amount() * disPercentage
          : this.amount();
      },
    },
  },
};

// console.log("total-Price:",cartDetails?.Products?.CartPrice.amount());
// console.log("final-price",cartDetails?.Products?.CartPrice.finalPrice());

// ---step to execute----
// value to pay
//click to confirm
//process to payment... 5,4,3,2,1..

//payment successful
//thanks for shoping.
//rate out application.

const countDown = () => {
  return new Promise((resolve) => {
    const numbers = [0, 1, 2, 3, 4, 5].reverse();
    numbers.forEach((num, index) => {
      setTimeout(() => {
        console.log("process to payment...", num);
        if (num === 0) {
          resolve(); 
        }
      }, index * 800);
    });
  });
};



let paymentProcess = () => {
  return new Promise((response, reject) => {
    // countDown((num) => console.log("process to payment...",num));

    countDown().then(() => {

      
      return setTimeout(() => {
        console.log(" payment successful ✅");
        console.log(" thanks for shoping.😍");
        console.log(" rate out application.〽️");
        
        response("complete Process, EXIT");
      }, 2400);
    })
  });
};

function main() {
  console.log("value to pay ", cartDetails?.Products?.CartPrice.amount());
  console.log("added discount", cartDetails.Products.CartPrice.discount, "%");
  console.log(
    "final amount to pay",
    cartDetails?.Products?.CartPrice.finalPrice()
  );
  console.log("click to confirm 👍");

  paymentProcess().then((res) => console.log(res));
}
main();
