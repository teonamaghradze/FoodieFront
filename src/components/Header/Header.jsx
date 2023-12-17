import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import cart from "../../assets/images/cart-shopping-solid.svg";
import "./Header.scss";

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

function Header() {
  return (
    <div className="header" style={{ display: "flex" }}>
      <div className="logo">
        <img style={{ width: "60px" }} src={logo} alt="" />
        <h5>FoodieFront</h5>
      </div>

      {/* MEnU */}

      <div>
        <div className="menu active">
          {navLinks.map((item, i) => (
            <NavLink to={item.path} key={item.path}>
              {item.display}
            </NavLink>
          ))}
        </div>
      </div>

      {/* RIGHT ICONS */}
      <div>
        <Link to="./cart">
          <img src={cart} alt="" />
        </Link>
        <span>0</span>
      </div>
    </div>
  );
}

export default Header;
