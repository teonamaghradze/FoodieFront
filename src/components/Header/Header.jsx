import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import cart from "../../assets/images/cart-shopping-solid.svg";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shoppingCart/cartUiSlice";

import bars from "../../assets/images/bars-solid.svg";
import { useState } from "react";

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
];

function NavLinks({ className }) {
  return (
    <div className={className}>
      {navLinks.map((item, i) => (
        <NavLink to={item.path} key={item.path}>
          {item.display}
        </NavLink>
      ))}
    </div>
  );
}

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <h5>
          Foo<span style={{ color: "red" }}>die</span>
        </h5>
      </div>

      {/* MEnU */}

      <NavLinks className="menu active" />

      {/* RIGHT ICONS */}
      <div className="burger-cart-container">
        <div className="burger-menu" onClick={handleBurgerClick}>
          <img src={bars} alt="" />
        </div>
        {isOpen && <NavLinks className="mobile-nav" />}
        <div>
          <Link>
            <img className="cart-logo" onClick={toggleCart} src={cart} alt="" />
          </Link>
          <span className="cart-quantity">{totalQuantity}</span>
        </div>
      </div>

      {/* <Carts /> */}
    </nav>
  );
}

export default Header;
