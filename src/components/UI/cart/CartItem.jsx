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
      <img src={item.image01} alt="" />
      <div>
        <h6>{item.title}</h6>
        <p className="quantity-price">
          {item.quantity}x <span>${item.totalPrice}</span>
        </p>
      </div>
      <div>
        <button onClick={decreaseItem}>➖</button>
        <span> {item.quantity} </span>
        <button onClick={incrementItem}>➕</button>
      </div>
      <button className="delete-btn" onClick={deleteItem}>
        ❌
      </button>
    </div>
  );
}

export default CartItem;
