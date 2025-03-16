import React, { useEffect } from "react";

function One() {
  let userInput = "null";
  let defaultValue = "hello";

  let data = [
    {
      name: "SmartWatch Pro",
      price: 4999,
      categories: ["Electronics", "Wearable Tech"],
    },
    {
      name: "Bamboo Coffee Mug",
      price: 799,
      categories: ["Home & Kitchen", "Eco-Friendly"],
    },
    {
      name: "Noise Cancelling Headphones",
      price: 3499,
      categories: ["Electronics", "Audio"],
    },
    {
      name: "Running Shoes Xtreme",
      price: 2999,
      categories: ["Footwear", "Sports"],
    },
    {
      name: "Palm Green Tea Cleanser",
      price: 599,
      categories: ["Beauty & Personal Care"],
    },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <p className="px-4 border-teal-700 m-2 border-2 w-1/2">
            I have list of Product- {item.name} & ${item.price / 100}
          </p>
        </div>
      ))}
      <div>
        {data
          .map((item) => item.categories)
          .filter((e) => e.includes("Electronics"))}
      </div>

      <div>
        {" "}
        total Price:
        {data.reduce((a, b) => {
          return b.price + a;
        }, 0)}
      </div>

      <div>
        discounted item price:
        {/* {
          data.map((e,i)=>{
            return (
              e.price>=1000 ? {...e,"discounted_price": +e.price*0.9}: e
            )
          })
        } */}
      </div>

      <div>
        <h2>optional chaning</h2>

        {data && data[1]?.name}
      </div>

      <div>
        --------nullish
        <h2>{userInput ?? defaultValue}</h2>
      </div>
    </div>
  );
}

export default One;
// data.map((item)=>item.categories).filter((e)=>e.includes("Electronics"))
