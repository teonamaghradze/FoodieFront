import productImg from "../../../assets/images/product_01.1.jpg";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shoppingCart/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        image01: item.image01,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(item.id));
  };
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="cart-item">
      <div className="cart">
        <img style={{ width: "200px" }} src={item.image01} alt="" />
        <div>
          <h6>{item.title}</h6>
          <p>
            {item.quantity}x <span>${item.totalPrice}</span>
          </p>
        </div>
        <div>
          <span onClick={decreaseItem}>-</span>
          <span>{item.quantity}</span>
          <span onClick={incrementItem}>+</span>
        </div>
        <span onClick={deleteItem}>X delete</span>
      </div>
    </div>
  );
}

export default CartItem;
