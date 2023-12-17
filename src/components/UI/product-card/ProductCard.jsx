import React from "react";
// import productImg from "../../../assets/images/product_01.3.jpg";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img style={{ width: "100px" }} src={item.image01} alt="" />

      <div>
        <h5>
          <Link to={`/foods/${item.id}`}>{item.title}</Link>
        </h5>

        <div>
          <span>${item.price}</span>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
