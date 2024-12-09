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
        return  cartDetails.Products.items.reduce((curr,all)=>(curr+all.price*all.quantity),0)
      },
      finalPrice: function () {
        let disPercentage=(100-this.discount)/100
        return this.amount()>=1000? (this.amount()*disPercentage) :this.amount()
      },
    },
  },
};

console.log("total-Price:",cartDetails?.Products?.CartPrice.amount());
console.log("final-price",cartDetails?.Products?.CartPrice.finalPrice());


// const cartDetails2 = {
//   user: {
//     name: "Ayan Biswas",
//     address: "ABC 24 street",
//     phone: "9066345689",
//     joinedDate: "27/04/2022",
//   },
//   products: [
//     { title: "Levie's Jeans", quantity: 3, price: 1500 },
//     { title: "Denim Shirt", quantity: 2, price: 1000 },
//     { title: "Cold cream", quantity: 4, price: 100 },
//     { title: "Maflar", quantity: 5, price: 500 },
//   ],
//   discountPercentage: 10,
// };

// const calculateTotalAmount = (products) =>
//   products.reduce((total, item) => total + item.price * item.quantity, 0);

// const calculateFinalPrice = (totalAmount, discountPercentage) => {
//   const discountFactor = (100 - discountPercentage) / 100;
//   return totalAmount >= 10000 ? totalAmount * discountFactor : totalAmount;
// };

// const totalAmount = calculateTotalAmount(cartDetails2.products);
// const finalPrice = calculateFinalPrice(totalAmount, cartDetails2.discountPercentage);

// console.log("Total Amount:", totalAmount);
// console.log("Final Price:", finalPrice);
