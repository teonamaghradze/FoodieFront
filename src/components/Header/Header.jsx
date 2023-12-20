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

      <div className="menu active">
        {navLinks.map((item, i) => (
          <NavLink to={item.path} key={item.path}>
            {item.display}
          </NavLink>
        ))}
      </div>

      {/* RIGHT ICONS */}
      <div>
        <Link>
          <img className="cart-logo" onClick={toggleCart} src={cart} alt="" />
        </Link>
        <span className="cart-quantity">{totalQuantity}</span>
      </div>
    </nav>
  );
}

export default Header;
