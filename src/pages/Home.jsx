import React from "react";
import heroImg from "../assets/data/images/hero (1).png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";

import featureImg01 from "../assets/data/images/service-01.png";
import featureImg02 from "../assets/data/images/service-02.png";
import featureImg03 from "../assets/data/images/service-03.png";

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
      </section>
    </div>
  );
}

export default Home;
