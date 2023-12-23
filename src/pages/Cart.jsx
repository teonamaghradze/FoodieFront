import { useDispatch, useSelector } from "react-redux";
import CommonSection from "../components/UI/common-section/CommonSection";
import { cartActions } from "../store/shoppingCart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div>
      <CommonSection title="Your Shopping Cart" />
      <section>
        <div>
          {cartItems.length === 0 ? (
            <h5>Your Cart is empty</h5>
          ) : (
            <table>
              <tr>
                <th>Image</th>
                <th>Product title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>delete</th>
              </tr>
              <tbody>
                {cartItems.map((item) => (
                  <Tr item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div>
          <h6>Subtotal: ${totalAmount}</h6>
          <p>Taxes and shipping will be calculated at checkout</p>
          <div>
            <button>
              <Link to="/foods">Continue Shopping</Link>
            </button>
            <button>
              <Link to="/checkout">Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td>
        <img style={{ width: "100px" }} src={image01} alt="" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td onClick={deleteItem}>❌</td>
    </tr>
  );
};

export default Cart;
