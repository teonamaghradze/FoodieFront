import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import cart from "../../assets/images/cart-shopping-solid.svg";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shoppingCart/cartUiSlice";

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
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

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
        <Link>
          <img onClick={toggleCart} src={cart} alt="" />
        </Link>
        <span>{totalQuantity}</span>
      </div>
    </div>
  );
}

export default Header;
