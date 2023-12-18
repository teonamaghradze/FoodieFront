import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Carts() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <div>
        <span>X</span>
      </div>

      <div>
        {cartProducts.length === 0 ? (
          <h6>No items are added yet</h6>
        ) : (
          cartProducts.map((item, i) => <CartItem item={item} key={i} />)
        )}
      </div>

      <div>
        <h6>
          subtotal amount: <span>${totalAmount}</span>
        </h6>
        <button>
          <Link to="/checkout"></Link>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Carts;
