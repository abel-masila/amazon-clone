import React from "react";
import "./Product.css";

function Product({ title, rating, image, price }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="rating" key={i}>
                  🌟
                </span>
              ))}
          </p>
        </div>
      </div>
      <img src={image} alt="book" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
