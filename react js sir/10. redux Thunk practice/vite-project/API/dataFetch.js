let productAPI = "https://dummyjson.com/products";

async function getURL(url) {
  try {
    let response = await fetch(url);
    let result = await response.json();

    if (result.products) {
      return result?.products;
    } else {
      return result;
    }
  } catch (error) {
    console.log("error to fetch the data ");
  }
}

export async function getAllProducts() {
  return await getURL(productAPI);
}

export async function productDetails(productId) {
  return await getURL(`${productAPI}/${productId}`, true);
}

let API = {
  getAllProducts,
  productDetails,
};

export default API;
