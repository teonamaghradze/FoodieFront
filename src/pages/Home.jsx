import React, { useEffect, useState } from "react";
import heroImg from "../assets/data/images/hero (1).png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";

import featureImg01 from "../assets/data/images/service-01.png";
import featureImg02 from "../assets/data/images/service-02.png";
import featureImg03 from "../assets/data/images/service-03.png";
import networkImg from "../assets/images/network.png";

import products from "../assets/data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread(1).png";
import whyImg from "../assets/images/location.png";

import ProductCard from "../components/UI/product-card/ProductCard";
import "./Home.scss";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipusmsdaaaaaaaaaaa",
  },
  {
    title: "Super dine in",
    imgUrl: featureImg02,
    desc: "Lorem ipusmsdaaaaaaaaa",
  },
  {
    title: "Easy Pick up",
    imgUrl: featureImg03,
    desc: "Lorem ipusmdaaaaaaaaaaa",
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
      <section>
        <div className="hero-img">
          <h5>Easy way to make an order</h5>
          <h1>
            <span>Hungry?</span>
            Just wait for food at your door
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit corrupti quas odio, dolorum exercitationem eaque
            quaerat magni pariatur dolorem obcaecati aspernatur provident rem
            tempore possimus optio necessitatibus atque, non alias.
          </p>

          <button>ORDER NOW</button>
          <Link to="/foods">See all foods</Link>
          <div>
            <p>No Shipping Charge</p>
          </div>
          <div>
            <p>100% secure checkout</p>
          </div>

          <img style={{ width: "300px" }} src={heroImg} alt="" />
        </div>
        <Category />

        <div>
          <h1>What we serve</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aspernatur molestiae quae dicta sit deleniti nesciunt
            voluptatem? Porro qui perferendis doloremque asperiores eveniet
            nobis et culpa doloribus eaque. Ad, incidunt.
          </p>
        </div>

        {featureData.map((item) => (
          <div key={item.desc}>
            <img src={item.imgUrl} alt="" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}

        <div>
          <h2>Popular Foods</h2>

          <div>
            <button
              className={`${category === "ALL" ? "active" : ""}`}
              onClick={() => setCategory("ALL")}
            >
              All
            </button>

            <button
              className={`${category === "BURGER" ? "active" : ""}`}
              onClick={() => setCategory("BURGER")}
            >
              <img src={foodCategoryImg01} alt="" />
              Burger
            </button>
            <button
              className={`${category === "PIZZA" ? "active" : ""}`}
              onClick={() => setCategory("PIZZA")}
            >
              <img src={foodCategoryImg02} alt="" />
              Pizza
            </button>
            <button
              className={`${category === "BREAD" ? "active" : ""}`}
              onClick={() => setCategory("BREAD")}
            >
              <img src={foodCategoryImg03} alt="" />
              Bread
            </button>
          </div>
        </div>

        <div>
          {allProducts.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>

        <div>
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
        </div>

        <div>
          <h2>Hot Pizza</h2>
          {hotPizza.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>

        <div>
          <img style={{ width: "200px" }} src={networkImg} alt="" />

          <h5>Testimonial</h5>
          <h2>What are our costumers saying</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ea
            quis voluptates tempora, soluta tenetur temporibus accusantium ab
            voluptatum facilis error eaque beatae quaerat voluptatibus
            architecto, delectus illo rem esse?
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
