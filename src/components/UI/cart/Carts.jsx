import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import "./Carts.scss";

function Carts() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <section className="cart-container">
      <div>
        {cartProducts.length === 0 ? (
          <h6 className="no-items">No items are added yet</h6>
        ) : (
          cartProducts.map((item, i) => <CartItem item={item} key={i} />)
        )}
      </div>

      <div>
        <h6 className="amount">
          subtotal amount: <span>${totalAmount}</span>
        </h6>
        <Link to="/checkout">
          <button className="checkout">Checkout</button>
        </Link>
      </div>
    </section>
  );
}

export default Carts;
