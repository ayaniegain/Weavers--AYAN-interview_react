const products = [
    {
      id: 1,
      name: "Palm Green Tea Cleanser",
      category: "Skincare",
      price: 20.99,
      inStock: true,
      ingredients: ["Green Tea", "Aloe Vera", "Vitamin C"],
      reviews: [
        { user: "Alice", rating: 5, comment: "Love this cleanser!" },
        { user: "Bob", rating: 4, comment: "Very refreshing" }
      ]
    },
    {
      id: 2,
      name: "Hydrating Face Cream",
      category: "Skincare",
      price: 15.99,
      inStock: false,
      ingredients: ["Hyaluronic Acid", "Shea Butter", "Glycerin"],
      reviews: [
        { user: "Charlie", rating: 3, comment: "Good, but not for sensitive skin" },
        { user: "Dana", rating: 4, comment: "Very moisturizing!" }
      ]
    },
    {
      id: 3,
      name: "Revitalizing Serum",
      category: "Skincare",
      price: 30.49,
      inStock: true,
      ingredients: ["Vitamin E", "Niacinamide", "Peptides"],
      reviews: [
        { user: "Eve", rating: 5, comment: "My skin feels amazing!" },
        { user: "Frank", rating: 4, comment: "Great serum for daily use" }
      ]
    },
    {
      id: 4,
      name: "Soothing Face Mask",
      category: "Skincare",
      price: 25.0,
      inStock: true,
      ingredients: ["Chamomile", "Lavender", "Kaolin Clay"],
      reviews: [
        { user: "Grace", rating: 5, comment: "Super soothing and calming!" },
        { user: "Harry", rating: 5, comment: "Best mask I've ever used!" }
      ]
    }
  ];
  

  products.map((item)=>{
    let {name,ingredients,reviews}=item

    console.log(`the name is ${name} and ingredients is ${ingredients[2]} and reviews is ${reviews.map((e)=>e.comment)[1]}`)
  })

  "".pars