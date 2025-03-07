fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    init(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });

function init(sample) {
  const productsContainer = document.getElementById("products-container");

  let productHtml = sample
    .map(
      (cart) => `
        <div class="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md w-50">
          <img src="${cart.image}" alt="Product Image" class="w-full h-40 object-cover bg-gray-300 rounded-lg mb-2" />
          <h2 class="productName text-lg font-semibold">${cart.name}</h2>
          <h2 class="text-gray-600">$${cart.price}</h2>
          <button class="cart-btn mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">DETAILS</button>
        </div>
      `
    )
    .join("");

  productsContainer.innerHTML = productHtml;

//get price

let quantity=1

let res=sample.reduce((all,curr)=>{
  return all +(curr.price)

},0)
console.log(res)

console.log(sample.filter((item)=>item.category=="Electronics"))


}
