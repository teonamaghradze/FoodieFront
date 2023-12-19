import React from "react";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import CommonSection from "../components/UI/common-section/CommonSection";

import productImg from "../assets/images/product_01.1.jpg";
import "./FoodDetails.scss";

function FoodDetails() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <CommonSection title="product 01" />

        <section
          style={{ display: "flex", alignItems: "center" }}
          className="images"
        >
          <div className="side-images">
            <div>
              <img style={{ width: "100px" }} src={productImg} alt="" />
            </div>
            <div>
              <img style={{ width: "100px" }} src={productImg} alt="" />
            </div>
            <div>
              <img style={{ width: "100px" }} src={productImg} alt="" />
            </div>
          </div>

          <div className="main-img">
            <div>
              <img style={{ width: "300px" }} src={productImg} alt="" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>pizza with mushrooms</h2>
            <span>$34</span>
            <p>
              Category: <span>Burger</span>
            </p>
            <button>Add to cart</button>
          </div>
        </section>
      </div>
      <section>
        <h6>Description</h6>
        <h6>review</h6>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          ratione quasi recusandae culpa soluta, ipsam fugiat iusto velit
          sapiente similique amet dolorum aperiam accusantium. Perferendis
          officia numquam nemo aperiam reiciendis.
        </p>
      </section>
    </>
  );
}

export default FoodDetails;
