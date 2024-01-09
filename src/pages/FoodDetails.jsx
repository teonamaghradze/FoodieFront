import React, { useEffect, useState } from "react";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import "./FoodDetails.scss";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shoppingCart/cartSlice";
import Slider from "react-slick";

function FoodDetails() {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");

  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();

  const [previewImg, setPreviewImg] = useState(product.image01);

  const relatedFood = products.filter(
    (item) => product.category === item.category
  );

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image01: product.image01,
      })
    );
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMessage);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // centerMode: true,

    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          // centerMode: true,
          // leftPadding: "5%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="food-details">
      <section className="details">
        <section className="images">
          <div className="side-images">
            <div onClick={() => setPreviewImg(product.image01)}>
              <img src={product.image01} alt="" />
            </div>
            <div onClick={() => setPreviewImg(product.image02)}>
              <img src={product.image02} alt="" />
            </div>
            <div onClick={() => setPreviewImg(product.image03)}>
              <img src={product.image03} alt="" />
            </div>
          </div>

          <div className="main-img">
            <div>
              <img src={previewImg} alt="" />
            </div>
          </div>
        </section>
        <section className="food-details-txt">
          <h2>{product.title}</h2>
          <span>${product.price}</span>
          <p>
            Category: <span>{product.category}</span>
          </p>
          <button onClick={addItem}>Add to cart</button>
        </section>
      </section>
      <section className="food-details-footer">
        <div className="tabs">
          <h4
            className={`${tab === "desc" ? "active-tab" : ""}`}
            onClick={() => setTab("desc")}
          >
            Description
          </h4>
          <h4
            className={`${tab === "review" ? "active-tab" : ""}`}
            onClick={() => setTab("review")}
          >
            review
          </h4>
        </div>

        {tab === "desc" ? (
          <p className="description-txt">{product.desc}</p>
        ) : (
          <section className="review">
            <div className="email">
              <p>Teona Maghradze</p>
              <p>mail@mail.com</p>
              <p>Great product</p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setEnteredName(e.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  required
                />
                <textarea
                  rows={5}
                  type="text"
                  placeholder="Enter Your Meesage"
                  onChange={(e) => setReviewMessage(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        )}
      </section>

      <h2 className="might-like">You might also like</h2>
      <Slider {...settings}>
        {relatedFood.map((item) => (
          <div key={item.id}>
            <ProductCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FoodDetails;
