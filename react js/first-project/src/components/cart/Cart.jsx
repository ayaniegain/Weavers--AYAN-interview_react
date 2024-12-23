import React from "react";
import "./Cart.css";

function Cart({ laptops }) {
  // const {
  //   id,
  //   name,
  //   brand,
  //   price,
  //   stock,
  //   rating,
  //   description,
  //   specifications: {
  //     Processor,
  //     RAM,
  //     Storage,
  //     Display,
  //     Graphics,
  //     Battery,
  //     Weight,
  //   },
  //   images,
  // } = laptops;

  // console.log(images)

  return (
    <main>
{
  laptops.map((item)=>{

     const {
    id,
    name,
    brand,
    price,
    stock,
    rating,
    reviewCount,
    description,
    specifications: {
      Processor,
      RAM,
      Storage,
      Display,
      Graphics,
      Battery,
      Weight,
    },
    images,
  } = item;

  
  

   return  (  <div className="cart-container" key={id}>
        <section className="img">
          <img src={images[0]} alt={name} />
        </section>
        <section className="details">
          <h2 className="title">{name} || {description}</h2>
          <div className="rating-details">
            <span className="rating">{rating} Ratings </span>
            <span className="review">& {reviewCount } Reviews</span>
          </div>
          <div className="specifications">
            <ul>
              <li>Processor: {Processor}</li>
              <li>RAM:{RAM}</li>
              <li>Storage:{Storage}</li>
              <li>Display:{Display}</li>
              <li>Graphics:{Graphics}</li>
              <li>Battery:{Battery}</li>
              <li>Weight:{Weight}</li>
            </ul>
          </div>
        </section>
        <section className="price">
          <p className="price">₹ {price}</p>
          <p>Top discount of the sale</p>
          <p>
            Upto <strong>₹25,000 off on Exchange</strong>
          </p>
        </section>
      </div> 

)
  }
)
}


      {/* <div className="cart-container">
        <section className="img">
          <img src="" alt="" />
        </section>
        <section className="details">
          <h2 className="title"></h2>
          <div className="rating-details">
            <span className="rating"></span>
            <span className="review">199 Ratings & 22 Reviews</span>
          </div>
          <div className="specifications">
            <ul>
              <li>Processor:</li>
              <li>RAM:</li>
              <li>Storage:</li>
              <li>Display:</li>
              <li>Graphics:</li>
              <li>Battery:</li>
              <li>Weight:</li>
            </ul>
          </div>
        </section>
        <section className="price">
          <p className="price">₹</p>
          <p>Top discount of the sale</p>
          <p>
            Upto <strong>₹25,000 off on Exchange</strong>
          </p>
        </section>
      </div> */}
    </main>
  );
}

export default Cart;
