import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import Category from "../components/UI/category/Category";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/clipboard.png";
import featureImg03 from "../assets/images/pizzaa.png";
import networkImg from "../assets/images/network.png";

import products from "../assets/data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread(1).png";
import whyImg from "../assets/images/location.png";

import ProductCard from "../components/UI/product-card/ProductCard";
import "./Home.scss";
import CostumersSlider from "../components/UI/slider/CostumersSlider.jsx";

const featureData = [
  {
    title: "Quick delivery",
    imgUrl: featureImg01,
    desc: "Super Fast Delivery",
  },
  {
    title: "Easy to order",
    imgUrl: featureImg02,
    desc: "Online food ordering",
  },
  {
    title: "Best quality",
    imgUrl: featureImg03,
    desc: "Best quality food ordering",
  },
];

function Home() {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") setAllProducts(products);
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div>
      <section className="hero-section">
        <p className="hungry">Hungry?</p>
        <h5>
          Fastest <span>Delivery</span> & Easy <span>Pickup</span>
        </h5>
        <h2>Enjoy Your Food Without Leaving The House</h2>
        <p>
          Satisfy your cravings without stepping out ~ indulge in a diverse
          culinary experience delivered straight to your doorstep. Elevate your
          home dining with a menu that caters to your taste.
        </p>

        <Link to="/foods">
          <button>Order Now</button>
        </Link>
      </section>

      {/* <Category /> */}

      <section className="serving">
        {/* <div>
          <h1>What we serve</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aspernatur molestiae quae dicta sit deleniti nesciunt
            voluptatem? Porro qui perferendis doloremque asperiores eveniet
            nobis et culpa doloribus eaque. Ad, incidunt.
          </p>
        </div> */}

        <div className="serving-bottom">
          {featureData.map((item) => (
            <div className="serving-icon-container" key={item.desc}>
              <img className="serving-img" src={item.imgUrl} alt="" />
              <div className="serving-txt">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="food-categories">
        <h2>
          Our <span>Best Delivered</span> Categories
        </h2>
        <p>Most Popular food in the Restaurants</p>

        <div className="popular-food-buttons">
          <button
            className={`all-btn ${category === "ALL" ? "activeBtn" : ""}`}
            onClick={() => setCategory("ALL")}
          >
            All
          </button>

          <button
            className={`${category === "BURGER" ? "activeBtn" : ""}`}
            onClick={() => setCategory("BURGER")}
          >
            <div className="flex">
              <img src={foodCategoryImg01} alt="" />
              <span>Burger</span>
            </div>
          </button>
          <button
            className={`${category === "PIZZA" ? "activeBtn" : ""}`}
            onClick={() => setCategory("PIZZA")}
          >
            <div className="flex">
              <img src={foodCategoryImg02} alt="" />
              <span>Pizza</span>
            </div>
          </button>
          <button
            className={`${category === "BREAD" ? "activeBtn" : ""}`}
            onClick={() => setCategory("BREAD")}
          >
            <div className="flex">
              <img src={foodCategoryImg03} alt="" />
              Bread
            </div>
          </button>
        </div>
      </section>

      <section className="foods-container">
        {allProducts.map((item) => (
          <div key={item.id}>
            <ProductCard item={item} />
          </div>
        ))}
      </section>

      <section>
        <img style={{ width: "500px" }} src={whyImg} alt="" />
        <h2>WHY FOODIEFRONT?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
          harum? Optio temporibus voluptate nostrum aliquid, aliquam a ipsum
          eligendi at veritatis id. Laborum labore cumque distinctio deserunt
          voluptas fugit repellat.
        </p>

        <p>FREsh and tasty food</p>
        <p>quality support</p>
        <p>any location</p>
      </section>

      <section>
        <h2>Hot Pizza</h2>
        <div className="featured-food">
          {hotPizza.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <img src={networkImg} alt="" />

        <h5>Testimonial</h5>
        <h2>What are our costumers saying</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ea
          quis voluptates tempora, soluta tenetur temporibus accusantium ab
          voluptatum facilis error eaque beatae quaerat voluptatibus architecto,
          delectus illo rem esse?
        </p>
      </section>
      <CostumersSlider />
    </div>
  );
}

export default Home;
